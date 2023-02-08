export function render(query:any, block: any) {
    const root = document.querySelector(query);
  
    root.appendChild(block.getContent());
  
      block.dispatchComponentDidMount();
  
    return root;
  }
