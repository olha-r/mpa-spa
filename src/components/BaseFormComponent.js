import BaseComponent from './BaseComponent.js';

export default class BaseFormComponent extends BaseComponent {

    props = null;

    constructor(selector, props) {
        super(selector);
        this.props = props;
    }

    render() {
        super.render();
        //Form specific logic
        const data = this.dataModel();
        const properties = Object.keys(data);
        const form = this.target.querySelector("form");
        properties.forEach((property) => {
            const type = form.elements[property].type;
            if (type == "checkbox") {
                form.elements[property].checked = data[property];
            } else {
                form.elements[property].value = data[property];
            }
        });
    }

    dataModel() {
        return null;
    }
}