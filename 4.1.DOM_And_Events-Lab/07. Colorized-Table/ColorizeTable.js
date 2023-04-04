function colorize() {
    const tableRows = Array.from(document.querySelectorAll('tr'));
    
    for (let i = 0; i < tableRows.length; i++) {
        if (i % 2 !== 0) {
            tableRows[i].style.backgroundColor = 'teal'; 
        }        
    }
}