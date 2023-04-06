function lockedProfile() {
    const buttonElements = Array.from(document.querySelectorAll('button'));
    buttonElements.forEach(button => button.addEventListener('click', showHide));

    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.querySelector('div[id^="user"][id$="HiddenFields"]');
        const lockStatus = profile.querySelector('input[value="unlock"]');

        if (lockStatus.checked) {
            if(button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more'
            }
        }
    }
}

