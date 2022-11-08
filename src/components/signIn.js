import Messages from "../Messages.js";

function renderSignIn() {
  const content = `
      <h1>${Messages.messages.signIn.h1}</h1>
      <p>This is a sign-in page</p>
    `

  const main = document.getElementById("main");

  main.innerHTML = content;
}

export { renderSignIn };