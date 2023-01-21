

//   Login form using html css and js
//   Create by: PHO SOPHORS https://github.com/PhoSophors
//   date: Jan 21, 2023


// store email and password to array
var emailArray=[];
var passwordArray=[];

// register function 
function register(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var fullname = document.getElementById("fname").value;
    var phonenumber = document.getElementById("phone").value;

    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (fullname == ""){
      alert("fullname required.");
      return ;
    }
    else if (phonenumber == ""){
      alert("phone required.");
      return ;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + " registration successs. \nTry to login Now");

        document.getElementById("email").value ="";
        document.getElementById("psw").value="";
    }
    else{
        alert(email + " is already register success.");
        return ;
    }
}

// login founction
function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert(email + " yor are login success.");

        document.getElementById("email").value ="";
        document.getElementById("psw").value="";
        return ;
    }

}