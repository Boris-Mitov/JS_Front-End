function roadRadar(currentSpeed, area) {
    let speedLimit = 0;
    let speedDifferece = 0;
    let status = ``;

    

    switch (area) {
        case 'motorway': 
            speedLimit = 130;
        if (currentSpeed > speedLimit) {
            speedDifferece = currentSpeed - speedLimit;
            if (speedDifferece <= 20) {
                status = `speeding`;
            } else if(speedDifferece <= 40) {
                status = `excessive speeding`;
            } else {
                status = `reckless driving`;
            }
        };
        break;
        case 'interstate':
            speedLimit = 90;
            if (currentSpeed > speedLimit) {
                speedDifferece = currentSpeed - speedLimit;
                if (speedDifferece <= 20) {
                    status = `speeding`;
                } else if(speedDifferece <= 40) {
                    status = `excessive speeding`;
                } else {
                    status = `reckless driving`;
                }
            };
        break;
        case 'city':
            speedLimit = 50;
            if (currentSpeed > speedLimit) {
                speedDifferece = currentSpeed - speedLimit;
                if (speedDifferece <= 20) {
                    status = `speeding`;
                } else if(speedDifferece <= 40) {
                    status = `excessive speeding`;
                } else {
                    status = `reckless driving`;
                }
            };
        break;
        case 'residential':
            speedLimit = 20;
            if (currentSpeed > speedLimit) {
                speedDifferece = currentSpeed - speedLimit;
                if (speedDifferece <= 20) {
                    status = `speeding`;
                } else if(speedDifferece <= 40) {
                    status = `excessive speeding`;
                } else {
                    status = `reckless driving`;
                }
            };
        break;
    }

    let result = ``;

    if (speedDifferece === 0) {
        result = `Driving ${currentSpeed} km/h in a ${speedLimit} zone`;
    } else {
        result = `The speed is ${speedDifferece} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }
     
    console.log(result);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');