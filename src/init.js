import { initMessages } from "./messages.js"
import { renderMenu } from "./components/menu.js";
import { renderFooter } from "./components/footer.js";
import { route } from "./router.js";

await initMessages();

renderMenu();
renderFooter();
route();

