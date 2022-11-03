import { messages } from "../messages.js";

function renderMenu() {
    // Template/snippet
    const content = `
    <nav class="navbar navbar-expand-lg bg-light ps-lg-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="/#/home">${messages.brand}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/#/home">${messages.home.menuItem}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/profile">${messages.profile.menuItem}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/sign-in">${messages.signIn.menuItem}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/about">${messages.about.menuItem}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>      
    `;
    // Tagret container
    const header = document.getElementById("header");
    header.innerHTML = content;
}

export { renderMenu };