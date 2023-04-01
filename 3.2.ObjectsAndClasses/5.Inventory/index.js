function inventory(input) {
    let heroes = [];

    for (const line of input) {
        let hero = {};
        let heroInfo = line.split(' / ');
        hero['name'] = heroInfo[0];
        hero['level'] = Number(heroInfo[1]);
        hero['items'] = heroInfo[2].split(', ');
        heroes.push(hero);
    }

    heroes
        .sort((heroA, heroB) => heroA['level'] - heroB['level'])
        .forEach(hero => {
            console.log(`Hero: ${hero['name']}`);
            console.log(`level => ${hero['level']}`);
            console.log(`items => ${hero['items'].join(', ')}`)
        })
}


inventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

inventory(
    [
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
    ]
);