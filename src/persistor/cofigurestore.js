import { createStore ,applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {logger} from 'redux-logger'
import {rootReducer} from '../redux/rootreducer'
 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['add_to_cart']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export const create = () => {
  let store = createStore(persistedReducer,applyMiddleware(logger))
  let persistor = persistStore(store)
  return { store, persistor }
}