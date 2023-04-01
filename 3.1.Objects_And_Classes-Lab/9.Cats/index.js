function cats(input) {

    class Cat{
        constructor(name, age) {
            this.name =  name; 
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    };

    let catsArray = [];

    for (let i = 0; i < input.length; i++) {
        let entry = input[i].split(' ');
        let name = entry[0];
        let age = Number(entry[1]);

        //let name, age;
        //[name, age] = [entry[0], entry[1]];

        let cat = new Cat(name, age);
        catsArray.push(cat);

        cat.meow();
    }
};


cats(
    ['Mellow 2', 'Tom 5']
);

cats(
    ['Candy 1', 'Poppy 3', 'Nyx 2']
);