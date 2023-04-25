window.onload=function(){
//variables de input 

var emailSignUp= document.getElementById('emailSignUp');
var nameSignUp= document.getElementById('nameSignUp');
var passwordSignUp= document.getElementById('passwordSignUp');
var lastSignUp= document.getElementById('lastSignUp');
var dniSignUp= document.getElementById('dniSignup');
var phoneSignUp= document.getElementById('phoneSignUp');
var citySignUp= document.getElementById('citySignUp');
var addressSignUp= document.getElementById('addressSignUp');
var postalSignUp= document.getElementById('postalSignUp');
var dateSignUp= document.getElementById('dateSignUp');
var repeatSignUp= document.getElementById('repeatSignUp');


//variables span

var errorEmail= document.getElementById('errorEmail');
var errorPassword= document.getElementById('errorPassword');
var errorName= document.getElementById('errorName');
var errorLastName= document.getElementById('errorLastName');
var errorDNI= document.getElementById('errorDNI');
var errorPhone= document.getElementById('errorPhone');
var errorCity= document.getElementById('errorCity');
var errorAddress= document.getElementById('errorAddress'); 
var errorCode= document.getElementById('errorCode'); 
var errorDate= document.getElementById('errorDate'); 
var errorRepeat= document.getElementById('errorRepeat'); 

//Password
passwordSignUp.onfocus = function () {
    errorPassword.classList.remove("message");
    errorPassword.classList.add("errors");
  };


  passwordSignUp.addEventListener('blur',function() {
    var password= passwordSignUp.value;
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

//Email

emailSignUp.onfocus = function () {
    errorEmail.classList.remove("message");
    errorEmail.classList.add("errors");
  };

emailSignUp.addEventListener('blur',function(){
    var email= emailSignUp.value;
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

//Nombre

nameSignUp.onfocus = function () {
    errorName.classList.remove("message");
    errorName.classList.add("errors");
  };


  nameSignUp.addEventListener('blur',function() {
    var name= nameSignUp.value;
    var nameValid = false;
    for (var i = 0; i < name.length; i++) {
        var carNumb = name.charCodeAt(i);
        if ((carNumb < 65 || carNumb > 90) && (carNumb < 97 || carNumb > 122) && carNumb !== 32) {
          nameValid=false;
        }else{
            nameValid=true;
        }
    }
    
      if(!nameValid){
        errorName.classList.remove("errors");
        errorName.classList.add("message");
        errorName.textContent=
        "The name format is not valid"
    }
        
})

}

