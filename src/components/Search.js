import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";

class Search extends Component{
    state = {
        search:''
    }
    handleChange = (e) => {
        const value = e.target.value
        this.setState(({
            search:value
        }))
    }
    render(){
        const { search } = this.state
        const { products } = this.props
        const productsIds = Object.keys(products).filter((product) => product !== 'categories')
        
        return(
            <div className="search-container">
                <input className="search-bar" onChange={this.handleChange} type={"text"} placeholder="Search E Store..."></input>
                {
                    search.length === 0 ?
                    <ul className="products-list">
                    {
                        productsIds.map((pid) => (
                                pid !== 'categories' ? 
                                <li key={pid}><Product id={pid}/></li> 
                                :
                                null    
                        ))
                    }
                    </ul>
                    :
                    <ul className="search-results-list">
                    {
                        // productsIds.filter((id) => products[id].title.toLowerCase().substring(0, 1) === search.toLowerCase().substring(0, 1)).map((pid) => (
                        //         <li key={pid}><Product id={pid}/></li>
                        // ))
                        productsIds.filter((id) => products[id].title.toLowerCase().includes(search.toLowerCase())).map((pid) => (
                            <li key={pid}><Product id={pid}/></li>
                    ))
                    }
                    </ul>
                }
                {/* <ul className="search-results-list">
                    {
                        productsIds.filter((id) => products[id].title.toLowerCase().substring(0, 1) === search.toLowerCase().substring(0, 1)).map((pid) => (
                                <li key={pid}><Product id={pid}/></li>
                        ))
                    }
                </ul> */}
            
            </div>
        )
    }
}

function mapStateToProps({ products }){
    return{
        products
    }
}

export default connect(mapStateToProps)(Search)