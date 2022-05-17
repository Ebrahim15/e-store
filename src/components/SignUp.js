import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSignUp } from '../actions/shared'


class SignUp extends Component {
    state = {
        firstName:'',
        lastName:'',
        userName:'',
        password:'',
        confirmpassword:'',
        email:'',
        phoneNumber:'',
        address:'',
    }
    handleChange = (e) => {
        this.setState(({
            [e.target.name]: e.target.value
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const {firstName, lastName, userName, password, email, phoneNumber, address} = this.state
        dispatch(handleSignUp(firstName, lastName, userName, password, email, phoneNumber, address)) 
        this.setState(({
            firstName:'',
            lastName:'',
            userName:'',
            password:'',
            email:'',
            confirmpassword:'',
            phoneNumber:'',
            address:'',
        }))
        
    }
    render(){
        const { users, usersIds } = this.props
        const regex = /[ `!#$ %^&*()+\=\[\]{};':"\\|,<>\/? ~]/g;
        let confirmEmail = null
        let confirmPassword = null
        let confirmUsername = null
        const {firstName, lastName, userName, password, confirmpassword, email, phoneNumber, address} = this.state
        if(password !== confirmpassword && confirmpassword !== '' ) {
           confirmPassword = false
        }
        else{
            confirmPassword = true
        }
        if(usersIds.filter((user) => users[user].email === email ).length > 0){
            confirmEmail = false
        }
        else{
            confirmEmail = true
        }
        if(usersIds.filter((user) => users[user].username === userName ).length > 0){
            confirmUsername = false
        }
        else{
            confirmUsername = true
        }
      
        
        return(
            <div className="signup-container">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input name="firstName" maxLength={15} type={"text"} value={firstName} onChange={this.handleChange}></input>

                    <label>Last Name:</label>
                    <input name="lastName" maxLength={15} type={"text"} value={lastName} onChange={this.handleChange}></input>

                    <label>User Name:</label>
                    <input name="userName" maxLength={15} type={"text"} value={userName} onChange={this.handleChange}></input>
                    {
                        confirmUsername === false ? 
                        <span className="signup-error"> Username is already in use. Please enter a different one.</span> 
                        : 
                        null
                    }
                    {/* <br></br> */}

                    <label>Password:</label>
                    <input name="password" maxLength={25} type={"password"} value={password} onChange={this.handleChange}></input>
                    {
                        password.length < 8 && password !== ''? 
                        <span className="signup-error"> Password should contain more than 8 letters.</span> 
                        : null
                    }
                    {/* <br></br> */}

                    <label>Confirm Password:</label>
                    <input name="confirmpassword" maxLength={25} type={"password"} value={confirmpassword} onChange={this.handleChange}></input>
                    {
                        confirmPassword === false ? 
                        <span className="signup-error"> Passwords don't match.</span> 
                        : 
                        null
                    }
                    {/* <br></br> */}

                    <label>Email:</label>
                    <input name="email" type={"text"} maxLength={50} value={email} onChange={this.handleChange}></input>
                    { 
                        confirmEmail === false ? <span className="signup-error"> Email is already in use.</span> 
                        : 
                        [...email.matchAll(/[@]/g)].length > 1 || [...email.matchAll(regex)].length > 0 || (email !== '' && email.endsWith("@mail.com") === false && email.endsWith("@gmail.com") === false && email.endsWith("@hotmail.com") === false && email.endsWith("@outlook.com") === false) ? 
                        <span className="signUpError"> Invalid Email.</span> 
                        : 
                        null
                    }   
                    {/* <br></br> */}

                    <label>Phone Number:</label>
                    <input name="phoneNumber" maxLength={15} type={"text"} value={phoneNumber} onChange={this.handleChange}></input>

                    <label>Address:</label>
                    <input name="address" type={"text"} maxLength={25} value={address} onChange={this.handleChange}></input>
                    <button type={"submit"} 
                    disabled={confirmEmail === false || confirmPassword === false || confirmUsername === false || firstName === '' || lastName === '' || userName === '' || password === '' || confirmpassword === '' || email === '' || address === '' ? true : false }>Sign up</button>
                </form>
            </div>
        )
    }
}

function mapStatetoProps({ users }){
    const usersIds = users ? Object.keys(users) : null
    return{
        users,
        usersIds
    }
}

export default connect(mapStatetoProps)(SignUp)