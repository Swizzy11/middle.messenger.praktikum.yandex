import validator from "./validator";

function buttonValidator() {
    const obj = {};
    validator("email");
    validator("login")
    validator("password");
    validator("phone");
    validator("first_name");
    validator("second_name");

if(validator("email") === true
&& validator("login")
&& validator("password") === true 
&& validator("phone") === true 
&& validator("first_name") === true
&& validator("second_name") === true) { 
    document.querySelectorAll("form input").forEach((e: any): void=> {
        obj[e.name] = e.value
    })
}
   if(Object.keys(obj).length !== 0) { 
    console.log(obj)
}
}

export default buttonValidator;

