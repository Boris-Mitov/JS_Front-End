function phoneBookParser(personContact) {
    let phoneBook = {};
    for (const personString of personContact) {
        let [ name, phone] = personString.split(' ');

        phoneBook[name] = phone;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}


phoneBookParser(
    ['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344']
);

phoneBookParser(
    ['George 0552554',
        'Peter 087587',
        'George 0453112',
        'Bill 0845344']
);