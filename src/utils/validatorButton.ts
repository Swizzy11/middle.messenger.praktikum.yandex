import validator from "./validator";

function buttonValidator() {
    const obj:any = {};
    validator("email");
    validator("login")
    validator("password");
    validator("phone");
    validator("first_name");
    validator("second_name");

if(validator("email") === true
&& validator("login") === true
&& validator("password") === true 
&& validator("phone") === true 
&& validator("first_name") === true
&& validator("second_name") === true) { 
    document.querySelectorAll("form input").forEach((e: any): void=> {
        console.log(e.value)
        obj[e.name] = e.value
    })
}
   if(Object.keys(obj).length !== 0) { 
    return obj
}
return false
}

export default buttonValidator;

