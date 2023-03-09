const tpl = 
`<div class="block_registration">
            <div class="registration_header">
                <h1 style="font-family: CALIBRI;; margin: 0;">Регистрация</h1>
            </div>
            <hr style="width: 90%;margin: auto ; opacity: 0.5;">
            <div class="registration_body">
                <form action="" method="post" target="_blank" >
                    <div class="name_form">
                        <h3 class="header_text">Имя:</h3>
                        {{{userName}}}
                        <div class="error_name"></div>
                    </div>
                    <div class="surname_form">
                        <h3 class="header_text">Фамилия:</h3>
                        {{{userSurname}}}
                        <div class="error_surname"></div>
                    </div>
                    <div class="email_form">
                        <h3 class="header_text">Почта:</h3>
                        {{{email}}}
                        <div class="error_email"></div>
                    </div>
                    <div class="login_form">
                        <h3 class="header_text">Логин:</h3>
                        {{{login}}}
                        <div class="error_login"></div>
                    </div>
                    <div class="password_form">
                        <h3 class="header_text">Пароль:</h3>
                        {{{password}}}
                        <div class="error_password"></div>
                    </div>
                    <div class="phone_form">
                        <h3 class="header_text">Номер телефона:</h3>
                        {{{phone}}}
                        <div class="error_phone"></div>
                    </div>
                </form>
            </div>
            <div class="registration_footer">
                            {{{buttonRegistr}}}
                            {{{buttonHasAccount}}}
            </div>
        </div>
`

export default tpl
