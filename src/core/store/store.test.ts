/** @jest-environment jsdom */

import Store from "./index";


describe("Проверяю работу Store", () => {

    it("Добавление значения", () => {
        Store.set("testID", 123);

        expect(Store.getState().testID).toEqual(123)
    });

    it("Получение значения", () => {
        Store.set("test", "Hello");
        const test = Store.getState().test;

        expect(test).toEqual("Hello")
    })
})
