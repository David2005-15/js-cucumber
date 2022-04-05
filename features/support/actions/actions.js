class Actions {
    async clickOn(selector) {
        await $(selector).click()
    }

    async dbClickOn(selector) {
        await $(selector).doubleClick()
    }

    async rightClickOn(selector) {
        await $(selector).click({button: 'right'})
    }

    async withValue(selector, value) {
        await $(selector).clearValue()
        await $(selector).setValue(value)
    }

    async waitUntilClickable(selector) {
        await $(selector).waitForClickable({timeout: 5000})
    }

    async waitUntilDisplayed(selector) {
        await $(selector).waitForDisplayed({timeout: 5000})
    }

    async refreshBrowser() {
        await browser.refresh()
    }

    async scrollView(selector) {
        await $(selector).scrollIntoView()
    }
}

module.exports = {Actions}