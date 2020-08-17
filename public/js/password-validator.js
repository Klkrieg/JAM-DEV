const passwordValidator = require("password-validator");


let schema = new passwordValidator();

schema.is().min(8)              // Minimum length 8
    .is().max(50)               // Maximum length 100
    .has().uppercase(1)         // Must have uppercase letters
    .has().lowercase(1)         // Must have lowercase letters
    .has().digits(2)            // Must have at least 1 digits
    .has().symbols(1)           // Must have at least 1 symbol                    
    .has().not().spaces();

module.exports = schema;