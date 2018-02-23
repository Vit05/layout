(function () {
    var authForm = document.getElementsByTagName('form')[0]
    var formButton = document.getElementsByTagName('button')[0]

    function createEl(el, text) {
        var element = document.createElement(el)
        element.innerHTML = text
        return element
    }

    function successAuth(name) {
        var successElement = document.createElement('div')

        successElement.innerHTML = '<h1><strong>' + name + '</strong> We are glad to see you again</h1>'
        authForm.parentNode.appendChild(successElement)
    }

    formButton.addEventListener("click", function (event) {
        var userName = document.getElementById("userName").value;
        var userPassword = document.getElementById("userPassword").value;
        if (userName === '' || userName.length <= 6 || userPassword === '' || userPassword.length <= 5) {
            return false;
        } else {
            event.preventDefault()
            successAuth(userName)
            setTimeout(function () {
                authForm.submit();

            }, 3000)

        }

    })

})()