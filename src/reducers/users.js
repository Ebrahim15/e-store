import { GET_USERS, UPDATE_BALANCE, ADD_TO_CART, REMOVE_FROM_CART, PROCEED_CHECKOUT, SIGN_UP } from "../actions/users";

export function users(state = [], action){
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                ...action.users
            }
        case SIGN_UP:
            const id = action.firstName.toLowerCase()
            return{
                ...state,
                [id]:{
                    id:action.firstName,
                    firstName:action.firstName,
                    lastName:action.lastName,
                    username:action.userName,
                    password:action.password,
                    address:action.address,
                    balance: 5000,
                    phoneNumber: action.phoneNumber,
                    email: action.email,
                    cart:[]
                }
            }
        case UPDATE_BALANCE:
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    balance: action.newBalance
                }
            }
        case ADD_TO_CART:
                return {
                    ...state,
                    [action.authedUser]:{
                        ...state[action.authedUser],
                        cart: state[action.authedUser].cart.filter((product) => product.id === action.productId).length === 0 ?
                        state[action.authedUser].cart.concat({
                            id:action.productId,
                            number:1
                        })
                        :
                        state[action.authedUser].cart.map((item) => item.id === action.productId ?
                        {...item, number:item.number + 1} 
                        :
                        item
                        )
                    }
                }
        case PROCEED_CHECKOUT:
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    cart:[]
                }
            }
        case REMOVE_FROM_CART:
            
            return{
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    cart: state[action.authedUser].cart.map((product) => product.id === action.id ? 
                    {...product, number:product.number - 1}
                    :
                    product
                    )
                    .filter((product) => product.number > 0)
                }
            }
        default:
            return state;
    }
}