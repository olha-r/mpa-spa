import BaseComponent from './BaseComponent.js';
import HttpClient from '../HttpClient.js';

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
        BaseFormComponent.bind(properties, form, data);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(data);
            HttpClient.send(this.props.url, this.props.method, data);
        })
    }

    //properties : firstName, lastName, email, isTrainer
    static bind(properties, form, data) {
        properties.forEach((property) => {
            const element = form.elements[property];
            const type = element.type;
            BaseFormComponent.bindModelToView(element, type, data, property);
            BaseFormComponent.bindViewToModel(element, type, data, property);
        });
    }

    static bindModelToView(element, type, data, property) {
        if (type == "checkbox") {
            element.checked = data[property];
        } else { //text
            element.value = data[property];
        }
    }

    static bindViewToModel(element, type, data, property) {
        element.addEventListener("change", (event) => {
            console.log(`${data} changed`);
            if (type == "checkbox") {
                data[property] = element.checked;
            } else { //text
                data[property] = element.value;
            }
        });
    }

    dataModel() {
        return null;
    }
}