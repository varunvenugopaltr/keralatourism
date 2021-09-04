let mail= document.getElementById("email");
let mobno= document.getElementById("mob");
let pass= document.getElementById("psw");
let passrep= document.getElementById("psw-repeat");


function validate()
{
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/

    if(mail.value.trim()=="")
    {
        alert("Email cannot be blank.!!")
        return false
    }
    
    else if(mobno.value.trim()=="")
    {
        alert("Mobile Number cannot be blank.!!")
        return false
    }

    else
    {   
        if(regexp.test(mail.value))
        {
            
        }
        else
        {
            alert("Invalid email format..!!");
            return false;
        }
        
    }

}