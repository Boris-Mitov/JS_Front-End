function employees(names) {
    let employeesList = [];

    for (const name of names) {
        let personalNumber = name.length;

        let person = {
            name,
            personalNumber,
        }
        
        employeesList.push(person);
    }

    employeesList.forEach(
        (employee) => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`));    
}

employees(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
        ]
);

employees(
    [
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
        ]
);