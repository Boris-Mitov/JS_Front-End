function focused() {
    const selectDivs = Array.from(document.querySelectorAll('div > div'));

    for (let i = 0; i < selectDivs.length; i++) {
        const currentDiv = selectDivs[i];
        
        currentDiv
            .querySelector('input')
            .addEventListener('focus', (event) => {
                    currentDiv.classList.add('focused')
                })

        currentDiv
            .querySelector('input')
            .addEventListener('blur', (event) => {
                    currentDiv.classList.remove('focused')
                })
    }

}