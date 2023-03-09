/** @jest-environment jsdom */

import Store from "./index";


describe("Проверяю работу Store", () => {

    it("Добавление значения,а так же получения его", () => {
        Store.set("testID", 123);

        expect(Store.getState().testID).toEqual(123)
    })
})
