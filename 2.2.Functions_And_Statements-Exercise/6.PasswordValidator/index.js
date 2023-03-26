function passwordValidator(password) {
    const regexLettersAndDigits = new RegExp("^[a-zA-Z0-9]+$");
    const regexAtLeastTwoDigits = new RegExp("\w*[0-9]+\w*[0-9]+\w*"); 

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!regexLettersAndDigits.test(password)) {
        console.log('Password must consist only of letters and digits');
    }
    
    if (!regexAtLeastTwoDigits.test(password)) {
        console.log('Password must have at least 2 digits');
    }

    if ((password.length >= 6 && password.length <= 10) && 
            regexLettersAndDigits.test(password) &&
            regexAtLeastTwoDigits.test(password)) {
                console.log('Password is valid')
            }

}

// passwordValidator(
//     'logIn'
// );

passwordValidator(
    'MyPass123'
);

// passwordValidator(
//     'Pa$s$s'
// );