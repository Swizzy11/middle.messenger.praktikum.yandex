import Block from "../../core/Block";
import tmp from "./tmp.hbs";

export interface IButton {
  [key: string]:string | {
    [key: string]:string
  }
}
export default class Button extends Block<IButton> {
    constructor(props:IButton) {
      super("div", props);
    }
  
    render() {

      return this.compile(tmp, {
        className: this.props.className,
        child: this.props.child
      });
    }
  } 
