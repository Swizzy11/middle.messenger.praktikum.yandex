/** @jest-environment jsdom */
import Block from "./Block"

class TestBlock extends Block {
    render(){
        return this.compile("Test", {})
    }
}

class TemplateBlock extends Block {
    render(){
        return this.compile(`{{{hi}}}`, {
            hi: this._props.hi
        })
    }
}

const templateBlock = new TemplateBlock('div', {hi: 'Hi world'})
const block = new TestBlock('div')

describe('Проверка Block', () => {

    it('вернёт ли render правильный TAG', () => {
        expect(block._element.tagName).toEqual("DIV")
    });


    it('возвращает ли render содержимое', () => {

        expect(block._element.innerHTML).toEqual("Test")
    });


    it('обрабатывается ли шаблон в render', () => {
        expect(templateBlock._element.innerHTML).toEqual("Hi world")
    });


    it('обновляются ли props', () => {
        templateBlock.setProps({hi: "Update"})

        expect(templateBlock._element.innerHTML).toEqual("Update")
    });
});
