import {collectlist} from '../../asset/collectshopdata'
const init_state = {
    shop_data : [],
}


export const shop_data_add = (state=init_state,actions={})=>{
    switch(actions.type){
        case 'GET_ITEMS':
            return {
                ...state,
                shop_data : [...actions.payload]
            }
        default : 
            return state;
    }
}