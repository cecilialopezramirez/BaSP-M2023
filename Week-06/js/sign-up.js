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

    if (password.length < 8 || password.length >30) {
        errorPassword.classList.remove("errors");
        errorPassword.classList.add("message");
        errorPassword.textContent += " This field needs to have between 8 and 30 characters";
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
        "This field should only contain letters"
    }

    if (name.length < 3 || name.length > 20) {
        errorName.classList.remove("errors");
        errorName.classList.add("message");
        errorName.textContent += " This field needs to have between 3 and 20 characters";
    }
        
})

//Apellido

lastSignUp.onfocus = function () {
    errorLastName.classList.remove("message");
    errorLastName.classList.add("errors");
};


  lastSignUp.addEventListener('blur',function() {
    var name= lastSignUp.value;
    var lastNameValid = false;
    for (var i = 0; i < name.length; i++) {
        var carNumb = name.charCodeAt(i);
        if ((carNumb < 65 || carNumb > 90) && (carNumb < 97 || carNumb > 122) && carNumb !== 32) {
          lastNameValid=false;
        }else{
            lastNameValid=true;
        }
    }
    
    if(!lastNameValid){
        errorLastName.classList.remove("errors");
        errorLastName.classList.add("message");
        errorLastName.textContent=
        "This field should only contain letters"
    }

    if (name.length < 3 || name.length > 20) {
        errorLastName.classList.remove("errors");
        errorLastName.classList.add("message");
        errorLastName.textContent += " This field needs to have between 3 and 20 characters";
    }
        
})

//DNI

dniSignUp.onfocus = function () {
    errorDNI.classList.remove("message");
    errorDNI.classList.add("errors");
};


  dniSignUp.addEventListener('blur',function() {
    var dni= dniSignUp.value;
    var dniValid = false;
    
    for (let i = 0; i < dni.length; i++) {
        var charCode = dni.charCodeAt(i);
        if (charCode < 48 || charCode > 57) {
          dniValid = false;
        }else{
            dniValid=true;
        }
    }
    if (!dniValid || dni.length < 8) {
        errorDNI.classList.remove("errors");
        errorDNI.classList.add("message");
        errorDNI.textContent = "This field must only contain numbers and must have more than 7 digits";
    } 
        
})

//Telefono

phoneSignUp.onfocus = function () {
    errorPhone.classList.remove("message");
    errorPhone.classList.add("errors");
};


  phoneSignUp.addEventListener('blur',function() {
    var phone= phoneSignUp.value;
    var phoneValid = false;
    
    for (let i = 0; i < phone.length; i++) {
        var charCode = phone.charCodeAt(i);
        if (charCode < 48 || charCode > 57) {
          phoneValid = false;
        }else{
            phoneValid=true;
        }
    }

    if (!phoneValid || phone.length !== 10) {
        errorPhone.classList.remove("errors");
        errorPhone.classList.add("message");
        errorPhone.textContent = "This field must only contain numbers and must have exactly 10 digits";
    }
          
})

//Codigo postal

postalSignUp.onfocus = function () {
    errorCode.classList.remove("message");
    errorCode.classList.add("errors");
};


  postalSignUp.addEventListener('blur',function() {
    var postal= postalSignUp.value;
    var postalValid = false;
    
    for (let i = 0; i < postal.length; i++) {
        var charCode = postal.charCodeAt(i);
        if (charCode < 48 || charCode > 57) {
          postalValid = false;
        }else{
            postalValid=true;
        }
    }

    if (!postalValid || postal.length < 4 || postal.length > 5) {
        errorCode.classList.remove("errors");
        errorCode.classList.add("message");
        errorCode.textContent = "This field must only contain numbers and must have between 4 and 5 digits";
    }
          
})

}

