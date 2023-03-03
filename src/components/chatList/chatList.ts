import Block from "../../core/Block";
import tmp from "./tmp.hbs";

export interface IChatList {
  you: string,
  messageForPeople: string,
  date1: string,
}
export default class ChatList extends Block {
    constructor(props:IChatList) {
      super("div", props);
    }
  
    render() {  
      return this.compile(tmp);
    }
  } 
