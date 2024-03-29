import BaseFormComponent from "./BaseFormComponent.js";

export default class ProfileComponent extends BaseFormComponent {
  constructor() {
    super("#main", {
      url: "http://localhost:8080/profiles",
      method: "POST"
    })
  }

  dataModel() {
    return {
      firstName: "Olha",
      lastName: "Raulet",
      email: "email@email.com",
      trainer: false
    };
  }

  template() {
    return `
      <h1>${this.msg.profile.h1}</h1>
      <form class="container-md">
        <div class="mb-3">
          <label for="firstName" class="form-label">${this.msg.profile.firstName}</label>
          <input name="firstName" id="firstName" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">${this.msg.profile.lastName}</label>
          <input name="lastName" id="lastName" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">${this.msg.profile.email}</label>
          <input name="email" id="email" type="email" class="form-control">
        </div>
        <div class="mb-3">
        <label for="preferredLanguage" class="form-label">${this.msg.profile.preferredLanguage}</label>
          <select id="preferredLanguage" class="form-select">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>
        <div class="mb-3 form-check">
          <input name="trainer" id="trainer" type="checkbox" value="true" class="form-check-input">
          <label for="trainer" class="form-check-label">${this.msg.profile.trainer}</label>
        </div>
        
        <button type="submit" class="btn btn-primary">${this.msg.profile.submit}</button>
      </form>
    `
  }
}