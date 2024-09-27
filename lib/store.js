import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { cartReducer } from "./features/cart/cartSlice";
import { wishlistReducer } from "./features/wishlist/wishlistSlice";
import { filtersReducer } from "./features/filters/filtersSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  filters: filtersReducer, // Not persisted
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"], // Only persist cart and wishlist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
