(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  error: {
    length: 'Length should be a valid positive number',
    password: 'Password should be a valid string'
  },
  regex: {
    digits: '(\\d.*)',
    letters: '([a-zA-Z].*)',
    symbols: '([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\\{\\}\\]\\\\\|;:\\\'",<.>\\/\\?€£¥₹§±].*)',
    spaces: '([\\s].*)'
  }
};

},{}],2:[function(require,module,exports){
var lib = require('./lib');
var error = require('./constants').error;

/**
 * Validates that a number is a valid length (positive number)
 *
 * @private
 * @param {number} num - Number to validate
 */
function _validateLength(num) {
  const len = Number(num);
  if (isNaN(len) || !Number.isInteger(len) || len < 1) {
    throw new Error(error.length);
  }
}

/**
 * Tests a validation and return the result
 *
 * @private
 * @param {string} property - Property to validate
 * @return {boolean} Boolean value indicting the validity
 *           of the password against the property
 */
function _isPasswordValidFor(property) {
  return lib[property.method].apply(this, property.arguments);
}

/**
 * Registers the properties of a password-validation schema object
 *
 * @private
 * @param {string} func - Property name
 * @param {array} args - arguments for the func property
 */
function _register(func, args) {
  // Add property to the schema
  this.properties.push({ method: func, arguments: args });
  return this;
}

class PasswordValidator {
  /**
   * Creates a password-validator schema
   *
   * @constructor
   */
  constructor() {
    this.properties = [];
  }

  /**
   * Method to validate the password against schema
   *
   * @param {string} pwd - password to valdiate
   * @param {object} options - optional options to configure validation
   * @param {boolean} [options.list] - asks for a list of validation
   *           failures instead of just true/false
   * @return {boolean|array} Boolean value indicting the validity
   *           of the password as per schema, if 'options.list'
   *           is not set. Otherwise, it returns an array of
   *           property names which failed validations
   */
  validate(pwd, options) {
    this.list = Boolean(options && options.list);
    this.password = String(pwd);

    this.positive = true;

    if (this.list) {
      return this.properties.reduce((errorList, property) => {
        // Applies all validations defined in lib one by one
        if (!_isPasswordValidFor.call(this, property)) {
          // If the validation for a property fails,
          // add it to the error list
          return errorList.concat(property.method);
        }
        return errorList;
      }, []);
    }
    return this.properties.every(_isPasswordValidFor.bind(this));
  }

  /**
   * Rule to mandate the presence of letters in the password
   *
   * @param {number} [count] - minimum number of letters required
   */
  letters(count) {
    count && _validateLength(count);
    return _register.call(this, 'letters', arguments);
  }

  /**
   * Rule to mandate the presence of digits in the password
   *
   * @param {number} [count] - minimum number of digits required
   */
  digits(count) {
    count && _validateLength(count);
    return _register.call(this, 'digits', arguments);
  }

  /**
   * Rule to mandate the presence of symbols in the password
   *
   * @param {number} [count] - minimum number of symbols required
   */
  symbols(count) {
    count && _validateLength(count);
    return _register.call(this, 'symbols', arguments);
  }

  /**
   * Rule to specify a minimum length of the password
   *
   * @param {number} num - minimum length
   */
  min(num) {
    _validateLength(num);
    return _register.call(this, 'min', arguments);
  }

  /**
   * Rule to specify a maximum length of the password
   *
   * @param {number} num - maximum length
   */
  max(num) {
    _validateLength(num);
    return _register.call(this, 'max', arguments);
  }

  /**
   * Rule to mandate the presence of lowercase letters in the password
   *
   * @param {number} [count] - minimum number of lowercase letters required
   */
  lowercase(count) {
    count && _validateLength(count);
    return _register.call(this, 'lowercase', arguments);
  }

  /**
   * Rule to mandate the presence of uppercase letters in the password
   *
   * @param {number} [count] - minimum number of uppercase letters required
   */
  uppercase(count) {
    count && _validateLength(count);
    return _register.call(this, 'uppercase', arguments);
  }

  /**
   * Rule to mandate the presence of space in the password
   * It can be used along with 'not' to not allow spaces
   * in the password
   *
   * @param {number} [count] - minimum number of spaces required
   */
  spaces(count) {
    count && _validateLength(count);
    return _register.call(this, 'spaces', arguments);
  }

  /**
   * Rule to invert the effects of 'not'
   * Apart from that, 'has' is also used
   * to make the api readable and chainable
   */
  has() {
    return _register.call(this, 'has', arguments);
  }

  /**
   * Rule to invert the next applied rules.
   * All the rules applied after 'not' will have opposite effect,
   * until 'has' rule is applied
   */
  not() {
    return _register.call(this, 'not', arguments);
  }

  /**
   * Rule to invert the effects of 'not'
   * Apart from that, 'is' is also used
   * to make the api readable and chainable
   */
  is() {
    return _register.call(this, 'is', arguments);
  }

  /**
   * Rule to whitelist words to be used as password
   *
   * @param {array} list - list of values allowed
   */
  oneOf() {
    return _register.call(this, 'oneOf', arguments);
  }
}

module.exports = PasswordValidator;

},{"./constants":1,"./lib":3}],3:[function(require,module,exports){
/**
 * Generic method to test regex
 *
 * @private
 * @param {string} regex - regex to test
 *                           with password
 */
var regex = require('./constants').regex;

function _process(regexp, repeat) {
  if (repeat && repeat > 1) {
    const parsedRepeat = parseInt(repeat, 10);
    return new RegExp(regexp + '{' + parsedRepeat + ',}').test(this.password) === this.positive;
  }
  return new RegExp(regexp).test(this.password) === this.positive;
}

module.exports = {

  /**
   * Method to invert the next validations
   *
   * @param {RegExp} [symbol] - custom Regex which should not be present
   */
  not: function not(symbol) {
    this.positive = false;
    if (symbol) {
      return _process.call(this, symbol);
    }
    return true;
  },

  /**
   * Method to invert the effects of not()
   *
   * @param {RegExp} [symbol] - custom Regex which should be present
   */
  has: function has(symbol) {
    this.positive = true;
    if (symbol) {
      return _process.call(this, symbol);
    }
    return true;
  },

  /**
   * Method to invert the effects of not() and
   * to make the api readable and chainable
   *
   */
  is: function is() {
    this.positive = true;
    return true;
  },

  /**
   * Method to specify a minimum length
   *
   * @param {number} num - minimum length
   */
  min: function min(num) {
    return this.password.length >= num;
  },

  /**
   * Method to specify a maximum length
   *
   * @param {number} num - maximum length
   */
  max: function max(num) {
    return this.password.length <= num;
  },

  /**
   * Method to validate the presence of digits
   *
   * @param {number} repeat - count of required digits
   */
  digits: function digits(repeat) {
    return _process.call(this, regex.digits, repeat);
  },

  /**
   * Method to validate the presence of letters
   *
   * @param {number} repeat - count of required letters
   */
  letters: function letters(repeat) {
    return _process.call(this, regex.letters, repeat);
  },

  /**
   * Method to validate the presence of uppercase letters
   *
   * @param {number} repeat - count of required uppercase letters
   */
  uppercase: function uppercase(repeat) {
    if (repeat && repeat > 1) {
      let characterIndex = 0;
      let upperCaseLetters = 0;

      while ((upperCaseLetters < repeat) && (characterIndex < this.password.length)) {
        const currentLetter = this.password.charAt(characterIndex);
        if (currentLetter !== currentLetter.toLowerCase()) {
          upperCaseLetters++;
        }
        characterIndex++;
      }

      return (upperCaseLetters === repeat) === this.positive;
    }
    return (this.password !== this.password.toLowerCase()) === this.positive;
  },

  /**
   * Method to validate the presence of lowercase letters
   *
   * @param {number} repeat - count of required lowercase letters
   */
  lowercase: function lowercase(repeat) {
    if (repeat && repeat > 1) {
      let characterIndex = 0;
      let lowerCaseLetters = 0;

      while ((lowerCaseLetters < repeat) && (characterIndex < this.password.length)) {
        const currentLetter = this.password.charAt(characterIndex);
        if (currentLetter !== currentLetter.toUpperCase()) {
          lowerCaseLetters++;
        }
        characterIndex++;
      }

      return (lowerCaseLetters === repeat) === this.positive;
    }
    return (this.password !== this.password.toUpperCase()) === this.positive;
  },

  /**
   * Method to validate the presence of symbols
   *
   * @param {number} repeat - count of required symbols
   */
  symbols: function symbols(repeat) {
    return _process.call(this, regex.symbols, repeat);
  },

  /**
   * Method to validate the presence of space
   *
   * @param {number} repeat - count of required spaces
   */
  spaces: function spaces(repeat) {
    return _process.call(this, regex.spaces, repeat);
  },

  /**
   * Method to provide pre-defined values for password
   *
   * @param {array} list - list of values allowed
   */
  oneOf: function oneOf(list) {
    return list.indexOf(this.password) >= 0 === this.positive;
  }
};

},{"./constants":1}],4:[function(require,module,exports){
const passwordValidator = require("password-validator");

var subscribe = document.querySelector(".footer-form");
var formHeader = document.querySelector("#form-tagline");
var subscribeButton = document.querySelector("#subscribeButton");

//Mailchimp Subscribe Call and Form handling///
subscribe.addEventListener("submit", function (event) {
  event.preventDefault();

  var fName = document.querySelector("#fName").value;
  var lName = document.querySelector("#lName").value;
  var email = document.querySelector("#email").value;

  const data = {
    firstName: fName,
    lastName: lName,
    email: email,
  };

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  fetch("/api/subscription", options)
    .then((res) => {
      if (res.status == 200) {
        subscribe.reset();
        formHeader.innerText = "Thanks for subscribing";
        subscribeButton.setAttribute("value", "Thanks!");
      }
      console.log(res);
      res.json();
    })
    // .then(data=>console.log(data))
    .catch((err) => {
      console.log("Error:", err);
    });
});

//USER SIGN-UP FORM HANDLING AND API POST CALL
///////////

//password field validator
///////////
let passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(50) // Maximum length 100
  .has()
  .uppercase(1) // Must have uppercase letters
  .has()
  .lowercase(1) // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 1 digits
  .has()
  .symbols(1) // Must have at least 1 symbol
  .has()
  .not()
  .spaces();

const validatePassword = () => {
  let pswrd = document.getElementById("sign-up-password").value;
  console.log(pswrd);
  console.log(passwordSchema.validate(pswrd, { list: true }));
};
let signUpConfirmPassword = document.getElementById("sign-up-password");

signUpConfirmPassword.addEventListener("input", validatePassword);

/////Form listener
const signUpForm = document.getElementById("sign-up-form");

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const signUpEmail = document.getElementById("sign-up-email").value;
  const signUpfName = document.getElementById("sign-up-fName").value;
  const signUplName = document.getElementById("sign-up-lName").value;
  const signUpPassword = document.getElementById("sign-up-password").value;
  const signUpErr = document.getElementById("sign-up-err-msg");

  const signUpBirthday = document.getElementById("sign-up-birthday").value;
  const signUpPhoneNumber = document.getElementById("sign-up-phoneNumber")
    .value;
  const signUpProfileType = document.getElementById("sign-up-profileType")
    .value;

  let signUpData = {
    email: signUpEmail,
    password: signUpPassword,
    firstName: signUpfName,
    lastName: signUplName,
    birthday: signUpBirthday,
    phoneNumber: signUpPhoneNumber,
    profileType: signUpProfileType,
  };

  ///DECLARE OPTIONS FOR POST
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(signUpData),
  };
  ///////SEND POST REQUEST TO API
  fetch("/api/users", options)
    .then((res, req) => {
      if (res.status == 409) {
        console.log("User already exists");
        signUpErr.style.display = "block";
      } else if (res.status == 200) {
        signUpForm.reset();
        closeModal();
      }
      //res.json();
    })
    // .then(data=>console.log(data))
    .catch((err) => {
      console.error("Error:", err);
    });
});

