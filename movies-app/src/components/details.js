import { html, render, nothing } from 'lit-html';

const template = (ctx) => html`<div class="container">
<div class="row bg-light text-dark">
<h1>Movie title: {{movie.title}}</h1>
    
    <div class="col-md-8">
        <img class="img-thumbnail" src={{movie.imageUrl}} alt={{movie.title}}>
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>{{movie.description}}</p>
        {{#if movie.isCreator}}
        <a class="btn btn-danger" onclick='deleteMovie(event)'>Delete</a>
        <a class="btn btn-warning" href="/editMovie">Edit</a>
        <span class="enrolled-span">Liked {{movie.likeds}}</span>
        {{else}}
        {{#if movie.isLiked}}
        <span class="enrolled-span">Liked {{movie.likeds}}</span>
        {{else}}
        <a class="btn btn-primary" onclick='likeMovie(event)'>Like</a>
        {{/if}}
     
        {{/if}}
    </div>
</div>
</div>
{{else}}
<h3>You are not logged in</h3>
{{/if}}`;

export class Details extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

    }

    
}