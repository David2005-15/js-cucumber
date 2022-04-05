const {MainPage} = require("../page-objects/main-page");
const {TextBoxPage} = require("../page-objects/text-box-page");
const {CheckBoxPage} = require("../page-objects/check-box-page");
const {RadioButtonPage} = require("../page-objects/radio-button-page");
const {WebTablesPage} = require("../page-objects/web-tables-page");
const {ButtonsPage} = require("../page-objects/buttons-page");
const {PracticeFormPage} = require("../page-objects/practice-form-page");
const {Then} = require("@wdio/cucumber-framework");

const webTablesPage = new WebTablesPage();
const textBoxPage = new TextBoxPage();
const checkBoxPage = new CheckBoxPage();
const mainPage = new MainPage();
const radioButtonPage = new RadioButtonPage();
const buttonsPage = new ButtonsPage();
const practiceFormPage = new PracticeFormPage();

Then(/^I Check That "(.*)" is opened$/, async (page) => {
    await mainPage.checkPage(page)
});

Then(/^I Check The Form "(.*)"$/, async (result) => {
    await textBoxPage.checkTheResult(result)
});

Then(/^I Check The Select "(.*)"$/, async (result) => {
    await checkBoxPage.checkTheResult(result)
});

Then(/^I Check The Result "(.*)"$/, async (text) => {
    await radioButtonPage.checkTheResultText(text)
});

Then(/^I Check WebTable "(.*)"$/, async (result) => {
    await webTablesPage.checkTheResult(result)
});

Then(/^I Check The Button "(.*)"$/, async (text) => {
    await buttonsPage.checkPrimaryButtonsText(text)
});

Then(/^I Check The Student Form "(.*)"$/, async (result) => {
    await practiceFormPage.checkTheResult(result)
});