import BaseComponent from "./BaseComponent.js";

export default class MenuComponent extends BaseComponent {

    constructor() {
        super("header");
    }
    template() {
        return `
        <nav class="navbar navbar-expand-lg bg-light ps-lg-5">
            <div class="container-fluid">
                <a class="navbar-brand" href="/#/home">${this.msg.brand}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/#/home">${this.msg.home.menuItem}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#/profile">${this.msg.profile.menuItem}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#/profiles">${this.msg.profiles.menuItem}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#/about">${this.msg.about.menuItem}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>      
        `;
    }
}
