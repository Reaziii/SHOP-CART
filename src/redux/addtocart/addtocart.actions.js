export const add_to_cart = (name) =>({
    type : 'ADD_TO_CART',
    payload : name,
    quantity : 1,
})

export const REMOVE_FROM_CARD = (name) =>({
    type : 'REMOVE_FROM_CARD',
    payload : name,
})
export const REMOVE_HOLE_ITEM = (name) => ({
    type : 'REMOVE_HOLE_ITEM',
    payload : name,
})

export const toggle = () => ({
    type : 'TOGGLE',
})

export const hide = () => ({
    type : 'HIDE',
})