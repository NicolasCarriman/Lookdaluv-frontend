import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";


export const startLogin = (username, password) => {
    return async( dispatch ) => {
        const response = await fetchWithoutToken(
                                'login/',
                                { username, password },
                                'POST',
                            );
        const body = await response.json();

        console.log(body);
        console.log(response.status);

        if (response.status === 200 || response.status === 201){

            // set user info
            localStorage.setItem('token', body.token);
            localStorage.setItem('username', body.user.username);
            localStorage.setItem('email', body.user.email);
            localStorage.setItem('name', body.user.name);
            localStorage.setItem('last_name', body.user.last_name);

            dispatch( login({
                token: body.token,
                username: body.user.username
            }));

            console.log("Success login");
        }else{
            console.log(body.error);
        }
    }
}

const login = ( user ) => ({
    type: types.login,
    payload: user
})