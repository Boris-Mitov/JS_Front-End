function solve(groupSize, groupType, dayOfWeek) {
    let result = 0;
    if(groupType === 'Students') {
        switch (dayOfWeek) {
            case 'Friday': result = 8.45 * groupSize;
            break;
            case 'Saturday': result = 9.80 * groupSize;
            break;
            case 'Sunday': result = 10.46 * groupSize;
            break;
        }
        if(groupSize >= 30) {
            result = result * 0.85;
        }
    } else if ((groupType === 'Business')){
        if(groupSize >= 100) {
            groupSize -= 10;
        }
        switch (dayOfWeek) {
            case 'Friday': result = 10.90 * groupSize;
            break;
            case 'Saturday': result = 15.60 * groupSize;
            break;
            case 'Sunday': result = 16 * groupSize;
            break;
        }
    } else if (groupType === 'Regular'){
        switch (dayOfWeek) {
            case 'Friday': result = 15 * groupSize;
            break;
            case 'Saturday': result = 20 * groupSize;
            break;
            case 'Sunday': result = 22.50 * groupSize;
            break;
        }
        if(groupSize >= 10 && groupSize <= 20) {
            result = result * 0.95;
        }
    }
    console.log('Total price: ' + result.toFixed(2));
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");