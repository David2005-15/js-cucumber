const {Outline} = require("../support/outline/outline");
const {Actions} = require("../support/actions/actions");
const {Selectors} = require("../selectors/selectors")

const outline = new Outline();
const actions = new Actions();
const selectors = new Selectors()

class MainPage {
    async checkPage(page) {
        await outline.switchForFeatureChecks(page)
    }

    async openThePage(page){
        await browser.execute(() => {
            const elemToRemove = document.querySelector('footer');
            elemToRemove.remove();
        });
        await actions.clickOn(selectors.formPage()["close"])
        if (page === "form") {
            await actions.scrollView(selectors.pages()[page])
        }
        await actions.clickOn(selectors.pages()[page])
    }
}

module.exports = {MainPage}