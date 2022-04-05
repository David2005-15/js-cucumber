const {Outline} = require("../support/outline/outline");

const outline = new Outline();

class CheckBoxPage {
    async clickOnCheckButtons(buttons) {
        await outline.switchForCheckButtons(buttons)
    }

    async checkTheResult(result) {
        await outline.switchForCheckResults(result)
    }
}

module.exports = {CheckBoxPage}