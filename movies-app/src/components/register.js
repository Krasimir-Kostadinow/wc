import { html, render } from 'lit-html';
import { registerUser } from '../services/authServices';



const template = (ctx) => html`<form class="text-center border border-light p-5" @submit=${ctx.onSubmit}>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Email" name="email" value="">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" name="password" value="">
    </div>

    <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
    </div>

    <button type="submit" class="btn btn-primary">Register</button>
</form>`;


export class Register extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        this.render();
    }

    onSubmit(event) {
        event.preventDefault();
        registerUser(event);

    }

    render() {
        render(template(this), this, { eventContext: this });
    }
}
