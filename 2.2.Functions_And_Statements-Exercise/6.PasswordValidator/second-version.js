function passwordValidator(password) {
    const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;
    const isOnlyLettersAndDigits = (pass) => /^[a-zA-Z0-9]+$/g.test(pass);
    const isAtLeastTwoDigits = (pass) => /\w*\d+\w*\d+\w*/g.test(pass);

    let passIsValid = true;

    if (!isValidLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        passIsValid = false;
    }

    if (!isOnlyLettersAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
        passIsValid = false;
    }
    
    if (!isAtLeastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
        passIsValid = false;
    }

    if (passIsValid) {
        console.log('Password is valid')
    }

}

// passwordValidator(
//     'logIn'
// );

// passwordValidator(
//     'MyPass123'
// );

passwordValidator(
    'Pa$s$s'
);