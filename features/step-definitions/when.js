const {When} = require("@wdio/cucumber-framework");
const {TextBoxPage} = require("../page-objects/text-box-page");
const {CheckBoxPage} = require("../page-objects/check-box-page");
const {MainPage} = require("../page-objects/main-page");
const {RadioButtonPage} = require("../page-objects/radio-button-page");
const {WebTablesPage} = require("../page-objects/web-tables-page");
const {ButtonsPage} = require("../page-objects/buttons-page");
const {PracticeFormPage} = require("../page-objects/practice-form-page");
const pactum = require("pactum")



const textBoxPage = new TextBoxPage();
const checkBoxPage = new CheckBoxPage();
const mainPage = new MainPage();
const radioButtonPage = new RadioButtonPage();
const webTablesPage = new WebTablesPage();
const buttonsPage = new ButtonsPage();
const practiceFormPage = new PracticeFormPage();

When(/^I Click On "(.*)" Link$/, async (page) => {
    await mainPage.openThePage(page)
});

When(/^I Fill Full Name with "(.*)"$/, async (name) => {
    await textBoxPage.fillFullName(name)
});

When(/^I Fill Email with "(.*)"$/, async (email) => {
    await textBoxPage.fillEmail(email)
});

When(/^I Fill Current Address with "(.*)"$/, async (address) => {
    await textBoxPage.fillCurrentAddress(address)
});

When(/^I Fill Permanent Address with "(.*)"$/, async (permaddress) => {
    await textBoxPage.fillPermanentAddress(permaddress)
});

When(/^I Click On "(.*)"$/, async (button) => {
    await checkBoxPage.clickOnCheckButtons(button)
});

When(/^I Check The Radio "(.*)"$/, async (button) => {
    await radioButtonPage.clickOnRadioButton(button)
});

When(/^I "(.*)" New Table$/, async (perform) => {
    await webTablesPage.performTable(perform)
});

When(/^I Click On Primary "(.*)"$/, async (buttons) => {
    await buttonsPage.clickOnPrimaryButtons(buttons)
});

When(/^I Fill Student "(.*)" in "(.*)"$/, async (option, selector) => {
    await practiceFormPage.fillStudentOption(option, selector)
});

When(/^I Click On Submit Button$/, async () => {
    await practiceFormPage.clickOnSubmitButton()
});

When(/^I Check The Gender$/, async () => {
    await practiceFormPage.checkTheGender()
});
