import { html, render } from 'lit-html';
import { request } from '../services/requestServices';
import { deleteMovie, addedLikedMovie } from '../services/crudMovies';


const template = (ctx) => html`
${ctx.userInfo.isLogged ?
        html`<div class="container">
<div class="row bg-light text-dark">
<h1>Movie title: ${ctx.movie.title}</h1>

<div class="col-md-8">
    <img class="img-thumbnail" src=${ctx.movie.imageUrl} alt=${ctx.movie.title}>
</div>
<div class="col-md-4 text-center">
    <h3 class="my-3 ">Movie Description</h3>
    <p>${ctx.movie.description}</p>

    ${ctx.movie.owner
                ? html`<a class="btn btn-danger" @click=${ctx.deleteMovie}>Delete</a>
    <a class="btn btn-warning" href="/editMovie/${ctx.location.params.id}">Edit</a>
    <span class="enrolled-span">Liked ${ctx.movie.likeds.length - 1}</span>`
                : html`
                ${ctx.movie.isExistLike ? html`<span class="enrolled-span">Liked ${ctx.movie.likeds.length - 1}</span>`
                        : html`<a class="btn btn-primary" @click=${ctx.likeMovie}>Like</a>`}               
  `}
  
</div>
</div>
</div>`
        : html`<h3>You are not logged in</h3>`
    }`;



export class Details extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        userInfo = userInfo ? userInfo : { isLogged: false, email: '' };
        const pathName = this.location.params.id;
        const token = userInfo.idToken;

        request('data', `${pathName}.json?auth=${token}`, 'GET')
            .then((data) => {
                let userInfo = JSON.parse(localStorage.getItem('userInfo'));
                userInfo = userInfo ? userInfo : { isLogged: false, email: '' };
                const { ownerId, } = data;
                let movieData = data;
                if (userInfo.uid === ownerId) {
                    movieData.owner = true;
                } else {
                    movieData.owner = false;
                }
                if (movieData.likeds.includes(userInfo.email)) {
                    movieData.isExistLike = true;
                } else {
                    movieData.isExistLike = false;
                }
                this.userInfo = userInfo;
                this.movie = movieData;
                this.render();
            }).catch((error) => {
                console.log(error.message);
            });


    }


    render() {
        render(template(this), this, { eventContext: this })
    }


    deleteMovie = () => {
        const pathName = this.location.params.id;
        deleteMovie(pathName);

    }

    likeMovie = () => {
        const pathName = this.location.params.id;
        addedLikedMovie(pathName);

    }

}