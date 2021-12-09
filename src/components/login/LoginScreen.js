import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import { registerUser } from '../../actions/register';
import Button from '../layout/Button';

import '../../css/button.css';
import '../../css/login.css';
import '../../css/main_theme.css';


import importScript from '../../actions/script-load.js';


export const LoginScreen = (props) => {

    importScript("../js/intermitent.js");
    importScript("../js/login-component-animations.js");

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        username: '',
        password: ''
    });

    const {email, username, password} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault()

        props.ShowLogin(false);

        dispatch(startLogin(username, password)).then((response)=>{

            if (response === 200 || response === 201){
                successLogin(props);
            } else {
                props.ShowLogin(true);
            };
        });
    };

    const handleRegister = (e) =>{
        e.preventDefault();
        dispatch(registerUser(email, username , password));
    };

    return (
        <>
            <div className="login-screen-box">
                <div className="back-box">
                    <div id="back-login-box">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn__start-session">Iniciar Sesión</button>
                    </div>
                    <div id="back-register-box">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id="btn__register">Regístrarse</button>
                    </div>
                </div>

                <div className="login-screen-register" id="container-id">
                    <form onSubmit={ handleLogin } className="login-form">
                        <h2>Iniciar Sesión</h2>
                        <input 
                            type="text" 
                            className="form-control input-text" 
                            placeholder="E-mail" 
                            name="username"
                            value={ username }
                            onChange={ handleInputChange }
                        />
                        <input 
                            type="password"
                            className="form-control input-text"
                            placeholder="Contraseña"
                            name="password"
                            value={ password } 
                            onChange={ handleInputChange }
                        />
                        <div id='button-box-login'>
                            <Button type="submit" value="Login"></Button>
                        </div>
                    </form>

                    <form onSubmit={ handleRegister } className="register-form">
                        <h2>Regístrarse</h2>
                        <input 
                            type="text" 
                            className="form-control input-text" 
                            placeholder="Correo Electronico"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <input 
                            type="text" 
                            className="form-control input-text" 
                            placeholder="Nombre de usuario" 
                            name="username"
                            value={ username }
                            onChange={ handleInputChange }
                        />
                        <input 
                            type="password" 
                            className="form-control input-text" 
                            placeholder="Contraseña"
                            name="password"
                            value={ password } 
                            onChange={ handleInputChange }
                        />
                        <div id='button-box-register'>
                            <Button type="submit" value="Register"></Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginScreen;

function successLogin (props){
    props.ShowBar(true);
    props.ShowBarLinks(true);
    props.ShowLogin(false);
    props.ShowPlayerBox(true);
};