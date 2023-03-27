import { notifications } from "../common";
import { Router } from "@vaadin/router";

export class Logout extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        localStorage.removeItem('userInfo');
        Router.go('/');
        notifications('Successful logout');
    }
};