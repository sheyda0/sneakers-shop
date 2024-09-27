import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  sizes: [],
  colors: [],
  minPrice: 0,
  maxPrice: 500,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    selectBrand: (state, action) => {
      const brandName = action.payload;
      const brandIndex = state.brands.indexOf(brandName);

      if (brandIndex !== -1) {
        state.brands.splice(brandIndex, 1);
      } else {
        state.brands.push(brandName);
      }
    },
    selectSize: (state, action) => {
      const size = action.payload;
      const sizeIndex = state.sizes.indexOf(size);

      if (sizeIndex !== -1) {
        state.sizes.splice(sizeIndex, 1);
      } else {
        state.sizes.push(size);
      }
    },
    selectColor: (state, action) => {
      const color = action.payload;
      const colorIndex = state.colors.indexOf(color);

      if (colorIndex !== -1) {
        state.colors.splice(colorIndex, 1);
      } else {
        state.colors.push(color);
      }
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setSizes: (state, action) => {
      state.sizes = action.payload;
    },
    setColors: (state, action) => {
      state.colors = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    resetFilters: (state, action) => {
      state.brands = [];
      state.sizes = [];
      state.colors = [];
      state.minPrice = 0;
      state.maxPrice = 500;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const {
  selectBrand,
  selectSize,
  selectColor,
  setBrands,
  setSizes,
  setColors,
  setMinPrice,
  setMaxPrice,
  resetFilters,
} = filtersSlice.actions;
