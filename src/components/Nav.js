import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogin } from "../actions/shared";
import Search from './Search'

class Nav extends Component {
    state = {
        search:false
    }
    handleClick = (e) => {
        const { dispatch } = this.props
        dispatch(handleLogin("Sign out"))
    }
    handleSearch = (e) =>{
        const {search} = this.state
        if(search === false){
            this.setState(({search:true}))
        }
        else{
            this.setState(({search:false}))
        }
    }
    render(){
        const { loggedIn, users, authedUser, cart } = this.props
        const {search} = this.state
        let cartNumber = 0
        if(cart !== null){
            cart.map((product) => cartNumber += product.number)
        }
        
        return(
            <div className="nav-container">
                
                    <div className="nav-store-logo-container"><Link to={"/"} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}><img alt="logo" src={require('../images/letter-e.png')} id="store-logo"></img></Link></div>
                    {search === true ? <Search /> : null}
                    <ul className="nav-list">
                        <Link className="nav-link" to={"/Search"}><li><img alt="cart" className="nav-logo" src={require('../images/search.png')}></img></li></Link>
                        {/* <li><img alt="cart" className="navLogo" src={require('../search.png')} onClick={this.handleSearch}></img></li> */}
                        {/* <Link className="nav-link" to={"/AboutUs"}><li>About us</li></Link> */}
                        {
                            loggedIn === false ?
                            <Fragment>
                                <Link className="nav-link" to={"/Login"}><li>Login</li></Link>
                                {/* <Link className="nav-link" to={"/SignUp"}><li>Sign up</li></Link> */}
                                <img alt="user-logo" id="user-logo" src={require('../images/user1.png')}></img>
                            </Fragment>
                            :
                            <Fragment>
                                <Link className="nav-link" to={"/Cart"}><li className="nav-cart-container"><img alt="cart" className="nav-logo" src={require('../images/cart.png')}></img>{cartNumber !== 0 ? <div id="nav-cart-number">{cartNumber}</div> : null }</li></Link>
                                {/* <div className="user-info"><img alt="user-logo" id="user-logo" src={require('../images/user1.png')}></img><span> {users[authedUser].firstName}</span></div> */}
                                <div className="user-info">{users[authedUser].firstName[0]}</div>
                                {/* <Link className="navLink" to={"/"} onClick={this.handleClick}><li>Log out</li></Link> */}
                            </Fragment>
                            
                        }
                        
                    </ul>
                
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users}){
    const cart = authedUser !== "Sign out" && authedUser !== null ? users[authedUser].cart : null
    return{
        loggedIn: authedUser === "Sign out" || authedUser === null ? false : true,
        users,
        authedUser,
        cart
    }
}

export default connect(mapStateToProps)(Nav)