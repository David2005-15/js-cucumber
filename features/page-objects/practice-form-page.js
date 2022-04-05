const {Outline} = require("../support/outline/outline");
const {Actions} = require("../support/actions/actions");
const {Selectors} = require("../selectors/selectors")

const actions = new Actions();
const selectors = new Selectors();
const outline = new Outline();

class PracticeFormPage {
    async fillStudentOption(option, selector){
        await actions.withValue(selectors.formPage()[selector], option)
    }

    async clickOnSubmitButton(){
        await actions.scrollView(selectors.formPage()["submit"])
        await actions.clickOn(selectors.formPage()["submit"])
    }

    async checkTheGender() {
        await actions.clickOn(selectors.formPage()["gender"])
    }

    async checkTheResult(result) {
        await outline.switchForFormResults(result)
    }
}

module.exports = {PracticeFormPage}