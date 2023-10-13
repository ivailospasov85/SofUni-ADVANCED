function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'))

    buttons.forEach(button => button.addEventListener('click', checked))

    function checked(e) {
        let checkedProfiles = Array.from(e.currentTarget.parentElement.children)
        let lockUnlockChecker = checkedProfiles.filter((x) => x.checked)
        if (lockUnlockChecker.defaultValue == 'Unlock') {
            let hiddenInformationDiv = checkedProfiles.querySelector("#user2HiddenFields")
          
            // hiddenInformationDiv.display = "block"
debugger
        } else {


        }

 
    }
}