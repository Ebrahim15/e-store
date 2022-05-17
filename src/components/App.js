import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { Fragment } from "react";
import Home from "./Home";
import Search from './Search'
import LoadingBar from "react-redux-loading";
import Login from "./Login";
import Cart from './Cart';
import Nav from "./Nav";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProceedToCheckout from "./ProceedToCheckout";
import SignUp from "./SignUp";
import AboutUs from "./AboutUs";
import Footer from "./Footer";


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    const { loading } = this.props

    return(
      <Router>
        <Fragment>
          { 
            loading === true ? <LoadingBar /> : 
            <div className="app-container">
  
                <Nav />
                
                <Routes>
                  <Route path="/" exact element={<Home/>} />
                  <Route path="/ProceedCheckout" element={<ProceedToCheckout/>}/>
                  <Route path="/Cart" element={<Cart/>}/>
                  <Route path="/Search" element={<Search/>}/>
                  <Route path="/SignUp" element={<SignUp/>}/>
                  <Route path="/Login" element={<Login/>}/>
                  <Route path="/AboutUs" element={<AboutUs/>}/>
                </Routes>

                <Footer/>
            </div>
          }
        </Fragment>

        </Router>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null ? true : false,
    login: authedUser === 'Sign out' ? false : true
  }
}

export default connect(mapStateToProps)(App)