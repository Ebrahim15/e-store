import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
// import Checkout from './Checkout'
import { Navigate } from "react-router-dom";
import { handleRemoveFromCart } from "../actions/shared";

class Cart extends Component {
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
    
    render(){
        const { cart, products } = this.props
        let total = 0
        const { proceedCheckout } = this.state
        
        if(proceedCheckout === true){
            return <Navigate to={"/ProceedCheckout"}/>
        }
        return(
            <div className="cart-container">
                {
                    <ul className="cart-list">
                    
                      {
                          cart.map((product) => (
                            <li key={product.id} className="cart-product-container">
                            {/* <Product id={product.id}/> */}
                          {/* <div className="cart-product-container"> */}
                              <div className="cart-product-image-container">
                                  <img className="cart-product-image" alt="productImage" src={require(`../images/${products[product.id].image}`)}></img>
                              </div>
                              <div className="cart-product-price-title">
                                  <div className="cart-product-title">{products[product.id].title}</div>
                                  <div className="cart-product-price">{`$${products[product.id].price} x${product.number}`}</div>
                                  {/* <button value={product.id} className="removeButton" onClick={this.handleRemoveClick}>X</button> */}
                              </div>
                              <div className="cart-product-price">{`$${products[product.id].price} x${product.number}`}</div>
                          {/* </div> */}
                            </li>
                          ))
                      }
                    </ul>
                }
                <div className="cart-checkout">
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
                </div>
                
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, products }){
    const cart = users[authedUser].cart ? users[authedUser].cart : null 
    return{
        authedUser,
        cart,
        products
    }
}

export default connect(mapStateToProps)(Cart)