export const GET_USERS = "GET_USERS"
export const UPDATE_BALANCE = "UPDATE_BALANCE"
export const ADD_TO_CART = "ADD_TO_CART"
export const PROCEED_CHECKOUT = "PROCEED_CHECKOUT"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const SIGN_UP = "SIGN_UP"

export function recieveUsers(users){
    return{
        type:GET_USERS,
        users
    }
}

export function updateBalance(newBalance, authedUser){
    return{
        type:UPDATE_BALANCE,
        newBalance,
        authedUser
    }
}

export function addToCart(productId, authedUser){
    return{
        type:ADD_TO_CART,
        productId, 
        authedUser
    }
}

export function proceedCheckout(authedUser){
    return{
        type:PROCEED_CHECKOUT,
        authedUser
    }
}

export function removeFromCart(id, authedUser){
    return {
        type: REMOVE_FROM_CART,
        id,
        authedUser
    }
}

export function signUp(firstName, lastName, userName, password, email, phoneNumber, address){
    return{
        type:SIGN_UP,
        firstName, 
        lastName, 
        userName, 
        password, 
        email, 
        phoneNumber, 
        address
    }
}