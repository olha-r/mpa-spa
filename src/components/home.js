import Messages from "../Messages.js";

function renderHome() {
  const content = `
      <h1>${Messages.messages.home.h1}</h1>
      <p>This is a home page</p>
      <h2>${Messages.messages.home.h2}</h2>
      `

  const main = document.getElementById("main");

  main.innerHTML = content;
}



export { renderHome };