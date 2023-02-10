import Block from "../../core/Block";
import tmp from "./tmp.hbs";

export interface IChatList {
  you: string,
  yourFriend: string,
  messageForYou: string,
  messageForPeople: string,
  date1: string,
  date2: string,
}
export default class ChatList extends Block<IChatList> {
    constructor(props:IChatList) {
      super("div", props);
    }
  
    render() {
        
      return this.compile(tmp,{
        you: this.props.you,
        yourFriend: this.props.yourFriend,
        messageForYou: this.props.messageForYou,
        messageForPeople: this.props.messageForPeople,
        date1: this.props.date1,
        date2: this.props.date2,
      });
    }
  } 
