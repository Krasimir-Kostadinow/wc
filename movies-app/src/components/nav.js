import { html, render } from 'lit-html';


const template = (ctx) => html`<nav class="navbar navbar-expand-lg navbar-dark bg-dark" class="container">
<a class="navbar-brand text-light" href="/">Movies</a>
<ul class="navbar-nav ml-auto">
${ctx.userInfo.isLogged 
?  html` <li class="nav-item">
        <a class="nav-link">Welcome, ${ctx.userInfo.email}</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/logout">Logout</a>
    </li>`
    :
   html` <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/register">Register</a>
    </li>`
}
</ul>
</nav>
`;



export class Navigation extends HTMLElement {



    constructor() {
        super();
        this.isLogged = false;
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


