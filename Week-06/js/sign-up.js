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

  passwordSignUp.addEventListener("blur", isPassWordValid);
  
  function isPassWordValid() {
    var password = passwordSignUp.value;
    var hasLetter = false;
    var hasNumber = false;
    for (var i = 0; i < password.length; i++) {
      var char = password.charAt(i);
      if (char >= "0" && char <= "9") {
        hasNumber = true;
      } else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        hasLetter = true;
      }
    }
    if (!hasLetter || !hasNumber) {
      errorPassword.classList.remove("errors");
      errorPassword.classList.add("message");
      errorPassword.textContent =
        "This field needs at least one letter, and at least one number \n";
    }
    if (password.length < 8 || password.length > 30) {
      errorPassword.classList.remove("errors");
      errorPassword.classList.add("message");
      errorPassword.textContent +=
        "This field needs to have between 8 and 30 characters \n";
    }

    return !(
      !hasLetter ||
      !hasNumber ||
      password.length < 8 ||
      password.length > 30
    );
  }

//Repeat Password

repeatSignUp.onfocus = function () {
    errorRepeat.classList.remove("message");
    errorRepeat.classList.add("errors");
  };

repeatSignUp.addEventListener("blur", isRepeatValid);

function isRepeatValid() {
    var repeat= repeatSignUp.value;
    if(repeat !== passwordSignUp.value){
        errorRepeat.classList.remove("errors");
        errorRepeat.classList.add("message");
        errorRepeat.textContent =
          "The passwords do not match \n";
    }
return !(
    repeat !== passwordSignUp.value
)
};

//Email

emailSignUp.onfocus = function () {
    errorEmail.classList.remove("message");
    errorEmail.classList.add("errors");
  };

emailSignUp.addEventListener("blur", isEmailValid);

function isEmailValid() {
    var email = emailSignUp.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailValid = emailExpression.test(email);

    if (!emailValid) {
      errorEmail.classList.remove("errors");
      errorEmail.classList.add("message");
      errorEmail.textContent = "The email format is not valid \n";
    }

    return emailValid;
  }




//Nombre

nameSignUp.onfocus = function () {
    errorName.classList.remove("message");
    errorName.classList.add("errors");
  };

  nameSignUp.addEventListener("blur", isNameValid);

  function isNameValid() {
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
        "This field should only contain letters \n"
    }

    if (name.length < 3 || name.length > 20) {
        errorName.classList.remove("errors");
        errorName.classList.add("message");
        errorName.textContent += " This field needs to have between 3 and 20 characters \n";
    }

    return !(
        !nameValid ||
        name.length < 3 ||
        name.length > 20
      );
        
}

//Apellido

lastSignUp.onfocus = function () {
    errorLastName.classList.remove("message");
    errorLastName.classList.add("errors");
};

lastSignUp.addEventListener("blur", isLastValid);

  function isLastValid() {
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
        "This field should only contain letters \n"
    }

    if (name.length < 3 || name.length > 20) {
        errorLastName.classList.remove("errors");
        errorLastName.classList.add("message");
        errorLastName.textContent += " This field needs to have between 3 and 20 characters \n";
    }
   
    return !(
        !lastNameValid ||
        name.length < 3 ||
        name.length > 20
      );     
}

//DNI

dniSignUp.onfocus = function () {
    errorDNI.classList.remove("message");
    errorDNI.classList.add("errors");
};

dniSignUp.addEventListener("blur", isDniValid);

function isDniValid() {
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
        errorDNI.textContent = "This field must only contain numbers and must have more than 7 digits \n";
    } 
    return !(
        !dniValid ||
        dni.length < 8
      ) ;       
}

//Telefono

phoneSignUp.onfocus = function () {
    errorPhone.classList.remove("message");
    errorPhone.classList.add("errors");
};

phoneSignUp.addEventListener("blur", isPhoneValid);

  function isPhoneValid() {
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
        errorPhone.textContent = "This field must only contain numbers and must have exactly 10 digits \n";
    }

    return !(
        !phoneValid ||
        phone.length !== 10
    ) ;       
}

//Codigo postal

postalSignUp.onfocus = function () {
    errorCode.classList.remove("message");
    errorCode.classList.add("errors");
};

postalSignUp.addEventListener("blur", isPostalValid);

function isPostalValid() {
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
        errorCode.textContent = "This field must only contain numbers and must have between 4 and 5 digits \n";
    }
    return !(
        !postalValid ||
        postal.length < 4||
        postal.length > 5
    ) ;        
}

//Direccion
addressSignUp.onfocus = function () {
    errorAddress.classList.remove("message");
    errorAddress.classList.add("errors");
  };

addressSignUp.addEventListener("blur", isAddressValid);

function isAddressValid() {
    var address= addressSignUp.value;
    var hasLetter = false;
    var hasNumber = false;
    var hasSpace=false;
    for (var i = 0; i < address.length; i++) {
        var char = address.charAt(i);
            if (char >= "0" && char <= "9") {
            hasNumber = true;
        } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            hasLetter=true;   
        } else if (char === ' ') {
            hasSpace = true;
        }
    }
    if (!hasLetter || !hasNumber || !hasSpace) {
        errorAddress.classList.remove("errors");
        errorAddress.classList.add("message");
        errorAddress.textContent =
          "This field must have letters, numbers, and a space in between.\n";
    }

    if (address.length < 5 ) {
        errorAddress.classList.remove("errors");
        errorAddress.classList.add("message");
        errorAddress.textContent += " This field must have at least 5 characters\n";
    }
    return !(
        !hasLetter ||
         !hasNumber ||
        !hasSpace ||
        address.length < 5 
    ) ;       
}

//Localidad

citySignUp.onfocus = function () {
    errorCity.classList.remove("message");
    errorCity.classList.add("errors");
  };

citySignUp.addEventListener("blur", isCityValid);

function isCityValid() {
    var city= citySignUp.value;
    var cityValid = true;
    for (var i = 0; i < city.length; i++) {
        var carNumb = city.charCodeAt(i);
        if ((carNumb >= 33 && carNumb <= 47) || (carNumb >= 58 && carNumb <= 64) || (carNumb >= 91 && carNumb <= 96) || (carNumb >= 123 && carNumb <= 126)) {
          cityValid=false;
        }
    }
    
    if(!cityValid){
        errorCity.classList.remove("errors");
        errorCity.classList.add("message");
        errorCity.textContent=
        "This field should only contain letters and numbers\n"
    }

    if (city.length < 3 ) {
        errorCity.classList.remove("errors");
        errorCity.classList.add("message");
        errorCity.textContent += " This field must have more than three characters \n";
    }
    return !(
        !cityValid ||
        city.length < 3 
    ) ;      
}

}

