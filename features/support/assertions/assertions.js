const chai = require("chai")

class Assertions {
    async equal(actual, expected) {
        await chai.expect(actual).to.be.eq(expected)
    }

    async displayed(selector) {
        return await $(selector).isDisplayed()
    }

    async clickable(selector) {
        return await $(selector).isClickable()
    }
}

module.exports = {Assertions}