function phoneBookManipulation(personContact) {
    let phoneBook = {};
    for (const personString of personContact) {
        let info = personString.split(' ');
        let name = info[0];
        let phone = info[1];

        phoneBook[name] = phone;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}


phoneBookManipulation(
    ['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344']
);

phoneBookManipulation(
    ['George 0552554',
        'Peter 087587',
        'George 0453112',
        'Bill 0845344']
);