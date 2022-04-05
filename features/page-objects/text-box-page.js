const {Actions} = require("../support/actions/actions")
const {Outline} = require("../support/outline/outline");
const {Selectors} = require("../selectors/selectors");

const actions = new Actions();
const selectors = new Selectors();
const outline = new Outline();

class TextBoxPage {
    async openTextBoxPage(page){
        await actions.clickOn(selectors.pages()[page])
    }

    async fillFullName(name){
        await actions.withValue(selectors.textBox().nameInput(), name)
    }

    async fillEmail(email){
        await actions.withValue(selectors.textBox().emailInput(), email)
    }

    async fillCurrentAddress(address){
        await actions.withValue(selectors.textBox().addressInput(), address)
    }

    async fillPermanentAddress(permaddress){
        await actions.withValue(selectors.textBox().permAddress(), permaddress)
        await actions.waitUntilClickable(selectors.textBox().submitButton())
        await actions.clickOn(selectors.textBox().submitButton())
    }

    async checkTheResult(result){
        await outline.switchForTextBoxResults(result)
    }
}

module.exports = { TextBoxPage }