const tpl = 
`        <div class="block_authorization">
            <div class="authorization_header">
                <h1 style="margin: 0; font-family: CALIBRI; font-size:10vm">Авторизация</h1>
            </div>
            <hr style="width: 90%;margin-top:5% ; opacity: 0.5;">
                <div class="authorization_body">
                    <form action="" method="post" target="_blank" >
                        <h3 class="header_text">Логин:</h3>
                        {{{login}}}
                        <div class="error_login"></div>
                        <h3 class="header_text">Пароль:</h3>
                        {{{password}}}
                        <div class="error_password"></div>
                    </form>
                </div>
            <div class="authorization_footer">
                {{{buttonEnter}}}
                {{{buttonNoAccount}}}
            </div>
        </div>
`
export default tpl
