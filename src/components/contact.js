import { messages } from "../messages.js";

function renderContact() {
  const content = `
      <h1>${messages.contact.h1}</h1>
      <p>This is a contact page</p>
    `

  const main = document.getElementById("main");

  main.innerHTML = content;
}

export { renderContact };