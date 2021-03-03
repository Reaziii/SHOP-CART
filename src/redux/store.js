import {rootReducer} from './rootreducer'
import {createStore,applyMiddleware} from 'redux'

import {logger} from 'redux-logger'
export const store = createStore(
    rootReducer,
    applyMiddleware(logger)
)