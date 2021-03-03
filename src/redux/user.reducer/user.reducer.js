const init_state = {
    user : {
        displayName : null,
        user : null,

    },
}

export const set_user = (state=init_state,action={}) =>{
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user : action.payload1,
                displayName : action.payload2,
            }
        default : 
            return state;
    }
}