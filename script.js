function formInputValidation(){
    var isValidAge = validateAge();
    var isValidPassword = validatePassword();

    if(isValidAge)
        document.getElementById("age-warning").innerHTML = "";
    else
        document.getElementById("age-warning").innerHTML = "Minors are not allowed!";

    if(isValidPassword)
        document.getElementById("password-warning").innerHTML = "";
    else
        document.getElementById("password-warning").innerHTML = "Password must be at least 8 characters.";

    if(isValidAge && isValidPassword)
        document.getElementById("success-warning").innerHTML = "Hooray! Your account has been successfully created.";
    else 
        document.getElementById("success-warning").innerHTML = "";
}

function validatePassword() {
    var passwordInput = document.getElementById('password').value;
    if(passwordInput.length < 8) return false;
    return true;
}

function validateAge() {
    var birthdate = document.getElementById('birthdate').value
    var dateData = birthdate.split("-");
    var age = 2023 - dateData[0];
    if(age < 21) return false;
    return true;
}

function resetInputForm() {
    document.getElementById("age-warning").innerHTML = "";
    document.getElementById("password-warning").innerHTML = "";
    document.getElementById("success-warning").innerHTML = "";
}
