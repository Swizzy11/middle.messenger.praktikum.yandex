const tpl =
` <div class="block_edit_profile">
            <div class="edit_profile_header">
                {{{buttonClose}}}
                <h1 style="margin: 0;">Профиль</h1>
            </div>
            <hr style="width: 90%;margin: auto ; opacity: 0.5; margin-bottom: 5%;">
            <div class="edit_profile_body">
                <form action="" method="post" target="_blank" >
                    <div class="form_block">
                        <h3 class="name_features">Аватар:</h3>
                        {{{avatar}}}
                    </div>
                    <div class="form_block">
                        <h3 class="name_features">Имя:</h3>
                        {{{userName}}}
                    </div>
                    <div class="error_name"></div>   
                    <div class="form_block">
                        <h3 class="name_features">Фамилия:</h3>
                        {{{userSurname}}}  
                    </div>
                    <div class="error_surname"></div>
                    <div class="form_block">
                        <h3 class="name_features">Почта:</h3>
                        {{{email}}}
                    </div>
                    <div class="error_email"></div>
                    <div class="form_block">
                        <h3 class="name_features">Логин:</h3>
                        {{{login}}}
                    </div>
                    <div class="error_login"></div>
                    <div class="form_block">
                        <h3 class="name_features">Имя в чате:</h3>
                        {{{nameInChat}}}
                    </div>
                    <div class="error_login"></div>
                    <div class="form_block">
                        <h3 class="name_features">Номер телефона:</h3>
                        {{{phone}}}
                    </div>
                    <div class="error_phone"></div>
                </form>
            </div>
            <div class="edit_profile_footer">
                {{{buttonChangePassword}}}{{{buttonSave}}}
            </div>
        </div>
`

export default tpl;
