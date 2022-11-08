import Messages from "../Messages.js";

function renderAbout() {
  const content = `
      <h1>${Messages.messages.about.h1}</h1>
      <p>This is a about page</p>
      <h2>${Messages.messages.about.h2}</h2>
    `

  const main = document.getElementById("main");

  main.innerHTML = content;
}

export { renderAbout };