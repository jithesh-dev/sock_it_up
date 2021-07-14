import db from "../firebase";
export const initialState = {
  basket: [
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
