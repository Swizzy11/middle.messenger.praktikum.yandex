import Button from "../../components/buttonSendInfo/Button";
import ButtonClose from "../../components/bottonClose/Button";
import Router from "../../core/router"
import UserProfile from "./userProfilePage";
import { Connect } from "../../core/store";
import Store from "../../core/store";

import addValue from "../../utils/heplerApp/addValue";


const router = new Router("#root")
 

export default Connect(
        UserProfile, 
        (state) => {
            const user = Store.getState().user;
            if(user !== undefined) {
            let avatarlink:string;
            if(user.avatar !== "null" && user !== undefined ) {
                  avatarlink = `https://ya-praktikum.tech/api/v2/resources/${user.avatar}`
            }else {
                  avatarlink = ""
            }
            if(user !== undefined) {
                  return { 
                        userPhoto: `<img class="user_photo" src="${avatarlink}">`,
                        userName: user.first_name,
                        userSurname: user.second_name,
                        email: user.email,
                        login: user.login,
                        nameInChat: user.display_name,
                        phone: user.phone,

                        buttonEdit: new Button({
                              className: "btn btn_edit",
                              child:"Редактировать...",
                              events: {
                                    click: () => {
                                          router.go("/settings");
                                          addValue()
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
            }else {
                  return
            }
      }        
})
