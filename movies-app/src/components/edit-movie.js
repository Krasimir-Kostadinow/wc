import { html, nothing, render } from 'lit-html';
import { request } from '../services/requestServices';
import { editMovie } from '../services/crudMovies';


const template = (ctx) =>
    html` ${ctx.userInfo.isLogged ? html`
     <form class="text-center border border-light p-5" @submit=${ctx.onSubmit}>
         <h1>Edit Movie</h1>
         <div class="form-group">
             <label for="title">Movie Title</label>
             <input type="text" class="form-control" placeholder="Movie Title" value="${ctx.movie.title}" name="title">
         
         <div class="form-group">
             <label for="description">Movie Description</label>
             <textarea class="form-control" placeholder="Movie Description..." name="description">${ctx.movie.description}</textarea>
         </div>
         <div class="form-group">
             <label for="imageUrl">Image url</label>
             <input type="text" class="form-control" placeholder="Image Url" value="${ctx.movie.imageUrl}" name="imageUrl">
         </div>
         <button type="submit" class="btn btn-primary">Submit</button>
     </form>`: nothing}`



export class EditMovie extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.userInfo = userInfo ? userInfo : { isLogged: false, email: '' };

        const pathName = this.location.params.id;
        const token = userInfo.idToken;

        request('data', `${pathName}.json?auth=${token}`, 'GET')
            .then((data) => {
                if (data.error) {
                    sessionTimeout();
                    return;
                }
                this.movie = data;
                this.render();
            }).catch((error) => {
                console.log(error.message);
            });

    }

    onSubmit = (event) => {
        event.preventDefault();
        const pathName = this.location.params.id;
        editMovie(event, pathName);
    }

    render() {
        return render(template(this), this, { eventContext: this });
    }
}