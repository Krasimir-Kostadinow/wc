import { html, render } from 'lit-html';
import { loginUser } from '../services/authServices';


const template = (ctx) => html`
<form class="text-center border border-light p-5" @submit=${ctx.onSubmit}>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Email" name="email" value="">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" name="password" value="">
    </div>

    <button type="submit" class="btn btn-primary">Login</button>
</form>`;


export class Login extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.userInfo = userInfo ? userInfo : {isLogged: false, email: ''};
        this.render();
    }

    onSubmit(event) {
        loginUser(event);
    }

    render() {
        render(template(this), this, { eventContext: this });
    }
};