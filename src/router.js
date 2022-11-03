import { renderHome } from "./components/home.js";
import { renderAbout } from "./components/about.js";
import { renderSignIn } from "./components/signIn.js";
import { renderProfile } from "./components/profile.js";
import { renderNotFound } from "./components/notFound.js";

const routes = ["#/home", "#/about", "#/sign-in", "#/profile"];
window.addEventListener("hashchange", (event) => route(event));
// window.onhashchange = route;
console.log(window.navigator.language);
function route(event) {
    const hash = window.location.hash;
    if ((hash == "#/home") || (hash == "")) {
        renderHome();

    } else if (hash == "#/sign-in") {
        renderSignIn();
    } else if (hash == "#/about") {
        renderAbout();
    } else if (hash == "#/profile") {
        renderProfile();
    } else {
        renderNotFound()
    }
}

export { route };

