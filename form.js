let un= document.getElementById("username");
let psd= document.getElementById("password");


function validate()
{
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    // if(un.value==""||psd.value=="")
    // {
    //     alert("User Name or Password cannot be empty..!!");
    //     return false;
    // }
     if(un.value.trim()=="")
    {
        alert("UserName cannot be blank.!!")
        return false
    }
    
    else if(psd.value.trim()=="")
    {
        alert("Password cannot be blank.!!")
        return false
    }

    else
    {   
        if(regexp.test(un.value))
        {
            return true;
        }
        else
        {
            alert("Invalid email format..!!");
            return false
        }
        
    }
}