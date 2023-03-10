import { Component } from "./Component";

export function render(query:string, block: Component): HTMLElement | null {
    const root = <HTMLElement>document.querySelector(query);
    root.appendChild(block.getContent());
    block.dispatchComponentDidMount();
    return root;
  }
