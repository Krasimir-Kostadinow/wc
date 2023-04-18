import { html, nothing, render } from 'lit-html';
import { addMovie } from '../services/crudMovies';

const template = (ctx) => 
     html` ${ctx.userInfo.isLogged ? html`<form class="text-center border border-light p-5" @submit=${ctx.onSubmit}>
<h1>Add Movie</h1>
<div class="form-group">
    <label for="title">Movie Title</label>
    <input type="text" class="form-control" placeholder="Title" name="title" value="">
</div>
<div class="form-group">
    <label for="description">Movie Description</label>
    <textarea class="form-control" placeholder="Description" name="description"></textarea>
</div>
<div class="form-group">
    <label for="imageUrl">Image url</label>
    <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>`: nothing}`
    


export class AddMovie extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.userInfo = userInfo ? userInfo : {isLogged: false, email: ''};
        this.render()
    }

    onSubmit(event) {
        event.preventDefault();
        addMovie(event);  
    }

    render() {
       return render(template(this), this, { eventContext: this });
    }
}
