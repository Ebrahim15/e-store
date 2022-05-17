import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { handleCheckout } from "../actions/shared";
import { handleRemoveFromCart } from '../actions/shared'


class ProceedToCheckout extends Component {
    state = {
        toHome : false,
    }
    handleRemoveClick = (e) => {
        e.preventDefault()
        const { dispatch, authedUser } = this.props
        dispatch(handleRemoveFromCart(e.target.value, authedUser))
    }
    handleClick = (e) => {
        e.preventDefault()
        const { authedUser, dispatch, cart } = this.props
        const newBalance = e.target.value
        const productId = e.target.id
        const number = cart.filter((product) => product.id === productId).map((product) => product.number)
        console.log("number: ",number)
        dispatch(handleCheckout(newBalance, authedUser, productId, number))
        this.setState(({
            toHome: true
        }))
        
    }
    render(){
        let total = 0
        
        const { cart, products, users, authedUser } = this.props
        const { toHome } = this.state
        var id
        var disabled

        if(toHome === true) {
            return <Navigate to={"/"}></Navigate>
        }
        return(
            <div className="proceed-checkout-container">
                <form className="proceed-checkout-form">
                    
                    <ul>
                    <label>Checkout</label>
                        {
                            cart.map((product) => {
                                id = product.id
                                total = total + (products[id].price * product.number)
                                return products[id].inventory >= product.number ? 
                                <li className="li" key={id}>{`Item: ${products[id].title}  Costs: $${products[id].price} x${product.number}`}<button value={id} className="removeButton" onClick={this.handleRemoveClick}>X</button></li>
                                :
                                <li className="li" key={id}>{`Item: ${products[id].title}  Costs: $${products[id].price} x${product.number}`}<button value={id} className="removeButton" onClick={this.handleRemoveClick}>X</button><span style={{color: "red"}}> Sorry you can't buy this amount from this product.{disabled = true}</span></li>
                            })
                            
                        }
                        <li>{`Total: $${Math.round(100*total)/100}`}</li>
                        <li>{`Your Current Balance: $${users[authedUser].balance}`}</li>
                        <li>{
                                users[authedUser].balance > total ? 
                                `Your Balance After Checkout: $${Math.round(100 * (users[authedUser].balance - total))/100}` 
                                : 
                                <span style={{color:"red"}}>Sorry you can't afford this!. Your balance is not enough.</span>
                                
                        }
                        </li>
                        <button value={Math.round(100 * (users[authedUser].balance - total))/100} id={id} className="checkout-button" onClick={this.handleClick} disabled={users[authedUser].balance < total || cart.length === 0 || disabled === true ? true : false}>Checkout</button>
                    </ul>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser, products, users }){
    const cart = users ? users[authedUser].cart : null
    return{
        authedUser,
        cart,
        products, 
        users
    }
}

export default connect(mapStateToProps)(ProceedToCheckout)