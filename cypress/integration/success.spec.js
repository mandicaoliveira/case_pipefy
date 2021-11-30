const { name, wantWorkDescrption, hour, minute, email } = require("../..");
const { fillEmail, goToForm, fillName, fillWantWorkDescrption, checkOptionB, selectUser, fillTodayDate, selectOptionB, fillTimeAtNow, submitForm, sendForm, verifyThanksMessage } = require("../pages/methods");

describe("Fill in Pipefy form", function () {
    it("Since only the mandatory fields are properly filled in then the form will be submitted successfully", function() {
        goToForm()
        fillName(name)
        fillWantWorkDescrption(wantWorkDescrption)
        checkOptionB()
        selectUser()
        fillTodayDate()
        selectOptionB()
        fillTimeAtNow(hour, minute)
        submitForm()
        fillEmail(email)
        sendForm()
        verifyThanksMessage()
    })
}) 