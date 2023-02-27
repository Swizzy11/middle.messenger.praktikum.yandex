const tmp = 
`
<div id="myModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      {{{closeModal}}}
      <h2>{{{modalName}}}</h2>
    </div>
    <div class="modal-body">
    <input 
    type="text" 
    class="input_common add_chat_input"
 >
    </div>
    <div class="modal-footer">
    {{{inputSend}}}
    </div>
  </div>
</div>

`
export default tmp
