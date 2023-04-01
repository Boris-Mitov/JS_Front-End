function manageMeetings(meetingsInput) {
    let meetings = {};

    for (const meeting of meetingsInput) {
        let [dayOfWeek, name] = meeting.split(' ');
        if (!meetings.hasOwnProperty(dayOfWeek)) {
            meetings[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`)
        } else {
            console.log(`Conflict on ${dayOfWeek}!`)
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
    
}


manageMeetings(
    ['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim']
);

manageMeetings(
    ['Friday Bob',
        'Saturday Ted',
        'Monday Bill',
        'Monday John',
        'Wednesday George']
);