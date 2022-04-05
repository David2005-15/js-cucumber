const {Outline} = require("../support/outline/outline");

const outline = new Outline();

class RadioButtonPage {
    async clickOnRadioButton(button) {
        await outline.switchForRadioButtons(button)
    }

    async checkTheResultText(text) {
        await outline.switchForRadioButtonsResult(text)
    }
}

module.exports = {RadioButtonPage}