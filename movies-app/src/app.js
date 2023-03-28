
import {Router} from '@vaadin/router';
import * as components from './components';
// import { notifications } from './common';

// import Register from '../components/register.js';
// import Login from '../components/login.js';
// import Logout from '../components/logout.js';
// import Movies from '../components/movies.js';
// import MovieCard from '../components/movie-card.js';


const header = document.getElementById('header');
const container = document.getElementById('container');


customElements.define('nav-component', components.Navigation);
customElements.define('home-component', components.Home);
customElements.define('register-component', components.Register);
customElements.define('login-component', components.Login);
customElements.define('logout-component', components.Logout);
customElements.define('movie-card', components.MovieCard);
customElements.define('movies-component', components.Movies);

const routerHeader = new Router(header);


routerHeader.setRoutes([
    {
        path: '/movies-app/',
        component: 'nav-component'
    },
    {
        path: '/movies-app/index.html',
        component: 'nav-component'
    },
    {
        path: '/movies-app/home',
        component: 'nav-component'
    },

    {
        path: '/movies-app/register',
        component: 'nav-component'
    },
    {
        path: '/movies-app/login',
        component: 'nav-component'
    },
    {
        path: '/movies-app/logout',
        component: 'nav-component'
    }
    
]);

const routerContainer = new Router(container);
routerContainer.setRoutes([

    {
        path: '/movies-app/index.html',
        component: 'home-componnt'
    },
    {
        path: '/movies-app/',
        component: 'home-component'
    },
    {
        path: '/movies-app/home',
        component: 'home-component'
    },

    {
        path: '/movies-app/register',
        component: 'register-component'
    },
    {
        path: '/movies-app/login',
        component: 'login-component'
    },
    {
        path: '/movies-app/logout',
        component: 'logout-component'
    }
    

]);


