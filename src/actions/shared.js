import { recieveProducts, selectProduct, updateInventory} from "./products";
import { addToCart, proceedCheckout } from "./users";
import { getInitialData } from "../api/shop2";
import { showLoading, hideLoading } from "react-redux-loading";
import { recieveUsers, updateBalance } from "./users";
import { setAuthedUser } from './authedUser'
import { removeFromCart, signUp } from "./users";


export function handleLogin(authedUser){
    return (dispatch) => {
        dispatch(setAuthedUser(authedUser))
    }
}

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({products, users}) => {
            dispatch(recieveProducts(products))
            dispatch(recieveUsers(users))
            dispatch(setAuthedUser('Sign out'))
            dispatch(hideLoading())
        })
    }
}



export function handleCart(productId, authedUser){
    return (dispatch) => {
        dispatch(addToCart(productId, authedUser))
        // dispatch(selectProduct(productId))  // Updates the inventory of the product if an item is added to cart.
    }
}

export function handleCheckout(newBalance, authedUser, productId, number){
    return (dispatch) => {
        dispatch(proceedCheckout(authedUser))
        dispatch(updateBalance(newBalance, authedUser))
        dispatch(selectProduct(productId, number))
    }
}


export function handleRemoveFromCart(id, authedUser){
    return (dispatch) => {
        dispatch(removeFromCart(id, authedUser))
        // dispatch(updateInventory(id))
    }
}

export function handleSignUp(firstName, lastName, userName, password, mail, phoneNumber, address){
    return (dispatch) => {
        dispatch(signUp(firstName, lastName, userName, password, mail, phoneNumber, address))
    }
}