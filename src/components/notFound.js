import { messages } from "../messages.js";
function renderNotFound() {
    const content = `
    <h1>${messages.notFound.h1}</h1>
    `
    const main = document.getElementById("main");
    main.innerHTML = content;
}

export { renderNotFound };