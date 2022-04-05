const {Outline} = require("../support/outline/outline")

const outline = new Outline();

class ButtonsPage {
    async clickOnPrimaryButtons(button) {
        await outline.switchForPrimaryButtons(button)
    }

    async checkPrimaryButtonsText(text) {
        await outline.switchForPrimaryButtonsText(text)
    }
}

module.exports = {ButtonsPage}