const checkPasswordStrength = (req, res, next) => {
    try {
        // grab the password
        // go over each character and find out it it's uppercase/lower/number/etc
        // compare against require rules (at least one upper and one special character)
        // if it pass, let it go through
        // if it doesn't pass throw an erro
        const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const symbols = '!@#$%^&*()_+-=[]{};\\:"|,.<>/?';
        let hasUppercase = false;
        let hasSymbol = false;
        const password = req.body.password;
        for (let i = 0; i < password.length; i++) {
            // check if character is either uppercase or a symbol
            if (uppercaseLetters.includes(password[i])) {
                hasUppercase = true;
            }
            if (symbols.includes(password[i])) {
                hasSymbol = true;
            }
        }
        // if it pass let it go through
        if (hasUppercase && hasSymbol) {
            next();
        }
        // if it doesn't pass throw an error
        else {
            throw new Error("Password must contain at least one uppercase character and one special character.")
        }
    } catch (error) {
        next(error);
    }
}

module.exports = checkPasswordStrength;