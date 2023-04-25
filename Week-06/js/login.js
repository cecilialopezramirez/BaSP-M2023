window.onload=function(){

var formLogIn = document.getElementById('formLogIn'); 

//variables de input 
var emailLogIn= document.getElementById('emailLogIn');
var passwordLogIn= document.getElementById('passwordLogIn');


//variables span

var errorEmail= document.getElementById('errorEmail');
var errorPassword= document.getElementById('errorPassword');

//boton
var button= document.getElementById('button');

passwordLogIn.onfocus = function () {
    errorPassword.classList.remove("message");
    errorPassword.classList.add("errors");
  };

var errors=[];
function isPassWordvalid() {
  var password= passwordLogIn.value;
    var hasLetter = false;
    var hasNumber = false;
    for (var i = 0; i < password.length; i++) {
        var char = password.charAt(i);
            if (char >= "0" && char <= "9") {
            hasNumber = true;
        } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            hasLetter=true; 
            
        }
    }
    if (!hasLetter || !hasNumber) {
        errorPassword.classList.remove("errors");
        errorPassword.classList.add("message");
        errorPassword.textContent =
          "This field needs at least one letter, and at least one number";
        }
        if (password.length < 8 || password.length >30) {
          errorPassword.classList.remove("errors");
          errorPassword.classList.add("message");
          errorPassword.textContent += " This field needs to have between 8 and 30 characters";
          
    }
    if(errors.includes(errorPassword.textContent)){
      
    }
    
console.log(errors)
}

  passwordLogIn.addEventListener('blur', isPassWordvalid)

emailLogIn.onfocus = function () {
    errorEmail.classList.remove("message");
    errorEmail.classList.add("errors");
  };

emailLogIn.addEventListener('blur', function(){
    var email= emailLogIn.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailValid=false;
    if (email.match(emailExpression)) {
      emailValid=true;
    } else {
      emailValid=false;
    }

    if(!emailValid){
        errorEmail.classList.remove("errors");
        errorEmail.classList.add("message");
        errorEmail.textContent=
        "The email format is not valid"
    }
  if(emailValid===true){
    return true
  }else{
    return false
  }
})


var textAlertErrors = [
  errorEmail.textContent,
  errorPassword.textContent,
]


}


