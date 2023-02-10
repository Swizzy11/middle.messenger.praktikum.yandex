import tmp from "./tmp.hbs";
import Block from "../../core/Block";

export interface IInput {
  type: string;
  name: string;
  class: string;
  placeholder?: string;
  events?: {
    focusin: () => void
}
}

export default class Input extends Block<IInput> {
    constructor(props:IInput) {
      super("div", props);
    }
  
    render() {
        
      return this.compile(tmp,{
        type: this.props.type,
        name: this.props.name,
        class: this.props.class,
        placeholder: this.props.placeholder,
      });
    }
  } 
