export const initialState = {
  basket: [
    {
      id: 1080543,
      name: "STAR WARS 40TH BOX",
      catagory: "Star Wars infiknit",
      gender: "Men",
      price: 85,
      qty: 4,
      image_1:
        "https://www.stance.com/dw/image/v2/BBBN_PRD/on/demandware.static/-/Sites-masterCatalog_Stance/default/dw6307a569/prod_images/A545B20STA_MUL.jpg?sw=388&sh=480&sm=fit&q=85",
      image_2:
        "https://www.stance.com/dw/image/v2/BBBN_PRD/on/demandware.static/-/Sites-masterCatalog_Stance/default/dw7b5a2527/prod_images/A545B20STA_MUL_ALT_02.jpg?sw=388&sh=480&sm=fit&q=85",
      image_3:
        "https://www.stance.com/dw/image/v2/BBBN_PRD/on/demandware.static/-/Sites-masterCatalog_Stance/default/dw11a2128f/prod_images/A558B20WIL_OFW_ALT_02.jpg?sw=388&sh=480&sm=fit&q=85",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  let newBasket = [...state.basket];
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "ADD_QTY":
      newBasket.find((product) => product.id === action.id).qty += 1;
      return { ...state, basket: newBasket };

    case "MINUS_QTY":
      const product = newBasket.find((product) => product.id === action.id);
      product.qty > 1 && product.qty--;
      return { ...state, basket: newBasket };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) => {
        return basketItem.id === action.id;
      });
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

    default:
      return state;
  }
}

export default reducer;
