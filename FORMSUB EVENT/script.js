let form = document.getElementsByClassName("form");
let username = document.getElementById("name")

let eMail = document.getElementById("E-mail")
let passWord = document.getElementById("Password");

function validate(){

    
  username.value
   console.log(username);

    eMail.value
    console.log(eMail);


    passWord.value;
    console.log(passWord)

    if(username==""|| eMail==""||passWord=="")
    {
        return false
    }else{
        return true
    }

}
