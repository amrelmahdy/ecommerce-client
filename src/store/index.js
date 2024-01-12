

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk';
import productsReducer from './products/products.slice'
import categoriesReducer from './categories/categories.slice'
import vendorsReducer from './vendors/vendors.slice';



// persistance configuration for root reducers
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: [],
  // timeout: null,
};

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  vendors: vendorsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (_getDefaultMiddleware) => [thunk]
});

const persistor = persistStore(store);

export { store, persistor };
