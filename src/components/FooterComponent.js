import BaseComponent from "./BaseComponent.js";

export default class FooterComponent extends BaseComponent {
    constructor() {
        super("#footer")
    }
    template() {
        return `<p>Copyrigth Simplon 2022</p>`;
    }

}
