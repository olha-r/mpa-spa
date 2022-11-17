export default class I18N {

    static messages = null;


    static async init() {
        const browserLanguage = window.navigator.language; //fr, fr-fr, fr-FR, en, en-GB...
        let lang = "";
        const dtfOptions = { dateStyle: 'short', timeStyle: 'long' };


        if (browserLanguage.startsWith("fr")) {
            lang = "-fr";
            I18N.dtf = new Intl.DateTimeFormat('fr', dtfOptions);
        } else {
            I18N.dtf = new Intl.DateTimeFormat('en', dtfOptions);
        }
        const response = await fetch(`./src/resources/messages${lang}.json`);
        I18N.messages = await response.json();
    }
}