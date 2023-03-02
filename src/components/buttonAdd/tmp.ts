const tmp = 
`
{{{buttonAddChat}}}
<div id="{{{modalID}}}" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      {{{closeModal}}}
      <h2>{{{modalName}}}</h2>
    </div>
    <div class="modal-body">
    {{{chatID}}}{{{inputChatID}}} 
    {{{userID}}}{{{inputUserID}}}
    {{{oldPasswordID}}}{{{oldPassword}}}
    {{{passwordID}}}{{{password}}}
    {{{passwordRepeatID}}}{{{passwordRepeat}}}
    {{{errorMessage}}}
    </div>
    <div class="modal-footer">
    {{{inputSend}}}
    </div>
  </div>
</div>
`
export default tmp
