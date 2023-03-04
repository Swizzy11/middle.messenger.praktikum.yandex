import AutheficationController from "../../../../../service/controllers/authController";
import { Connect } from "../../../../../service/store";
import Button from "../../../../components/buttonSendInfo/Button";
import Router from "../../../../utils/router"

import Error404 from "./error404Page";


const router = new Router("#root")

export default Connect(
        Error404,
        (state) => {
                return {
                        buttonBack: new Button({
                                className:"btn_404",
                                child: "Вернуться на главную?",
                                events: {
                                        click: () => {
                                                const logout = new AutheficationController();
                                                logout.logout()
                                                setTimeout(()=>router.go("/login"), 500)
                                                
                                        }
                                }
                        })
                }
        }
)
