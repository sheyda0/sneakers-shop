import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemInWishlist = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (!itemInWishlist) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const getWishlistItems = (state) => state.wishlist.wishlist;
export const getWishlistLength = createSelector(
  (state) => state.wishlist.wishlist,
  (wishlist) => wishlist.length
);

export const wishlistReducer = wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
