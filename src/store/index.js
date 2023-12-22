import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // 
import { authReducer, storageReducer } from './../store/reducers';

import { CLEAR_REDUCERS } from './constants/redux.constants';

// persistance configuration for root reducers
const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['storage', 'auth', 'errorPopUp'],
  timeout: null,
};

const storagePersistConfig = {
  key: 'storage',
  storage,
  blacklist: [], // here we should have the reducers not to be persisted
  timeout: null,
};

// configuration for auth reducers
const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: [], // here we should have the reducers not to be persisted
  timeout: null,
};

const rootStorageReducer = (state, action) => {
  let updatedState = state;
  if (action.type === CLEAR_REDUCERS) {
    updatedState = undefined;
  }
  return storageReducer(updatedState, action);
};

const rootAuthReducer = (state, action) => {
  let updatedState = state;
  if (action.type === CLEAR_REDUCERS) {
    updatedState = undefined;
  }
  return authReducer(updatedState, action);
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, rootAuthReducer),
  storage: persistReducer(storagePersistConfig, rootStorageReducer)
});
const middleWare = [applyMiddleware(thunk)];

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = createStore(persistedReducer, compose(...middleWare));
const persistor = persistStore(store);

export { store, persistor, rootReducer };
