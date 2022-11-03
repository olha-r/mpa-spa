import { messages } from "../messages.js";

function renderSignIn() {
    const content = `
      <h1>${messages.signIn.h1}</h1>
      <p>This is a sign-in page</p>
    `

    const main = document.getElementById("main");

    main.innerHTML = content;
}

export { renderSignIn };