//SIGNIN FORM HANDLING///////////////////////////
const signInForm = document.getElementById("sign-in-form");
signInForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //DOC SELECTORS
  const signInEmail = document.getElementById("sign-in-email").value;
  const signInPassword = document.getElementById("sign-in-password").value;

  let signInData = {
    email: signInEmail,
    password: signInPassword,
  };

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(signInData),
  };

  fetch("/api/users/login", options)
    .then((res, req) => {
      console.log(req);
      console.log(res);
      if (res.status == 200) {
        signInForm.reset();
        closeModal();
      }
      //res.json();
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

/////////DECLARE DOCUMENT SELECTORS////////

const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");
const signUpWrapper = document.getElementById("sign-up__modal-wrapper");
const signInWrapper = document.getElementById("sign-in__modal-wrapper");
const toSignIn = document.getElementById("switch-to-sign-in");
const toSignUp = document.getElementById("switch-to-sign-up");
const signUpErr = document.getElementById("sign-up-err-msg");

////////////ADD EVENTLISTENERS FOR MODAL DISPLAY////////////

signInBtn.addEventListener("click", modalDisplay);
signUpBtn.addEventListener("click", modalDisplay);
toSignIn.addEventListener("click", modalSwitch);
toSignUp.addEventListener("click", modalSwitch);
//////////////MODAL FUNCTIONALITY/////////////
function closeModal() {
  signUpForm.reset();
  signUpErr.style.display = "none";
  signUpWrapper.style.display = "none";
  signInWrapper.style.display = "none";
}

function modalSwitch({ target }) {
  if (target.id === "switch-to-sign-in") {
    closeModal();
    signInWrapper.style.display = "block";
  } else {
    closeModal();
    signUpWrapper.style.display = "block";
  }
}
function modalDisplay({ target }) {
  target.id === "sign-in-btn"
    ? (signInWrapper.style.display = "block")
    : (signUpWrapper.style.display = "block");
  document.body.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

window.addEventListener("click", (e) => {
  if (
    e.target.id === "sign-up__modal-wrapper" ||
    e.target.id === "sign-in__modal-wrapper"
  ) {
    closeModal();
  } else if (
    e.target.id === "sign-up-close" ||
    e.target.id === "sign-in-close"
  ) {
    closeModal();
  }
});

//////////

},{"password-validator":2}]},{},[4]);
