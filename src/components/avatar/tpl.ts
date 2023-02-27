const tpl =
` <form class={{formClassAvatar}}>
<div class="personal-image">
<label class="label">
    <form id = {{formId}}>
        <div class="personal-image">
          <label class="label">
          <input type="{{type}}" 
          name="{{name}}" 
          class="{{class}}" 
          accept="{{placeholder}}" >
  <figure class="personal-figure">
    <img src="{{userPhoto}}" class="personal-avatar" alt="avatar">
    <figcaption class="personal-figcaption">
      <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png">
    </figcaption>
  </figure>
</label>
</div>
</form>
`

export default tpl
