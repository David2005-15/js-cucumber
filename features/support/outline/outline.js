const {Selectors} = require("../../selectors/selectors");
const {Assertions} = require("../assertions/assertions");
const {Actions} = require("../actions/actions")

const selectors = new Selectors();
const assertions = new Assertions();
const actions = new Actions();

class Outline {
    async switchForTextBoxResults(option) {
        switch (option) {
            case "Ok":
                await actions.waitUntilDisplayed(selectors.results().validResult())
                await assertions.equal(await assertions.displayed(selectors.results().validResult()), true)
                break
            case "Name-invalid":
                await actions.waitUntilDisplayed(selectors.results().validResult())
                await assertions.equal(await assertions.displayed(selectors.results().nameResult()), false)
                break
            case "Email-invalid":
                await actions.waitUntilDisplayed(selectors.results().validResult())
                await assertions.equal(await assertions.displayed(selectors.results().emailResult()), false)
                break
            case "Address-invalid":
                await actions.waitUntilDisplayed(selectors.results().validResult())
                await assertions.equal(await assertions.displayed(selectors.results().currentAddress()), true)
                break
            case "PermAddress-invalid":
                await actions.waitUntilDisplayed(selectors.results().validResult())
                await assertions.equal(await assertions.displayed(selectors.results().permanentAddress()), true)
                break
            case "Bad":
                await assertions.equal(await assertions.displayed(selectors.results().validResult()), true)
                break
        }
    }

    async switchForFeatureChecks(option) {
        switch (option) {
            case "text-box":
                await assertions.equal(await assertions.displayed(selectors.textBox().nameInput()), true)
                await assertions.equal(await assertions.displayed(selectors.textBox().emailInput()), true)
                await assertions.equal(await assertions.displayed(selectors.textBox().addressInput()), true)
                await assertions.equal(await assertions.displayed(selectors.textBox().permAddress()), true)
                break
            case "check-box":
                await assertions.equal(await assertions.displayed(selectors.checkBox().homeCheck()), true)
                break
            case "radio-button":
                await assertions.equal(await assertions.displayed(selectors.radioButton().yesButton()), true)
                await assertions.equal(await assertions.displayed(selectors.radioButton().impressiveButton()), true)
                await assertions.equal(await assertions.displayed(selectors.radioButton().noButton()), true)
                break
            case "web-tables":
                await assertions.equal(await assertions.displayed(selectors.webTables().addButton()), true)
                break
            case "buttons":
                await assertions.equal(await assertions.displayed(selectors.buttons().doubleClick()), true)
                await assertions.equal(await assertions.displayed(selectors.buttons().rightClickButton()), true)
                await assertions.equal(await assertions.displayed(selectors.buttons().dynamicClick()), true)
                break
            case "form":
                await assertions.equal(await assertions.displayed(selectors.formPage().formText()), true)
        }
    }

    async switchForCheckButtons(option) {
        switch (option) {
            case "home":
                await actions.clickOn(selectors.checkBox().homeCheck())
                break
            case "desktop":
                await actions.refreshBrowser()
                await actions.clickOn(selectors.checkBox().appendButton())
                await actions.clickOn(selectors.checkBox().desktopCheck())
                break
            case "documents":
                await actions.refreshBrowser()
                await actions.clickOn(selectors.checkBox().appendButton())
                await actions.clickOn(selectors.checkBox().documentsCheck())
                break
            case "downloads":
                await actions.refreshBrowser()
                await actions.clickOn(selectors.checkBox().appendButton())
                await actions.clickOn(selectors.checkBox().downloadsCheck())
                break

        }
    }

    async switchForCheckResults(option) {
        let successText = $$(selectors.checkBox().text())

        switch (option){
            case "Ok":
                await assertions.equal(await successText[0].getText(), "home")
                break
            case "Desktop-valid":
                await assertions.equal(await successText[0].getText(), "desktop")
                break
            case "Documents-valid":
                await assertions.equal(await successText[0].getText(), "documents")
                break
            case "Downloads-valid":
                await assertions.equal(await successText[0].getText(), "downloads")
                break
        }
    }

