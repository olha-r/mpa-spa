import HomeComponent from "./HomeComponent.js";

export default class AboutComponent extends HomeComponent {

  constructor() {
    super("#main")
  }

  template() {
    return `
      <h1>${this.msg.about.h1}</h1>
      <p>This is a about page</p>
      <h2>${this.msg.about.h2}</h2>
    `;
  }
}
