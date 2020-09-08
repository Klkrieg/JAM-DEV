import * as passwordValidator from "password-validator";
export default function validator(password) {
	//password field validator
	///////////

	let passwordSchema = new passwordValidator();

	passwordSchema
		.is()
		.min(8) // Minimum length 8
		.is()
		.max(50) // Maximum length 50
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

	return passwordSchema.validate(password, { list: true });
}
