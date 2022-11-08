export default class Messages {

    static messages = null;

    static async init() {
        const browserLanguage = window.navigator.language; //fr, fr-fr, fr-FR, en, en-GB...
        let lang = "";
        if (browserLanguage.startsWith("fr")) {
            lang = "-fr";
        }
        const response = await fetch(`./src/resources/messages${lang}.json`);
        Messages.messages = await response.json();
    }
}