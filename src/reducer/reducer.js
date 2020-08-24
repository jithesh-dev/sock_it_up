import db from "../firebase";
export const initialState = {
  basket: [
    // {
    //   id: 1080543,
    //   name: "STAR WARS 40TH BOX",
    //   catagory: "Star Wars infiknit",
    //   gender: "Men",
    //   price: 85,
    //   qty: 4,
    //   image_1:
    //     "https://www.stance.com/dw/image/v2/BBBN_PRD/on/demandware.static/-/Sites-masterCatalog_Stance/default/dw6307a569/prod_images/A545B20STA_MUL.jpg?sw=388&sh=480&sm=fit&q=85",
    //   image_2:
    //     "https://www.stance.com/dw/image/v2/BBBN_PRD/on/demandware.static/-/Sites-masterCatalog_Stance/default/dw7b5a2527/prod_images/A545B20STA_MUL_ALT_02.jpg?sw=388&sh=480&sm=fit&q=85",
    //   image_3:
    //     "https://www.stance.com/dw/image/v2/BBBN_PRD/on/demandware.static/-/Sites-masterCatalog_Stance/default/dw11a2128f/prod_images/A558B20WIL_OFW_ALT_02.jpg?sw=388&sh=480&sm=fit&q=85",
    // },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

async function updateQtyDB(uid, pid, qty) {
  try {
    await db
      .collection("users")
      .doc(uid)
      .collection("cartItems")
      .doc(pid)
      .update({ qty: qty });
  } catch (err) {
    console.log("fetch failed", err);
  }
}
async function deleteDB(uid, pid) {
  try {
    await db
      .collection("users")
      .doc(uid)
      .collection("cartItems")
      .doc(pid)
      .delete();
  } catch (err) {
    console.log("fetch failed", err);
  }
}

function reducer(state, action) {
  let newBasket = [...state.basket];

  switch (action.type) {
    case "ADD_TO_BASKET":
      // const item = newBasket.find((product) => product.id === action.id);
      // console.log(item);
      // state.user && !item && addDB(state.user.uid, action.item);

      return { ...state, basket: [...state.basket, action.item] };

    case "ADD_QTY":
      const prod = newBasket.find((product) => product.id === action.id);
      prod.qty++;
      state.user && updateQtyDB(state.user.uid, prod.pid, prod.qty);

      return { ...state, basket: newBasket };

    case "MINUS_QTY":
      const product = newBasket.find((product) => product.id === action.id);
      product.qty > 1 && product.qty--;
      state.user &&
        product.qty > 1 &&
        updateQtyDB(state.user.uid, product.pid, product.qty);

      return { ...state, basket: newBasket };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) => {
        return basketItem.id === action.id;
      });
      const prodToDelete = state.basket.find((basketItem) => {
        return basketItem.id === action.id;
      });

      state.user && deleteDB(state.user.uid, prodToDelete.pid);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id:${action.id}) as its not in basket`
        );
      }
      return { ...state, basket: newBasket };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_BASKET":
      return {
        ...state,
        basket: action.items,
      };

    default:
      return state;
  }
}

export default reducer;

// async function addDB(uid, { id, name, catagory, price, image_1, gender, qty }) {
//   console.log("object");
//   // try {
//   //   await db
//   //     .collection("users")
//   //     .doc(uid)
//   //     .collection("cartItems")
//   //     .add({ id, name, catagory, price, image_1, gender, qty: 1 });
//   // } catch (err) {
//   //   console.log("fetch failed", err);
//   // }
// }

// async function getDB(uid) {
//   let item = [];
//   try {
//     // item = await db.collection("users").doc(uid).collection("cartItems").get();
//     const snap = await db
//       .collection("users")
//       .doc(uid)
//       .collection("cartItems")
//       .onSnapshot((snapshot) =>
//         snapshot.docs.map((doc) => item.push(doc.data()))
//       );
//     return "snap";
//   } catch (err) {
//     console.log("fetch failed", err);
//     return null;
//   }
// }
