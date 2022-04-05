const {Given} = require("@wdio/cucumber-framework");

Given(/^I Open ToolsQA Elements$/, async () => {
    await browser.url("https://demoqa.com/elements")
    await browser.maximizeWindow()
});

Given(/^I Open ToolsQA Form$/, async () => {
    await browser.url("https://demoqa.com/forms")
    await browser.maximizeWindow()
});