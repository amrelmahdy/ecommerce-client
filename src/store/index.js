

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk';
import appReducer from './app/app.slice';
import productsReducer from './products/products.slice'
import categoriesReducer from './categories/categories.slice'
import vendorsReducer from './vendors/vendors.slice';
import authReducer from './auth/auth.slice';
import cartReducer from './cart/cart.slice';


// persistance configuration for root reducers
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: [],
  // timeout: null,
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  products: productsReducer,
  categories: categoriesReducer,
  vendors: vendorsReducer,
  cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (_getDefaultMiddleware) => [thunk]
});

const persistor = persistStore(store);

export { store, persistor };
