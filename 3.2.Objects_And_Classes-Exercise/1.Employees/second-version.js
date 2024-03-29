function parseEmployees(input) {
    let employees = {};
    for (const employee of input) {
        employees[employee] = employee.length;
    }

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
    }
}

parseEmployees(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
        ]
);

parseEmployees(
    [
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
        ]
);