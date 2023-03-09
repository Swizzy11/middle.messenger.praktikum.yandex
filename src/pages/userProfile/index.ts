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
            if(Store.getState().user !== undefined) {
            let avatarlink;
            if(Store.getState().user.avatar !== "null" && Store.getState().user !== undefined ) {
                  avatarlink = `https://ya-praktikum.tech/api/v2/resources/${Store.getState().user.avatar}`
            }else {
                  avatarlink = ""
            }
            if(Store.getState().user !== undefined) {
                  return { 
                        userPhoto: `<img class="user_photo" src="${avatarlink}">`,
                        userName: Store.getState().user.first_name,
                        userSurname: Store.getState().user.second_name,
                        email: Store.getState().user.email,
                        login: Store.getState().user.login,
                        nameInChat: Store.getState().user.display_name,
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
            }else {
                  return
            }
      }        
})
