import Messages from "./Messages.js"
import { renderMenu } from "./components/menu.js";
import { renderFooter } from "./components/footer.js";
import { route } from "./router.js";

class Application {

    static async main() {
        await Messages.init();
        renderMenu();
        renderFooter();
        route();
    }
}

Application.main();