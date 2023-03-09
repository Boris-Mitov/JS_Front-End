function solve(weekday, age) {
    let result;

    switch (weekday) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                result = '12$';
            } else if (age > 18 && age <= 64) {
                result = '18$';
            } else if (age > 64 && age <= 122) {
                result = "12$";
            } else {
                result = 'Error!';
            };
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                result = '15$';
            } else if (age > 18 && age <= 64) {
                result = '20$';
            } else if (age > 64 && age <= 122) {
                result = "15$";
            } else {
                result = 'Error!';
            };
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                result = '5$';
            } else if (age > 18 && age <= 64) {
                result = '12$';
            } else if (age > 64 && age <= 122) {
                result = "10$";
            } else {
                result = 'Error!';
            };
            break;
    }

    console.log(result);
}

solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);

function solve2(weekday, age) {
    let result;

    if (age >= 0 && age <= 18) {
        switch(weekday) {
            case 'Weekday': result = '12$';
            break;
            case 'Weekend': result = '15$';
            break;
            case 'Holiday': result = '5$';
            break;
        }
    } else if (age > 18 && age <= 64) {
        switch(weekday) {
            case 'Weekday': result = '18$';
            break;
            case 'Weekend': result = '20$';
            break;
            case 'Holiday': result = '12$';
            break;
        }
    } else if (age > 64 && age <= 122) {
        switch(weekday) {
            case 'Weekday': result = '12$';
            break;
            case 'Weekend': result = '15$';
            break;
            case 'Holiday': result = '10$';
            break;
        }
    } else {
        result = 'Error!';
    }

    console.log(result);
}

solve2('Weekday', 42);
solve2('Holiday', -12);
solve2('Holiday', 15);