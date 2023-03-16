const tpl = 
`<div class="block">
<div class="messager_home_page">     
   <div class="message_body">
    <div class="header_message">
            {{{avatar}}}
            {{{userName}}}
            <div class="chat_name"></div>
   </div>
   <hr style="width: 95%;margin: auto ;opacity: .3;">
       <div class="chat">
        {{{message3}}}
        {{{message2}}}
        {{{message1}}}
       </div>
       <hr style="width: 95%;margin: auto ; opacity: .3;">
       <form action="" method="post" target="_blank" id="form_message">
                {{{buttonUploud}}}
                {{{inputMessage}}}
                {{{buttonSend}}}
       </form>
   </div> 
<div class="feed_block">
<div class="feed_header">
   <div class="feed_block__header-button">
       {{{buttonProfile}}}
       {{{buttonLogout}}}
    </div>
   <div class="search_chat">
       <form action="" method="post" target="_blank" > 
                {{{addChat}}}   
       </form>
       <form action="" method="post" target="_blank" > 
                {{{addUserToChat}}}   
       </form>
       <form action="" method="post" target="_blank" > 
                {{{deleteUserToChat}}}   
       </form>
   </div>
   <hr style="width: 100%;margin-left: 3% ; opacity: .3;">
</div>
<div class="feed_body">
   {{{contacts}}}
</div>
</div>
</div>
</div>

`

export default tpl;
