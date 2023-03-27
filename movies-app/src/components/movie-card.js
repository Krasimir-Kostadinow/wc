import { html, render } from 'lit-html';

const template = (ctx) => html`<div class="card mb-4">
    <img class="card-img-top" src="${ctx.data[1].imageUrl}" alt='${ctx.data[1].title}' width="400">
    <div class="card-body">
        <h4 class="card-title">${ctx.data[1].title}</h4>
    </div>
    <div class="card-footer">
        <a href="/details/${ctx.data[0]}"><button type="button" class="btn btn-info">Details</button></a>
    </div>

</div>`;

export class MovieCard extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }

    render() {
        render(template(this), this, { eventContext: this });
    }
}