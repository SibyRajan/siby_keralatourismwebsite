let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]{5,10}).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
}
function pwdvalidate(){
    if (email.value.trim()=="") {
        alert("Email cannot be empty");
        return false;
    }
    else if (pwd.value.trim()=="") {
        alert("Password cannot be empty");
        return false;
    }
    else if (pwd.value.length<=3) {
        alert("Password strength is very weak");
        pwd.style.border="2px solid red";
        return false;
    }
    else if (pwd.value.length<=5) {
        alert("Password strength is weak");
        pwd.style.border="2px solid orange";
        return false;
    }
    else if (pwd.value.length<=8) {
        alert("Password strength is moderate");
        pwd.style.border="2px solid yellow";
        return false;
    }
    else{
        alert("Password strength is strong");
        pwd.style.border="2px solid green";
        return true;
    }
}
function phonevalidate(){
    var text = document.getElementById("phone").value;
    var regx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regx.test(text)){
        alert("Valid phone number");
        return true;
    }       
    else{
        alert("Invalid phone number")
        return false;
    }
}
function CheckPassword() {
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(pwd.value.match(decimal)) { 
        alert('Valid Password');
        return true;
    }
    else{ 
        alert('InValid Password');
        alert('Should not exceed 15 characters')
        alert('Must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
        return false;
    }
}
