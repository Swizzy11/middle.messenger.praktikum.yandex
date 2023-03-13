import Button from "../../components/buttonSendInfo/Button";
import Router from "../../core/router"

import Error500 from "./error500Page";
import { Connect } from "../../core/store";


const router = new Router("#root");

export default Connect(
        Error500,
        (state) => {
                return {
                        buttonBack: new Button({
                                className:"btn_404",
                                child: "Вернуться на главную?",
                                events: {
                                        click: () => {
                                            router.go("/login")
                                        }
                                }
                        })
                }
        }
)
