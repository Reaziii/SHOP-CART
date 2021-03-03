const init = {
    value : 1000,
    name : "reaz ahammeed",
}

export const practicereducer = (state=init,action={})=>{
    switch(action.type){
        case 'INCREMENT' :
            return {
                ...state,
                value : state.value+action.payload
            }
        default : 
            return state;
    }
}