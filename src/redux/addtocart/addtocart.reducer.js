const init_state = {
    added_list : [

    ],
    quantity : 0,
    total : {
    },
    total_money : 0,
    init_hid : 0,
}


export const add_to_cart = (state=init_state,action={})=>{

    switch(action.type){
        case 'TOGGLE':
            return {
                ...state,
                init_hid : !state.init_hid
            }
        case 'HIDE':
            return {
                ...state,
                init_hid : 0,
            }

        case 'ADD_TO_CART':
            var name = action.payload.name;
            if(!state.total[name]){

                state.total[name]  = 0;
                return {
                    ...state,
                    added_list : [
                        ...state.added_list,
                        action.payload,
                    ],
                    quantity : state.quantity+1,
                    total : {
                        ...state.total,
                        [name] : state.total[name]+1,
                    },
                    total_money : state.total_money+action.payload.price
                }
            }
            return {
                ...state,
                added_list : [
                    ...state.added_list,
                ],
                quantity : state.quantity+1,
                total : {
                    ...state.total,
                    [name] : state.total[name]+1,
                },
                total_money : state.total_money+action.payload.price

            }
        case 'REMOVE_FROM_CARD':
            var {name,price} = action.payload;
            const a = [...state.added_list]
            var b = [];

            if(state.total[name]===1){
                for(var i = 0,j=0;i<a.length;i++){
                    if(a[i].name!==name){
                        b[j] = a[i];
                        j++;
                    }
                }


            }
            else b = [...a]

            return {
                ...state,
                quantity : state.quantity-1,
                total : {
                    ...state.total,
                    [name] : state.total[name] - 1,
                },
                added_list : [...b],
                total_money : state.total_money-price,

            }
        case 'REMOVE_HOLE_ITEM':
            var {name,price} = action.payload;
            const f = [...state.added_list]
            var g = [];


            for(var i = 0,j=0;i<f.length;i++){
                if(f[i].name!==name){
                    g[j] = f[i];
                    j++;
                }
            }



            return {
                ...state,
                quantity : state.quantity-state.total[name],
                total : {
                    ...state.total,
                    [name] : 0,
                },
                added_list : [...g],
                total_money : (state.total_money-(state.total[name]*price))

            }
        
        default : 
            return state;
    }
}