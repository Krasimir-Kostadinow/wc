import { html, render, nothing } from 'lit-html';
import { request } from '../services/requestServices.js';
const template = (ctx) =>
    html`
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
    <img src="https://s.studiobinder.com/wp-content/uploads/2019/06/Best-M-Night-Shyamalan-Movies-and-Directing-Style-StudioBinder.jpg"
        class="img-fluid" alt="Responsive image">
    <h1 class="display-4">Movies</h1>
    <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
</div> 
${ctx.userInfo.isLogged 
? html`<movies-component></movies-component>`
: nothing
}
`;


export class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
       
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.userInfo = userInfo ? userInfo : {isLogged: false, email: ''};
        this.render();

    }


    render() {
        render(template(this), this, { eventContext: this });
    }

};