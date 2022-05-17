import { GET_CART, ADD_TO_CART, PROCEED_CHECKOUT, REMOVE_FROM_CART } from "../actions/cart";

export function cart(state = [], action){
    switch (action.type) {
        case GET_CART:
            return{
                ...state,
                ...action.cart
            }
        case ADD_TO_CART:
            const id = action.productId
            const authedUser = action.authedUser
            return{
                ...state,
                [authedUser]:{
                    ...state.authedUser,
                    cart:{
                        [id]: {
                            user: authedUser,
                            number: state[id] === undefined ? 1 : state[id].number + 1
                        }
                    }
                }
                
            }
        case PROCEED_CHECKOUT:
            return{
                ...action.cart
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                [action.id]:{
                    ...state[action.id],
                    number: state[action.id].number - 1
                }
            }
        default:
            return state;
    }
}