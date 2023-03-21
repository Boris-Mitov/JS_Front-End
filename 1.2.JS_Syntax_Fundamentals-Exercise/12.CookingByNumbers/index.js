function cookingByNumbers(num, ...opArray) {
    let currentNum = Number(num);

    for (const op of opArray) {
        switch (op) {
            case 'chop': 
            currentNum /= 2;
            break;
            case 'dice': 
            currentNum = Math.sqrt(currentNum);
            break;
            case 'spice': 
            currentNum++;
            break;
            case 'bake': 
            currentNum *= 3;
            break;
            case 'fillet': 
            currentNum -= currentNum * 0.2;
            break;
        }
        console.log(currentNum);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');