function listOfNames(names) {
    names.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < names.length; i++) {
        console.log(`${Number(i) + 1}.${names[i]}`);
    }
}


listOfNames (["John", "Bob", "Christina", "Ema"]);