    async switchForRadioButtons(option){
        switch (option) {
            case "yes":
                await actions.clickOn(selectors.radioButton().yesButton())
                break
            case "impressive":
                await actions.clickOn(selectors.radioButton().impressiveButton())
                break
            case "no":
                await actions.clickOn(selectors.radioButton().noButton())
                break
        }
    }

    async switchForRadioButtonsResult(option) {
        let success = $(selectors.radioButton().successText())

        switch (option) {
            case "yes-text":
                await assertions.equal(await success.getText(), "Yes")
                break
            case "impressive-text":
                await assertions.equal(await success.getText(), "Impressive")
                break
            case "no-text":
                await assertions.equal(await assertions.clickable(selectors.radioButton().successText()), false)
        }
    }

    async switchForTableOperations(option) {
        switch (option) {
            case "add":
                await actions.clickOn(selectors.webTables().addButton())
                await actions.withValue(selectors.webTables().firstName(), "David")
                await actions.withValue(selectors.webTables().lastName(), "Galstyan")
                await actions.withValue(selectors.webTables().userEmail(), "david@gmail.com")
                await actions.withValue(selectors.webTables().userAge(), "23")
                await actions.withValue(selectors.webTables().userSalary(), "1000000000")
                await actions.withValue(selectors.webTables().userDep(), "QyartTran")
                await actions.clickOn(selectors.webTables().submitButton())
                break
            case "edit":
                await actions.clickOn(selectors.webTables().edit())
                await actions.withValue(selectors.webTables().userSalary(), 200)
                await actions.clickOn(selectors.webTables().submitButton())
                await actions.waitUntilDisplayed(selectors.webTables().salaryCount())
                break
            case "delete":
                await actions.clickOn(selectors.webTables().delete())
                break
        }
    }

    async switchForWebTablesResult (option) {
        switch (option) {
            case "updated-table":
                await actions.waitUntilDisplayed(selectors.webTables().salaryCount())
                await assertions.equal(await assertions.displayed(selectors.webTables().salaryCount()), true)
                break
            case "no-table":
                await assertions.equal(await assertions.displayed(selectors.webTables().delete()), false)
                break
        }
    }


    async switchForPrimaryButtons (option) {
        switch (option) {
            case "db-click":
                await actions.dbClickOn(selectors.buttons().doubleClick())
                break
            case "right-click":
                await actions.rightClickOn(selectors.buttons().rightClickButton())
                break
            case "dynamic-click":
                await actions.clickOn(selectors.buttons().dynamicClick())
                break
        }
    }

    async switchForPrimaryButtonsText (option) {
        switch (option) {
            case "db-click-text":
                await assertions.equal(await $(selectors.buttons().doubleClickText()).getText(), "You have done a double click")
                break
            case "right-click-text":
                await assertions.equal(await $(selectors.buttons().rightClickText()).getText(), "You have done a right click")
                break
            case "dynamic-click-text":
                await assertions.equal(await $(selectors.buttons().dynamicClickText()).getText(), "You have done a dynamic click")
                break
        }
    }

    async switchForFormResults (option) {
        switch (option) {
            case "Ok":
                await actions.waitUntilDisplayed(selectors.formPage()["form"])
                await assertions.equal(await assertions.displayed(selectors.formPage()["form"]), true)
                break
            case "Name-invalid":
                await assertions.equal(await assertions.displayed(selectors.formPage()["form"]), false)
                break
            case "Email-invalid":
                await actions.waitUntilDisplayed(selectors.formPage()["form"])
                await assertions.equal(await assertions.displayed(selectors.formPage()["form"]), true)
                break
            case "Number-invalid":
                await assertions.equal(await assertions.displayed(selectors.formPage()["form"]), false)
                break
            case "Address-invalid":
                await assertions.equal(await assertions.displayed(selectors.formPage()["form"]), true)
                break
            case "Invalid":
                await assertions.equal(await assertions.displayed(selectors.formPage()["form"]), false)
                break
        }
    }
}

module.exports = {Outline}