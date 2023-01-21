let button = document.getElementById("btn")
let Name = document.getElementById("name")
let Email = document.getElementById("email")
let password = document.getElementById("pass")
let ConfirmPassword = document.getElementById("cpass")

function validateForm()
{
    if(Name.value.trim().length<2)
    {
        Name.style.border = "solid 2px red"
        document.getElementById("labled").style.visibility="visibile";
        return false;
    }

    else if(Email.value.trim()=="") {
        Email.style.border = "solid 2px red"
        return false;
    }

    else if(password.value.trim().length<8)
    {
        Email.style.border = "solid 2px red"
        return false;
    }
    else if(ConfirmPassword.value.trim().length<8)
    {
        Email.style.border = "solid 2px red"
        return false;
    }
    else {
        return true;
    }
}