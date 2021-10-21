import React, { Component } from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';

import '../../css/login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        username: '',
        password: ''
    });    

    const { username, password } = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch( startLogin( username , password ) );
    };


    return (
        <from onSubmit={ handleLogin }>
            <div className="background-box">
                <div className="login-box">
                    <div className="form-group">
                        <label>Username: </label>
                        <br/>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nombre de Usuario" 
                            name="username" 
                            value={ username }
                            onChange={ handleInputChange }
                        />
                        <br/>
                        <label>Password: </label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Contraseña"
                            name="password"
                            value={ password } 
                            onChange={ handleInputChange }
                        />
                        <br/>
                        <button className="btn btn-primary">Log In</button>
                    </div>
                </div>
            </div>
        </from>
    );
}

export default LoginScreen;