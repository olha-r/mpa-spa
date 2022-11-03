import { messages } from "../messages.js";

function renderAbout() {
  const content = `
      <h1>${messages.about.h1}</h1>
      <p>This is a about page</p>
      <h2>${messages.about.h2}</h2>
    `

  const main = document.getElementById("main");

  main.innerHTML = content;
}

export { renderAbout };