  
import React from 'react'
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
        <>
            <div className="login-box">
                <div className="login-box-align">
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <label>E-mail: </label>
                            <br/>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="E-mail" 
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
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                </div>
                <button type="submit">Password reset</button>
            </div>
        </>
    );
}

export default LoginScreen;