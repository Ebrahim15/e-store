import React, { Component } from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import {handleCart} from '../actions/shared'
import { Navigate } from "react-router-dom";

class Product extends Component{
    state = {
        loggedIn: ''
    }
    handleClick = (e) => {
        const { dispatch, authedUser} = this.props
        var id = e.target.value        
        console.log("id: ",id)
        authedUser === null || authedUser === "Sign out" ?
        this.setState(({
            loggedIn: false
        }))
        :
        dispatch(handleCart(id, authedUser))
    } 
    render(){
        const { product } = this.props
        const { loggedIn } = this.state
        if(loggedIn === false) {
            alert("Please Log in first.")
            return <Navigate to={"/Login"}></Navigate>
        }
        return(
            <div className="product-container">
                <div className="product-image-container">
                    <img className="product-image" alt="productImage" src={require(`../images/${product.image}`)}></img>
                </div>
                <h5>{product.title}</h5>
                <div className="price">Price: {`$${product.price}`}</div>
                <div id="warning" style={{color:"red"}}>{product.inventory <= 5 && product.inventory !== 0 ? `Only ${product.inventory} Pieces remaining !` : null}</div>
                {/* {
                    product.inventory < 1 ? <div className="add-to-cart"><button disabled={true}>Sold Out</button></div> 
                    :
                    <div className="add-to-cart" id="add-to-cart" data-product-id={product.id} onClick={this.handleClick}><img alt="add" id="add-logo" src={require('../images/add.png')}></img>Add To Cart</div>
                } */}
                <button  variant="primary" value={product.id} onClick={this.handleClick} disabled={product.inventory < 1 ? true : false}>{product.inventory < 1 ? "Sold Out" : "Add To Cart"}</button>
                {/* <button variant="primary" value={product.id} onClick={this.handleClick} disabled={product.inventory < 1 ? true : false}>{product.inventory < 1 ? "Sold Out" : <div className="add-button"><img alt="add" id="add" src={require('../images/add.png')}></img>Add To Cart</div>}</button> */}
            </div>
        )
    }
}


function mapStateToProps({ products, authedUser }, {id}){
    const product = products ? products[id] : null
    return{
        product,
        authedUser
    }

}


export default connect(mapStateToProps)(Product)