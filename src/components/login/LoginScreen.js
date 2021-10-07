import React, { Component } from 'react';
import '../../css/login.css';

class Login extends Component {
    render() {
        return (
            <div className="background-box">
                <div className="login-box">
                    <div className="form-group">
                        <label>Username: </label>
                        <br/>
                        <input
                            type="text"
                            className="form-control"
                        />
                        <br/>
                        <label>Password: </label>
                        <input
                            type="password"
                            className="form-control"
                        />
                        <br/>
                        <button className="btn btn-primary">Log In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;