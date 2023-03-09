import Block from "./Block";

export function render(query:string, block: Block): HTMLElement | null {
    const root = <HTMLElement>document.querySelector(query);
    root.appendChild(block.getContent());
    block.dispatchComponentDidMount();
    return root;
  }
