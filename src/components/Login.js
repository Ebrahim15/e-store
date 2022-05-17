import React,{ Component } from "react";
import { connect } from "react-redux";
import { handleLogin } from '../actions/shared'
import { Link, Navigate } from "react-router-dom";

class Login extends Component {
    state = {
        usernameOrEmail:'',
        password:'',
        invalidUsernameOrPassword:'',
        toHome:''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, users } = this.props
        const { usernameOrEmail, password } = this.state
        const userIds = Object.keys(users)
        if(userIds.filter((user) => (users[user].username === usernameOrEmail || users[user].email === usernameOrEmail) && users[user].password === password).length > 0){
            userIds.filter((user) => (users[user].username === usernameOrEmail || users[user].email === usernameOrEmail) && users[user].password === password)
            .map((user) => dispatch(handleLogin(users[user].id)))
            this.setState(({
                usernameOrEmail:'',
                password:'',
                invalidUsernameOrPassword:false,
                toHome:true
            }))
        }
        else{
            this.setState(({
                usernameOrEmail:'',
                password:'',
                invalidUsernameOrPassword:true,
            }))
        }
       
    }
    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState(({
            [name]: value
        }))
    }
    render(){
        const { usernameOrEmail, password, invalidUsernameOrPassword, toHome } = this.state
        if(toHome === true){
            return <Navigate to={"/"}></Navigate>
        }
        
        return(
            <div className="login-container">
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <div><img alt="market-logo" src={require(`../images/letter-e.png`)}></img></div>
                    <br></br>
                    {
                        invalidUsernameOrPassword === true ? <span className="sign-up-error">Invalid Username or Password</span> : null
                    }
                    <label>Username:</label>
                    <input name="usernameOrEmail" type={"text"} value={usernameOrEmail} placeholder="Username or Email..." onChange={this.handleChange}></input>
                    <br></br>
                    <label>Password:</label>
                    <input name="password" type={"password"} value={password} placeholder="Password..." onChange={this.handleChange}></input>
                    <br></br>
                    <button type="submit" disabled={ usernameOrEmail === '' || password === '' ? true : false}>Login</button>
                    <label>Don't have an account ? Join us now!</label>
                    <Link to={"/SignUp"}><button>Sign up</button></Link>
                </form>
            </div>
        )
    }
    
}

function mapStateToProps({ users }){
    return{
        users
    }
}

export default connect(mapStateToProps)(Login)