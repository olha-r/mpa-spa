import Messages from "../Messages.js";

function renderMenu() {
    // Template/snippet
    const content = `
    <nav class="navbar navbar-expand-lg bg-light ps-lg-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="/#/home">${Messages.messages.brand}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/#/home">${Messages.messages.home.menuItem}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/profile">${Messages.messages.profile.menuItem}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/sign-in">${Messages.messages.signIn.menuItem}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#/about">${Messages.messages.about.menuItem}</a>
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