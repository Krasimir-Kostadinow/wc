
import {Router} from '@vaadin/router';
import * as components from './components';

const header = document.getElementById('header');
const container = document.getElementById('container');

customElements.define('nav-component', components.Navigation);
customElements.define('home-component', components.Home);
customElements.define('register-component', components.Register);
customElements.define('login-component', components.Login);
customElements.define('logout-component', components.Logout);
customElements.define('movie-card', components.MovieCard);
customElements.define('movies-component', components.Movies);
customElements.define('add-movie-component', components.AddMovie);
customElements.define('movie-details-component', components.Details);
customElements.define('edit-movie-component', components.EditMovie);

const routerHeader = new Router(header);


routerHeader.setRoutes([
    {
        path: '/wc/movies-app/index.html',
        component: 'nav-component'
    },
    {
        path: '/wc/movies-app/',
        component: 'nav-component'
    },
    {
        path: '/wc/movies-app/home',
        component: 'nav-component'
    },
    {
        path: '/wc/movies-app/register',
        component: 'nav-component'
    },
    {
        path: '/wc/movies-app/login',
        component: 'nav-component'
    },
    {
        path: '/wc/movies-app/logout',
        component: 'nav-component'
    },
    {
        path: '/wc/movies-app/addMovie',
        component: 'nav-component'
    },
    {
        path: '/wc/movies-app/details/:id',
        component: 'nav-component'
    },
    {
        path: '/wc/movies-app/editMovie/:id',
        component: 'nav-component'
    }
    
]);

const routerContainer = new Router(container);
routerContainer.setRoutes([

    {
        path: '/wc/movies-app/index.html',
        component: 'home-component'
    },
    {
        path: '/wc/movies-app/',
        component: 'home-component'
    },
    {
        path: '/wc/movies-app/home',
        component: 'home-component'
    },
    {
        path: '/wc/movies-app/register',
        component: 'register-component'
    },
    {
        path: '/wc/movies-app/login',
        component: 'login-component'
    },
    {
        path: '/wc/movies-app/logout',
        component: 'logout-component'
    },
    {
        path: '/wc/movies-app/addMovie',
        component: 'add-movie-component'
    },
    {
        path: '/wc/movies-app/details/:id',
        component: 'movie-details-component'
    },
    {
        path: '/wc/movies-app/editMovie/:id',
        component: 'edit-movie-component'
    }
    
]);


