import Button from "../../../../components/buttonSendInfo/Button";
import { render } from "../../../../utils/renderDOM";
import Router from "../../../../utils/router"

import Error500 from "./error500Page";
import { Connect } from "../../../../../service/store";


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
