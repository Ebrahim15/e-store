import { GET_PRODUCTS, SELECT_PRODUCT, UPDATE_INVENTORY } from "../actions/products";

export function products(state= [], action){
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
                ...action.products
            }
        case SELECT_PRODUCT:
            return{
                ...state,
                [action.productId] : {
                    ...state[action.productId],
                    inventory : state[action.productId].inventory - action.number  
                }
            }
        case UPDATE_INVENTORY:
            return {
                ...state,
                [action.productId]:{
                    ...state[action.productId],
                    inventory: state[action.productId].inventory + 1
                }
            }
        default:
            return state;
    }
}