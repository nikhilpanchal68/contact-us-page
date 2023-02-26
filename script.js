$("document").ready(function () {
    $("#myForm").submit(function (e) {
        e.preventDefault();

        let fName = $("#fName").val();
        let nameError = $("#nameError");
        let email = $("#email").val();
        let emailError = $("#emailError");
        let message = $("#message").val();
        let messageError = $("#messageError");

        let formDiv = $(".formDiv");
        let finalDiv = $(".finalDiv");

        //name input validation
        if (fName.length > 1) {
            var regExpfName = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
            var validfName = regExpfName.test(fName);
            ;
            if (!validfName) {
                nameError.text("Allowed alphabets and space only");
            }
            else {
                nameError.empty();
            }
        }
        else {
            nameError.text("Please enter your name");
        }

        //email input validation
        if (email.length > 1) {
            let regExpEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
            var validEmail = regExpEmail.test(email);

            if (!validEmail) {
                emailError.text("Enter a Valid Email");
            }
            else {
                emailError.empty();
            }
        }
        else {
            emailError.text("Please enter your email");
        }

        // message input validation
        let validMessage = message.length > 1;
        if (!validMessage) {
            messageError.text("Message can't be empty");
        }
        else {
            messageError.empty();
        }

        //succesfull message after all input are validated
        if (validfName && validEmail && validMessage) {
            formDiv.remove();
            finalDiv.css("display", "block")
        }
    })
})



