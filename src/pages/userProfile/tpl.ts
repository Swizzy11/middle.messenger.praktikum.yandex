 const tpl =`<div class="block_profile">
            <div class="profile_header">
                    {{{buttonClose}}}
                <h1 style="font-family: CALIBRI; margin: 0;">Профиль</h1>
            </div>
            <hr style="width: 90%;margin: auto ; opacity: 0.5; margin-bottom: 5%;">
            <div class="profile_body">
                <div class="form">
                    <h3 class="head_name">Аватар:</h3>
                    <div class="user_photo">{{{userPhoto}}}</div>
                </div>
                <div class="form">
                    <h3 class="head_name">Имя:</h3>
                    <div class="user_setting"> {{{userName}}}</div>
                </div>    
                <div class="form">
                    <h3 class="head_name">Фамилия:</h3>
                    <div class="user_setting"> {{{userSurname}}}</div>
                </div>
                <div class="form">
                    <h3 class="head_name">Почта:</h3>
                    <div class="user_setting"> {{{email}}}</div>
                </div>
                <div class="form">
                    <h3 class="head_name">Логин:</h3>
                    <div class="user_setting"> {{{login}}}</div>
                </div>
                <div class="form">
                    <h3 class="head_name">Имя в чате:</h3>
                    <div class="user_setting"> {{{nameInChat}}}</div>
                </div>
                <div class="form">
                    <h3 class="head_name">Номер телефона:</h3>
                    <div class="user_setting"> {{{phone}}}</div>
                </div>
            </div>
            <div class="profile_footer">
                        {{{buttonEdit}}}
                        {{{buttonNoLoad}}}
            </div>
        </div>
`
export default tpl
