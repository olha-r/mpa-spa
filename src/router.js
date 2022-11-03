import { renderHome } from "./components/home.js";
import { renderAbout } from "./components/about.js";
import { renderSignIn } from "./components/signIn.js";
import { renderContact } from "./components/contact.js";
import { renderNotFound } from "./components/notFound.js";

const routes = ["#/home", "#/about", "#/sign-in", "#/contact"];
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
    } else if (hash == "#/contact") {
        renderContact();
    } else {
        renderNotFound()
    }
}

export { route };

