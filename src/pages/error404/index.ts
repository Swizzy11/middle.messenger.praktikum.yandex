import AutheficationController from "../../../service/controllers/authController";
import { Connect } from "../../core/store";
import Button from "../../components/buttonSendInfo/Button";
import Router from "../../core/router"

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
                                        click: async () => {
                                                const logout = new AutheficationController();
                                                await logout.logout();
                                                router.go("/login");
                                        }
                                }
                        })
                }
        }
)
