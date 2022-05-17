import React, { Component } from "react";
import { connect } from "react-redux";
import Product from './Product'


class Home extends Component{
    state = {
        selectedCategories:[]
    }
    handleChange = (e) => {
        const value = e.target.value
        console.log("value: ", value)
        this.setState((prevState) =>{
            if(prevState.selectedCategories.includes(value)){
                const choosenCategories = prevState.selectedCategories.filter((category) => category !== value)
                console.log("chosenfiltered: ", choosenCategories)
                return {selectedCategories: choosenCategories}
            }
            else{
                const choosenCategories = prevState.selectedCategories.concat(value)
                console.log("chosen: ", choosenCategories)
                return {selectedCategories: choosenCategories}
            }
        } )
    }
    render(){
        const { productsIds, categories, products } = this.props
        const { selectedCategories} = this.state
        let filter = false
        if(selectedCategories.length > 0 ){
            filter = true
        }
        else{
            filter = false
        }
        
        return(
            <div className="Home">
                <div className="title">
                    <h1>Welcome to the</h1>
                    <h1>E Store</h1>
                </div>
                <div className="products-container">
                    <br></br>
                    <ul className="filter">
                    <p>Product Type</p>
                    {
                        categories.map((category) => (
                            <div className="product-type" key={category}>
                                <li><input type={"checkbox"} value={category} onChange={this.handleChange}></input></li>
                                <label>{category}</label>
                            </div>
                        ))
                    }
                    </ul>
                    <ul className="products-list">
                        {
                            productsIds.map((pid) => (
                                    pid !== 'categories' && filter === false ? 
                                    <li key={pid}><Product id={pid}/></li> 
                                    : 
                                    pid !== 'categories' && selectedCategories.includes(products[pid].category) ? 
                                    <li key={pid}><Product id={pid}/></li> 
                                    : 
                                    null
                                    
                            ))
                        }
                    </ul>
                    {/* <ul className="products-list">
                        {
                          filter === false ?
                          productsIds.map((pid) => pid!== 'categories' ? <li key={pid} className="product"><Product id={pid}/></li> : null)
                          :
                          productsIds.map((pid) => pid!== 'categories' && products[pid].category.split(" ")
                          .map((category) => selectedCategories.includes(category) ? 
                          Array.from(document.querySelectorAll(".product")).map((li) => li.__reactFiber$yqz7zd7luqd.key === pid ? null 
                           : 
                           <li key={pid} className="product"><Product id={pid}/></li>) 
                           :
                           null
                           ))
                        }
                    </ul> */}
                    {console.log(document.querySelectorAll(".product"))}
                </div>
            </div>
        )
    }
}

function mapStateToProps({ products }){
    return {
        productsIds: Object.keys(products),
        categories: products.categories,
        products
    }
}

export default connect(mapStateToProps)(Home) 