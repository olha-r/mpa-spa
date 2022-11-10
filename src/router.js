import MenuComponent from "./components/MenuComponent.js";
import HomeComponent from "./components/HomeComponent.js";
import AboutComponent from "./components/AboutComponent.js";
import SignInComponent from "./components/SignInComponent.js";
import ProfileComponent from "./components/ProfileComponent.js";
import NotFoundComponent from "./components/NotFoundComponent.js";
import FooterComponent from "./components/FooterComponent.js";


export default class Router {

    static init() {
        window.addEventListener("hashchange", (event) => Router.route(event));
        Router.route();
        const menuComponent = new MenuComponent;
        menuComponent.render();
        const footerComponent = new FooterComponent;
        footerComponent.render();
    }

    static route(event) {
        const hash = window.location.hash;
        let component = null;
        if ((hash == "#/home") || (hash == "")) {
            component = new HomeComponent(); // Instance of HomeComponent
        } else if (hash == "#/sign-in") {
            component = new SignInComponent();
        } else if (hash == "#/about") {
            component = new AboutComponent();
        } else if (hash == "#/profile") {
            component = new ProfileComponent();
        } else {
            component = new NotFoundComponent();
        }
        component.render();
    }

}