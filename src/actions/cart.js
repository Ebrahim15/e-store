export const ADD_TO_CART = "ADD_TO_CART"
export const GET_CART = "GET_CART"
export const PROCEED_CHECKOUT = "PROCEED_CHECKOUT"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function recieveCart(cart){
    return {
        type: GET_CART,
        cart
    }
}

export function addToCart(productId, authedUser){
    return{
        type:ADD_TO_CART,
        productId, 
        authedUser
    }
}

export function proceedCheckout(cart){
    return{
        type:PROCEED_CHECKOUT,
        cart
    }
}

export function removeFromCart(id){
    return {
        type: REMOVE_FROM_CART,
        id
    }
}