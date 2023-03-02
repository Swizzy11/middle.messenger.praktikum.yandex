import Button from "../../../../components/buttonSendInfo/Button";
import ButtonClose from "../../../../components/bottonClose/Button";
import Router from "../../../../utils/router"
import UserProfile from "./userProfilePage";
import { Connect } from "../../../../../service/store";
import Store from "../../../../../service/store";

import addValue from "../../../../utils/heplerApp/addValue";


const router = new Router("#root")
 

export default Connect(
        UserProfile, 
        (state) => {
            if(Store.getState() !== undefined) {
                  return {  //@ts-ignore
                        userPhoto: `<img class="user_photo">`,
                        //@ts-ignore
                        userName: Store.getState().user.first_name,
                        //@ts-ignore
                        userSurname: Store.getState().user.second_name,
                        //@ts-ignore
                        email: Store.getState().user.email,
                        //@ts-ignore
                        login: Store.getState().user.login,
                        //@ts-ignore
                        nameInChat: Store.getState().user.display_name,
                        //@ts-ignore
                        phone: Store.getState().user.phone,

                        buttonEdit: new Button({
                              className: "btn btn_edit",
                              child:"Редактировать...",
                              events: {
                                    click: () => {
                                          router.go("/settings");
                                          setTimeout(()=>{addValue()},200)
                                    }
                              }
                        }),
                        buttonClose: new ButtonClose({
                              className: "btn btn_close",
                              events: {
                                    click: () => {
                                          router.go("/messanger")
                                    }
                              }
                        })
                  }
            }
              
})
