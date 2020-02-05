function lockedProfile() {
    let buttons = document.querySelectorAll('button');

   Array.from(buttons).forEach(button => {
        button.addEventListener('click', () => {
            let buttonParent = button.parentElement;
            let isUnlocked = buttonParent.querySelectorAll('input[type=radio]')[1].checked;
            let hiddenDiv = buttonParent.querySelector('div');
            if (isUnlocked) {
                if (button.textContent === 'Show more') {
                    hiddenDiv.removeAttribute('id');
                    button.textContent = 'Hide it'
                } else {
                    let name=buttonParent.querySelector('input[type=radio]').name.slice(0,5);
                    let id=name+'HiddenFields';
                    hiddenDiv.setAttribute('id',id)
                    button.textContent = 'Show more';
                }
            }
        })
    });
}