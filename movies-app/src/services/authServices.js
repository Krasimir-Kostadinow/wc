import { request } from './requestServices';
import { notifications } from "../common";
import { Router } from '@vaadin/router';
import { html, render } from 'lit-html';




export function registerUser(event) {
    event.preventDefault();
    const { email, password, repeatPassword } = event.target.elements;

    if (password.value.length < 6) {
        notifications('Password must length more 6 character', 'error');
        return;
    }

    if (password.value !== repeatPassword.value) {
        notifications('Password and repeat Password not match.', 'error');
        return;
    }

    request('auth', 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=', 'POST', { email: email.value, password: password.value })
        .then((data) => {
            if (data.idToken) {
                notifications('Successful registration!');
                Router.go('/wc/movies-app/login');
            } else {
                notifications(data.error.message, 'error');
            }

        })
        .catch((error) => {
            console.log(error.message);
        });
};

export function loginUser(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    request('auth', 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=', 'POST', {
        email: email.value,
        password: password.value
    })
        .then((data) => {
            if (data.idToken) {
                localStorage.setItem('userInfo', JSON.stringify({ isLogged: true, email: data.email, idToken: data.idToken, uid: data.localId }));
                notifications('Login successful.');
                Router.go('/wc/movies-app/home');
            } else {
                notifications(data.error.message, 'error');
            }


        })
        .catch((error) => {
            console.error(error.message);
        });

};