function printPersonInfo(studentName, studentAge, studentGrade) {
    let output = `Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`;
    console.log(output);
}

printPersonInfo('Boris', 39, 5.23131);