import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    submitLogin(e){
        e.preventDefault();
        var user =  {
            username: this.state.username,
            password: this.state.password
        }
        this.props.handleLogin(JSON.stringify(user));
    }

    render() {
        return (
            <div className="container loginPage">
                <div className="row">
                    <div className="col-md-6">
                         <img src="register.jpg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <input name="username" onChange={this.handleChange} type="text" placeholder="Username" className="text-label"></input><br/>
                            <input name="password" onChange={this.handleChange} type="password" placeholder="Password" className="text-label"></input><br/>

                            <button className="loginButton" onClick={this.submitLogin}>Login</button>
                            <button className="registerButton">Register</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}
