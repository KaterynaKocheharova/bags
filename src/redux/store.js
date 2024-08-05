import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { productsReducer } from "./products/slice";
import { filtersReducer } from "./filters/filtersSlice";
import cartReducer from "./cart/cartSlice";

const authPersistConfiguration = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const productsPersistConfiguration = {
  key: "items",
  storage,
  whitelist: ["wishlist", "cartlist"],
};

const cartPersistConfiguration = {
  key: "cart",
  storage,
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfiguration, authReducer),
    products: persistReducer(productsPersistConfiguration, productsReducer),
    cart: persistReducer(cartPersistConfiguration, cartReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
