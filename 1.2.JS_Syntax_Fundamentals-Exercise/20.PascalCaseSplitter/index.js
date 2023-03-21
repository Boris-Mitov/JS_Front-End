function pascalCaseSplitter(text) {
    let textArray = text.split(/(?=[A-Z])/).join(', ');
    console.log(textArray);
}

pascalCaseSplitter(
    'SplitMeIfYouCanHaHaYouCantOrYouCan'
);

pascalCaseSplitter(
    'HoldTheDoor'
);

pascalCaseSplitter(
    'ThisIsSoAnnoyingToDo'
);