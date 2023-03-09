/** @jest-environment jsdom */
import Block from "./Block";
import Router from "./router";

class TestRouterLogin extends Block{
  render() {
    return this.compile(`<div id="test_router">Login</div>`, {})
  }
}

describe('Проверяем переходы у Роутера', () => {
    const router = new Router("#root");
    router.start();

    it('Изменение длины history', () => {
      router.go(1)
      expect(window.history.length).toEqual(2);
    });

    it('Добавление роутов', () => {
    router.use("/login", TestRouterLogin, "div")
    expect(router.getRoute("/login").path).toEqual('/login')
    })
});
