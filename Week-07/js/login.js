window.onload = function () {
  var formLogIn = document.getElementById("formLogIn");

  //variables de input
  var emailLogIn = document.getElementById("emailLogIn");
  var passwordLogIn = document.getElementById("passwordLogIn");

  //variables span

  var errorEmail = document.getElementById("errorEmail");
  var errorPassword = document.getElementById("errorPassword");

  //boton
  var button = document.getElementById("button");

  passwordLogIn.onfocus = function () {
    errorPassword.classList.remove("message");
    errorPassword.classList.add("errors");
  };

  passwordLogIn.addEventListener("blur", isPassWordValid);

  function isPassWordValid() {
    var password = passwordLogIn.value;
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
        "This field needs to have between 8 and 30 characters";
    }

    return !(
      !hasLetter ||
      !hasNumber ||
      password.length < 8 ||
      password.length > 30
    );
  }

  function isEmailValid() {
    var email = emailLogIn.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailValid = emailExpression.test(email);

    if (!emailValid) {
      errorEmail.classList.remove("errors");
      errorEmail.classList.add("message");
      errorEmail.textContent = "The email format is not valid \n";
    }

    return emailValid;
  }

  

  button.addEventListener("click", function () {
    if (isEmailValid() && isPassWordValid()) {
      var email = emailLogIn.value;
      var password = passwordLogIn.value;
      alert(`Email: ${emailLogIn.value} Password: ${passwordLogIn.value}`);
      var url='https://api-rest-server.vercel.app/login'+email
    } else {
      var errors = errorEmail.textContent + errorPassword.textContent;
      alert(errors);
    }
  });

  emailLogIn.onfocus = function () {
    errorEmail.classList.remove("message");
    errorEmail.classList.add("errors");
  };

  emailLogIn.addEventListener("blur", isEmailValid);

  //
};
