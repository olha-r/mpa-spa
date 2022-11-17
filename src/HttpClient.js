export default class HttpClient {
    static async send(url, method) {
        const options = {
            method: method
        }
        const response = await fetch(url, options);

        return await response.json(); //Json object
    }
}