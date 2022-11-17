import BaseIterableComponent from './BaseIterableComponent.js';

export default class ProfilesComponent extends BaseIterableComponent {

  constructor() {
    super("#main", {
      url: "http://localhost:8080/profiles",
      method: "GET",
      elementsSelector: "#profiles"
    });
  }

  template() {
    return `
    <h1>${this.msg.profiles.h1}</h1>
    <ul id="profiles"></ul>
  `;
  }

  elementTemplate(element) {

    // const date = new Date(${ element.createdAt });
    // Results below assume UTC timezone - your results may vary

    // Specify default date formatting for language (locale)
    // console.log(new Intl.DateTimeFormat('en-US').format(date));
    // expected output: "12/20/2020"
    return `<li>${element.firstName} ${element.lastName} (${this.dtf(element.createdAt)})</li>`;
  }
}
