window.onload = function () {
  //input variables
  var emailSignUp = document.getElementById('emailSignUp');
  var nameSignUp = document.getElementById('nameSignUp');
  var passwordSignUp = document.getElementById('passwordSignUp');
  var lastSignUp = document.getElementById('lastSignUp');
  var dniSignUp = document.getElementById('dniSignup');
  var phoneSignUp = document.getElementById('phoneSignUp');
  var citySignUp = document.getElementById('citySignUp');
  var addressSignUp = document.getElementById('addressSignUp');
  var postalSignUp = document.getElementById('postalSignUp');
  var dateSignUp = document.getElementById('dateSignUp');
  var repeatSignUp = document.getElementById('repeatSignUp');

  //span variables
  var errorEmail = document.getElementById('errorEmail');
  var errorPassword = document.getElementById('errorPassword');
  var errorName = document.getElementById('errorName');
  var errorLastName = document.getElementById('errorLastName');
  var errorDNI = document.getElementById('errorDNI');
  var errorPhone = document.getElementById('errorPhone');
  var errorCity = document.getElementById('errorCity');
  var errorAddress = document.getElementById('errorAddress');
  var errorCode = document.getElementById('errorCode');
  var errorDate = document.getElementById('errorDate');
  var errorRepeat = document.getElementById('errorRepeat');

  //button
  var button = document.getElementById("buttonSU");

  //Password validation and events
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

  //Repeat password validation and events
  repeatSignUp.onfocus = function () {
    errorRepeat.classList.remove("message");
    errorRepeat.classList.add("errors");
  };

  repeatSignUp.addEventListener("blur", isRepeatValid);

  function isRepeatValid() {
    var repeat = repeatSignUp.value;
    if (repeat !== passwordSignUp.value) {
      errorRepeat.classList.remove("errors");
      errorRepeat.classList.add("message");
      errorRepeat.textContent =
        "The passwords do not match \n";
    }
    return !(
      repeat !== passwordSignUp.value
    )
  };

  //Email validation and events
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

  //Name validation and events
  nameSignUp.onfocus = function () {
    errorName.classList.remove("message");
    errorName.classList.add("errors");
  };

  nameSignUp.addEventListener("blur", isNameValid);

  function isNameValid() {
    var name = nameSignUp.value;
    var nameValid = false;
    for (var i = 0; i < name.length; i++) {
      var carNumb = name.charCodeAt(i);
      if ((carNumb < 65 || carNumb > 90) && (carNumb < 97 || carNumb > 122) && carNumb !== 32) {
        nameValid = false;
      } else {
        nameValid = true;
      }
    }

    if (!nameValid) {
      errorName.classList.remove("errors");
      errorName.classList.add("message");
      errorName.textContent =
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

  //Last name validation and events
  lastSignUp.onfocus = function () {
    errorLastName.classList.remove("message");
    errorLastName.classList.add("errors");
  };

  lastSignUp.addEventListener("blur", isLastValid);

  function isLastValid() {
    var name = lastSignUp.value;
    var lastNameValid = false;
    for (var i = 0; i < name.length; i++) {
      var carNumb = name.charCodeAt(i);
      if ((carNumb < 65 || carNumb > 90) && (carNumb < 97 || carNumb > 122) && carNumb !== 32) {
        lastNameValid = false;
      } else {
        lastNameValid = true;
      }
    }

    if (!lastNameValid) {
      errorLastName.classList.remove("errors");
      errorLastName.classList.add("message");
      errorLastName.textContent =
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

  //DNI validation and events
  dniSignUp.onfocus = function () {
    errorDNI.classList.remove("message");
    errorDNI.classList.add("errors");
  };

  dniSignUp.addEventListener("blur", isDniValid);

  function isDniValid() {
    var dni = dniSignUp.value;
    var dniValid = false;

    for (let i = 0; i < dni.length; i++) {
      var charCode = dni.charCodeAt(i);
      if (charCode < 48 || charCode > 57) {
        dniValid = false;
      } else {
        dniValid = true;
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
    );
  }

  //Phone validation and events
  phoneSignUp.onfocus = function () {
    errorPhone.classList.remove("message");
    errorPhone.classList.add("errors");
  };

  phoneSignUp.addEventListener("blur", isPhoneValid);

  function isPhoneValid() {
    var phone = phoneSignUp.value;
    var phoneValid = false;

    for (let i = 0; i < phone.length; i++) {
      var charCode = phone.charCodeAt(i);
      if (charCode < 48 || charCode > 57) {
        phoneValid = false;
      } else {
        phoneValid = true;
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
    );
  }

  //Zip code validation and events
  postalSignUp.onfocus = function () {
    errorCode.classList.remove("message");
    errorCode.classList.add("errors");
  };

  postalSignUp.addEventListener("blur", isPostalValid);

  function isPostalValid() {
    var postal = postalSignUp.value;
    var postalValid = false;

    for (let i = 0; i < postal.length; i++) {
      var charCode = postal.charCodeAt(i);
      if (charCode < 48 || charCode > 57) {
        postalValid = false;
      } else {
        postalValid = true;
      }
    }

    if (!postalValid || postal.length < 4 || postal.length > 5) {
      errorCode.classList.remove("errors");
      errorCode.classList.add("message");
      errorCode.textContent = "This field must only contain numbers and must have between 4 and 5 digits \n";
    }
    return !(
      !postalValid ||
      postal.length < 4 ||
      postal.length > 5
    );
  }

  //Address validation and events
  addressSignUp.onfocus = function () {
    errorAddress.classList.remove("message");
    errorAddress.classList.add("errors");
  };

  addressSignUp.addEventListener("blur", isAddressValid);

  function isAddressValid() {
    var address = addressSignUp.value;
    var hasLetter = false;
    var hasNumber = false;
    var hasSpace = false;
    for (var i = 0; i < address.length; i++) {
      var char = address.charAt(i);
      if (char >= "0" && char <= "9") {
        hasNumber = true;
      } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        hasLetter = true;
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

    if (address.length < 5) {
      errorAddress.classList.remove("errors");
      errorAddress.classList.add("message");
      errorAddress.textContent += " This field must have at least 5 characters\n";
    }
    return !(
      !hasLetter ||
      !hasNumber ||
      !hasSpace ||
      address.length < 5
    );
  }

  //City validation and events
  citySignUp.onfocus = function () {
    errorCity.classList.remove("message");
    errorCity.classList.add("errors");
  };

  citySignUp.addEventListener("blur", isCityValid);

  function isCityValid() {
    var city = citySignUp.value;
    var cityValid = true;
    for (var i = 0; i < city.length; i++) {
      var carNumb = city.charCodeAt(i);
      if ((carNumb >= 33 && carNumb <= 47) || (carNumb >= 58 && carNumb <= 64) || (carNumb >= 91 && carNumb <= 96) || (carNumb >= 123 && carNumb <= 126)) {
        cityValid = false;
      }
    }

    if (!cityValid) {
      errorCity.classList.remove("errors");
      errorCity.classList.add("message");
      errorCity.textContent =
        "This field should only contain letters and numbers\n"
    }

    if (city.length < 3) {
      errorCity.classList.remove("errors");
      errorCity.classList.add("message");
      errorCity.textContent += "This field must have more than three characters \n";
    }
    return !(
      !cityValid ||
      city.length < 3
    );
  }

  //Date of birth validation and events 
  dateSignUp.onfocus = function () {
    errorDate.classList.remove("message");
    errorDate.classList.add("errors");
  };

  dateSignUp.addEventListener("blur", isDateValid);


  function isDateValid() {
    var birthDate = new Date(dateSignUp.value);
    var currentDate = new Date();
    var minAge = 15;
    var dateFormatValid = true;
    var olderThanFifteen = true;
    if (isNaN(birthDate) || birthDate >= currentDate) {
      dateFormatValid = false;
      errorDate.classList.remove("errors");
      errorDate.classList.add("message");
      errorDate.textContent =
        "The date format is invalid\n"
    }
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < minAge) {
      olderThanFifteen = false;
      errorDate.classList.remove("errors");
      errorDate.classList.add("message");
      errorDate.textContent =
        " You should be older than 15 to register\n"
    }
    return !(
      !dateFormatValid ||
      !olderThanFifteen
    );
  }

  function dateConverter(date) {
    var inputDate = new Date(date);
    var month = inputDate.getMonth();
    month++;
    if (month < 10) {
      month = '0' + month;
    }
    month = month.toString();
    var day = inputDate.getDate();
    day++;
    if (day < 10) {
      day = '0' + day;
    }
    day = day.toString();
    var year = inputDate.getFullYear().toString();
    date = month + '/' + day + '/' + year;
    return date;
  }

  //Button events
  button.addEventListener("click", function () {

    if (isEmailValid() && isPassWordValid() && isRepeatValid() && isAddressValid() && isCityValid()
      && isDniValid() && isLastValid() && isNameValid() && isPhoneValid() && isPostalValid() && isDateValid) {
      alert((`Name: ${nameSignUp.value} Last Name: ${lastSignUp.value} Dni: ${dniSignUp.value}
      Phone number: ${phoneSignUp.value} City: ${citySignUp.value} Address: ${addressSignUp.value}
      Zip code: ${postalSignUp.value} 
      Date: ${dateSignUp.value}
      Email: ${emailSignUp.value} Password: ${passwordSignUp.value}
      Repeat password: ${repeatSignUp.value} `));
    } else {
      var errors = errorEmail.textContent + errorPassword.textContent + errorAddress.textContent
        + errorCity.textContent + errorCode.textContent + errorRepeat.textContent + errorDNI.textContent
        + errorLastName.textContent + errorName.textContent + errorPhone.textContent;
      alert(errors);
    }

    var name = nameSignUp.value;
    var lastName = lastSignUp.value;
    var dni = dniSignUp.value;
    var dob = dateConverter(dateSignUp.value);
    var phone = phoneSignUp.value;
    var address = addressSignUp.value;
    var city = citySignUp.value;
    var zip = postalSignUp.value;
    var email = emailSignUp.value;
    var password = passwordSignUp.value;
    var url = 'https://api-rest-server.vercel.app/signup'
    var params = `?name=${name}&lastName=${lastName}&dni=${dni}&dob=${dob}&phone=${phone}&address=${address}&city=${city}&zip=${zip}&email=${email}&password=${password}`

    fetch(url + params, {
      method: 'GET',
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        if (data.success === false) {
          throw data.msg;
        }
        localStorage.setItem("userData", JSON.stringify(data.data));
        alert(`The request was successful ${data.msg}`);
      })
      .catch((error) => {
        alert(`Error: ${error}`)
      });

    var userData = localStorage.getItem("userData");
    console.log("userData", userData);
    if (!!userData) {
      var parsedUserData = JSON.parse(userData);
      console.log("parseduserdata", parsedUserData);
      nameSignUp.value = parsedUserData.name;
      lastName.value = parsedUserData.lastName;
      dateSignUp.value = parsedUserData.dob;
      phoneSignUp.value = parsedUserData.phone;
      addressSignUp.value= parsedUserData.address;
      citySignUp.value= parsedUserData.city;
      postalSignUp.value = parsedUserData.zip;
      emailSignUp.value = parsedUserData.email;
      passwordSignUp.value = parsedUserData.password;
    }

  });
}