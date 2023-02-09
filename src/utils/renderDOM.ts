import Block from "../core/Block";

export function render(query:string, block: Block<unknown>): HTMLElement | null {
    const root= <HTMLElement>document.querySelector(query);
  
    root.appendChild(block.getContent());
  
    block.dispatchComponentDidMount();
  
    return root;
  }
