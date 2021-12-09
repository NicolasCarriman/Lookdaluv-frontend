import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";

export const registerUser = (email, username, password) => {
    return async( dispatch ) => {
        const response = await fetchWithoutToken(
                                'register/',
                                { email, username, password },
                                'POST',
                            );
        const body = await response.json();

        if (response.status === 200 || response.status === 201){

            localStorage.setItem('token', body.token);
            localStorage.setItem('username', body.username);
            localStorage.setItem('email', body.email);
            localStorage.setItem('name', body.name);

            dispatch( register({
                token: body.token,
                username: body.username
            }));

        }
    }
}

const register = ( user ) => ({
    type: types.register,
    payload: user
})