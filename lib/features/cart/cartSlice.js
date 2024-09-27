// import { createSelector, createSlice } from "@reduxjs/toolkit";

// const initialState = { cart: [] };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const itemInCart = state.find(
//         (item) =>
//           item.id === action.payload.id && item.size === action.payload.size
//       );

//       if (itemInCart) {
//         itemInCart.quantity++;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.find(
//         (item) =>
//           item.id === action.payload.id && item.size === action.payload.size
//       );

//       item.quantity++;
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.find(
//         (item) =>
//           item.id === action.payload.id && item.size === action.payload.size
//       );

//       if (item.quantity === 1) {
//         return state.filter(
//           (item) =>
//             !(
//               item.id === action.payload.id && item.size === action.payload.size
//             )
//         );
//       } else {
//         item.quantity--;
//       }
//     },
//     removeItem: (state, action) => {
//       return state.filter(
//         (item) =>
//           !(item.id === action.payload.id && item.size === action.payload.size)
//       );
//     },
//   },
// });

// export const getCartItems = (state) => state.cart;
// export const getItemTotal = (cartItems, itemId) => {
//   const item = cartItems?.find((product) => product.id === itemId);

//   if (!item) {
//     return { itemCount: 0, total: 0.0 };
//   }

//   const itemCount = item.quantity;
//   const total = (item.price * item.quantity).toFixed(2);

//   return { itemCount, total };
// };

// export const getCartLength = createSelector(
//   (state) => state.cart,
//   (cart) =>
//     Array.isArray(cart)
//       ? cart.reduce((count, item) => count + item.quantity, 0)
//       : 0
// );

// export const getSubtotal = createSelector(
//   (state) => state.cart,
//   (cart) =>
//     Array.isArray(cart)
//       ? cart.reduce((total, item) => total + item.price * item.quantity, 0)
//       : 0
// );

// export const cartReducer = cartSlice.reducer;
// export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
//   cartSlice.actions;

import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (item) item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (item.quantity === 1) {
        state.cart = state.cart.filter(
          (item) =>
            !(
              item.id === action.payload.id && item.size === action.payload.size
            )
        );
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size)
      );
    },
  },
});

export const getCartItems = (state) => state.cart.cart; // Access state.cart.cart
export const getItemTotal = (cartItems, itemId) => {
  const item = cartItems?.find((product) => product.id === itemId);

  if (!item) {
    return { itemCount: 0, total: 0.0 };
  }

  const itemCount = item.quantity;
  const total = (item.price * item.quantity).toFixed(2);

  return { itemCount, total };
};

export const getCartLength = createSelector(
  (state) => state.cart.cart,
  (cart) =>
    Array.isArray(cart)
      ? cart.reduce((count, item) => count + item.quantity, 0)
      : 0
);

export const getSubtotal = createSelector(
  (state) => state.cart.cart,
  (cart) =>
    Array.isArray(cart)
      ? cart.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0
);

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
