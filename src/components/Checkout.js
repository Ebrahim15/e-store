import React, { Component } from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Navigate } from "react-router-dom";
import { handleRemoveFromCart } from "../actions/shared";

class Checkout extends Component {
    state = {
        proceedCheckout: false
    }
    handleRemoveClick = (e) => {
        e.preventDefault()
        const { dispatch, authedUser } = this.props
        dispatch(handleRemoveFromCart(e.target.value, authedUser))
    }
    handleClick = (e) => {
        this.setState(({
            proceedCheckout:true
        }))
    }
    render() {
        const { products, cart } = this.props
        const { proceedCheckout } = this.state
        
        let total = 0
        if(proceedCheckout === true){
            return <Navigate to={"/ProceedCheckout"}/>
        }
        return (
            <ul className="checkout-list">
                <h3>Checkout:</h3>
                {
                    cart.map((product) => {

                        total = total + (products[product.id].price * product.number )
                        
                        return <li key={product.id}>{`Item: ${products[product.id].title}  Costs: $${products[product.id].price} x${product.number}`}<button value={product.id} className="removeButton" onClick={this.handleRemoveClick}>X</button></li>
                    })
                    
                }
                <li>{`Total: $${Math.round(100*total)/100}`}</li>
                <button onClick={this.handleClick} disabled={cart.length === 0 ? true : false}>Proceed Checkout</button>
            </ul>
        )
    }
}

function mapStateToProps({ products, authedUser, users }){
    const cart = users ? users[authedUser].cart : null
    return{
        products,
        cart, 
        authedUser
    }
}

export default connect(mapStateToProps)(Checkout)