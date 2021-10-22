  import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import Button from '../layout/Button';

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
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Contraseña"
                                name="password"
                                value={ password } 
                                onChange={ handleInputChange }
                            />
                            <br/>
                            <div id='button-box-login'>
                                <Button type="submit" value="Login"></Button>
                            </div>
                            <div id='button-box-forgotpass'>
                                <Button type="submit" value="Recovery"></Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginScreen;