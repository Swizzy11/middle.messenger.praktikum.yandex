const tpl =
`
<div class="personal-image">
<label class="label">
    <form id = {{{formId}}}>
          <input type="{{{type}}}" 
          name="{{{name}}}" 
          class="{{{class}}}" 
          accept="image/*" >
          {{{buttonUpdataAvatar}}}
    <img src="{{{userPhoto}}}" class="personal-avatar" alt="avatar"></form>
</label>
</div>
`

export default tpl
