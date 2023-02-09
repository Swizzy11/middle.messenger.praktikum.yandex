import tmp from './tmp.hbs';
import Block from "../../core/Block";
import { IInput } from '../../components/input/input';
import { IButton } from '../../components/button/Button';
import { IChatList } from '../../components/chatList/chatList';
type PropsType = {
    userName: Block<IInput>,
    buttonProfile:Block<IButton>,
    buttonLogout:Block<IButton>,
    buttonUploud:Block<IButton>,
    buttonSend:Block<IButton>,
    inputMessage:Block<IInput>,
    inputSearch:Block<IInput>,
    firstPeople:Block<IInput>,
    message1:Block<IChatList>,
}

export default class MainPage extends Block<PropsType> {
    constructor(props) {
        super("div", props);

    }
    render() {
        return this.compile(tmp, {
            userName: this.props.userName,
            buttonProfile: this.props.buttonProfile,
            buttonLogout: this.props.buttonLogout,
            buttonUploud: this.props.buttonUploud,
            buttonSend: this.props.buttonSend,
            inputMessage: this.props.inputMessage,
            inputSearch: this.props.inputSearch,
            firstPeople: this.props.firstPeople,
            message1: this.props.message1,
        });   
    }
}
