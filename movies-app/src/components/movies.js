import { html, render } from 'lit-html';
import { request } from '../services/requestServices';


const template = (ctx) => html`<h1 class="text-center">Movies</h1>
<section>
    <a href="/addMovie" class="btn btn-warning">Add Movie</a>
    <form class="search float-right" onSubmit='searchMovie(event)'>
        <label>Search: </label>
        <input type="text" name='searchName'>
        <input type="submit" class="btn btn-info" value="Search">
    </form>
</section>

<div class=" mt-3 ">
    <div class="row d-flex d-wrap">
        <div class="card-deck d-flex justify-content-center">
            ${ctx.movies
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
        request('data', '', 'GET')
            .then((data) => {
                const movies = Object.entries(data);
                this.movies = movies;
                this.render();
            }).catch((error) => {
                console.log(error.message);
            });

    }

    render() {
        render(template(this), this, { eventContext: this });
    }
}