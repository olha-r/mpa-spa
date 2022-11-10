import HomeComponent from "./HomeComponent.js";

export default class SignInComponent extends HomeComponent {

  constructor() {
    super("#main")
  }

  template() {
    return `
    <h1>${this.msg.signIn.h1}</h1>
    <p>This is a sign-in page</p>
  `;
  }
}
