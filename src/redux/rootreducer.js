import {combineReducers} from 'redux'
import {set_user} from './user.reducer/user.reducer'
import {add_to_cart} from './addtocart/addtocart.reducer'
import {shop_data_add} from './collectlist/collectlist.reducer'
import {practicereducer} from './practicereducer/practicereducer'
export const rootReducer = combineReducers({
    set_user,
    add_to_cart,
    shop_data_add,
    practicereducer
}) 