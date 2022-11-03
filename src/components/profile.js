import { messages } from "../messages.js";

function renderProfile() {
  const content = `
      <h1>${messages.profile.h1}</h1>
      <form>
        <div class="mb-3">
          <label for="firstName" class="form-label">${messages.profile.firstName}</label>
          <input name="firstName" id="firstName" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">${messages.profile.lastName}</label>
          <input name="lastName" id="lastName" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">${messages.profile.email}</label>
          <input name="email" id="email" type="email" class="form-control">
        </div>
        <div class="mb-3 form-check">
          <input name="trainer" id="trainer" type="checkbox" value="true" class="form-check-input">
          <label for="trainer" class="form-check-label">${messages.profile.trainer}</label>
        </div>
        <button type="submit" class="btn btn-primary">${messages.profile.submit}</button>
      </form>
    `

  const main = document.getElementById("main");

  main.innerHTML = content;
}

export { renderProfile };