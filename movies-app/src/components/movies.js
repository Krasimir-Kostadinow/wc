import { html, render } from 'lit-html';
import { request } from '../services/requestServices';
import { notifications } from '../common';



const template = (ctx) => html`<h1 class="text-center">Movies</h1>
<section>
    <a href="/addMovie" class="btn btn-warning">Add Movie</a>
    <form class="search float-right" @submit=${ctx.searchMovie}>
        <label>Search: </label>
        <input type="text" name='searchName'>
        <input type="submit" class="btn btn-info" value="Search">
    </form>
</section>

<div class=" mt-3 ">
    <div class="row d-flex d-wrap">
        <div class="card-deck d-flex justify-content-center">
            ${ctx.movies !== null
        ? html`${ctx.movies.map((movie) => html`<movie-card .data = ${movie}></movie-card>`)}`
        : html`<h3>No movies...</h3>`
    }
        </div>
    </div>
</div>`;

export class Movies extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {

        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.userInfo = userInfo ? userInfo : { isLogged: false, email: '' };
        const { idToken } = this.userInfo;

        request('data', `.json?auth=${idToken}`, 'GET')
            .then((data) => {
                if (data === null) {
                    this.movies = data;
                } else {
                    this.movies = Object.entries(data);
                }

                this.render();
            }).catch((error) => {
                console.log(error.message);
            });

    }

    render() {
        render(template(this), this, { eventContext: this });
    }

    searchMovie = (event) => {
        event.preventDefault();
        const { searchName } = event.target.elements;
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const idToken = userInfo.idToken;
 
        request('data', `.json?orderBy="title"&equalTo="${searchName.value}"&auth=${idToken}`, 'GET')
            .then((data) => {
                this.movies = Object.entries(data);
                if (this.movies.length === 0) {
                    notifications('No movie found with this title.');
                } else {
                    notifications(`Found is ${this.movies.length} movie/s with this title.`);
                }
           
                this.render();

            })
            .catch((error) => console.log(error.message));

        this.movies = [];
        this.render();
    }
}