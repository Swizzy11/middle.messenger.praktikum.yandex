/** @jest-environment jsdom */

import HTTPTransport from "./HTTPTransport";

class Test extends HTTPTransport {
    constructor(url:string) {
        super(url)
        this.path = `${url}`
    }
}
const url = "http://httpbin.org/";
const http = new Test(url);

describe("Test HTTPTransport", () => {

    it("Тест GET запроса", async () => {
        const get:any = await http.get('/get');
        
        expect(get.url).toEqual("http://httpbin.org/get");
    });

    it("Тест POST запроса", async () => {
        const post:any = await http.post('/post', '');

        expect(post.url).toEqual("http://httpbin.org/post");
    });

    it("Тест PUT запроса", async () => {
        const put:any = await http.put('/put', "");

        expect(put.url).toEqual("http://httpbin.org/put");
    });

    it("Тест DELETE запроса", async () => {
        const del:any = await http.delete('/delete', "");

        expect(del.url).toEqual("http://httpbin.org/delete");
    });
})
