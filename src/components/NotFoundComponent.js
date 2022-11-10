import HomeComponent from "./HomeComponent.js";

export default class NotFoundComponent extends HomeComponent {
    constructor() {
        super("#main")
    }

    template() {
        return `
        <h1>${this.msg.notFound.h1}</h1>
        `;
    }
}
