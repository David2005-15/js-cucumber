const {Outline} = require("../support/outline/outline")

const outline = new Outline();

class WebTablesPage {
    async performTable(perform) {
        await outline.switchForTableOperations(perform)
    }

    async checkTheResult(result) {
        await outline.switchForWebTablesResult(result)
    }
}

module.exports = {WebTablesPage}