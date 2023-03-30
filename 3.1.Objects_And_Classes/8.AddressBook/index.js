function addressBook(input) {
    let namesAndAddresses = {};

    for (const person of input) {
        let info = person.split(':');
        namesAndAddresses[info[0]] = info[1];
    }

    let entries = Object.entries(namesAndAddresses);
    let sortByName = entries.sort((p1, p2) => {
        return p1[0].localeCompare(p2[0])
    });

    for (const [name, address] of sortByName) {
        console.log(`${name} -> ${address}`);
    }
};

addressBook(
    ['Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd']
);

addressBook(
    ['Bob:Huxley Rd',
        'John:Milwaukee Crossing',
        'Peter:Fordem Ave',
        'Bob:Redwing Ave',
        'George:Mesta Crossing',
        'Ted:Gateway Way',
        'Bill:Gateway Way',
        'John:Grover Rd',
        'Peter:Huxley Rd',
        'Jeff:Gateway Way',
        'Jeff:Huxley Rd']
);