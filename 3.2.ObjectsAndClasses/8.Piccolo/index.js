function piccolo(input) {
    let parkingLot = [];

    for (let car of input) {
        car = car.split(', ');
        if (car[0] === 'IN' && !parkingLot.includes(car[1])) {
            parkingLot.push(car[1]);
        } else if(car[0] === 'OUT' && parkingLot.includes(car[1])) {
            let carIndex = parkingLot.indexOf(car[1]);
            parkingLot.splice(carIndex, 1);
        }
    }

    if (parkingLot.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(parkingLot.sort((carA, carB) => carA.localeCompare(carB)).join('\n'));
    }
}


piccolo(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]
);

piccolo(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA'
    ]
);