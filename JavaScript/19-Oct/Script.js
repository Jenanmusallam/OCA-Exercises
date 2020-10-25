var regexName = new RegExp(/(\b[a-z](?!\s))/g);
var regexPhone = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
var regexEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
var regexPassword = new RegExp(/^[A-Za-z]\w{7,14}$/);

function user() {
    var name = document.forms["myform"]["name"].value;
    var phone = document.forms["myform"]["phone"].value;
    var email = document.forms["myform"]["email"].value;
    var password = document.forms["myform"]["pass"].value;

    if (regexName.test(name) != true) {
        alert("Enter Name ");
        return false;
    }
    if (regexPhone.test(phone) != true) {
        alert("Enter phone Number ");
        return false;
    }
    if (regexEmail.test(email) != true) {
        alert("Enter Email ");
        return false;
    }
    if (regexPassword.test(password) != true) {
        alert("Enter Paswword ");
        return false;
    }
    alert("Create Account");
    return true;
}

function Show(s) {
    if (checkbox.s) {
        document.getElementById("create").disabled = true;
    }
    else {
        document.getElementById("create").disabled = true;
    }
}
