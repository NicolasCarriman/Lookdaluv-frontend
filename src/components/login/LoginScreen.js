import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import Button from '../layout/Button';

import '../../css/button.css';
import '../../css/login.css';
import '../../css/main_theme.css';

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
        <div className="contenedor__todo">
            <div className="caja__trasera">
                <div className="caja__trasera-login" id="back-login-box">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para entrar en la página</p>
                    <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                </div>
                <div className="caja__trasera-register" id="back-register-box">
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Regístrate para que puedas iniciar sesión</p>
                    <button id="btn__registrarse">Regístrarse</button>
                </div>
            </div>

            <div className="contenedor__login-register" id="containerId">
                <form onSubmit={ handleLogin } className="formulario__login">
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

                <form action="" className="formulario__register">
                    <h2>Regístrarse</h2>
                    <input type="text" placeholder="Nombre completo"/>
                    <input type="text" placeholder="Correo Electronico"/>
                    <input type="text" placeholder="Usuario"/>
                    <input type="password" placeholder="Contraseña"/>
                    <div id='button-box-forgotpass'>
                        <Button type="submit" value="Register"></Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;