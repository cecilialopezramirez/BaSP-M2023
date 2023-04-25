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


  passwordLogIn.addEventListener('blur',function() {
    var password= passwordLogIn.value;
    var hasLetter = false;
    var hasNumber = false;
    console.log(password);
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
    
})

emailLogIn.onfocus = function () {
    errorEmail.classList.remove("message");
    errorEmail.classList.add("errors");
  };

emailLogIn.addEventListener('blur',function(){
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
    
})

}


