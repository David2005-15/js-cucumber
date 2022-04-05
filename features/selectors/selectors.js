class Selectors {
    pages() {
        return {
            "text-box": ".element-list.collapse.show > .menu-list > #item-0",
            "check-box": ".element-list.collapse.show > .menu-list > #item-1",
            "radio-button": ".element-list.collapse.show > .menu-list > #item-2",
            "web-tables": ".element-list.collapse.show > .menu-list > #item-3",
            "buttons": "#item-4",
            "form": ".element-list.collapse.show > .menu-list > #item-0"
        }
    }

    textBox() {
        return {
            nameInput: () => {
                return "#userName"
            },

            emailInput: () => {
                return "#userEmail"
            },

            addressInput: () => {
                return "#currentAddress"
            },

            permAddress: () => {
                return "#permanentAddress"
            },

            submitButton: () => {
                return "#submit"
            }
        }
    }

    results() {
        return {
            validResult: () => {
                return ".col-md-12.col-sm-12"
            },

            nameResult: () => {
                return "#name"
            },

            emailResult: () => {
                return "#email"
            },

            currentAddress: () => {
                return "#currentAddress"
            },

            permanentAddress: () => {
                return "#permanentAddress"
            }
        }
    }

    checkBox() {
        return {
            homeCheck: () => {
                return "[for='tree-node-home']"
            },

            appendButton: () => {
                return "[class='rct-collapse rct-collapse-btn']"
            },

            desktopCheck: () => {
                return "ol > li > ol > li:nth-child(1) > span > label > span.rct-title"
            },

            documentsCheck: () => {
                return "[for$='documents'] span:last-of-type"
            },

            downloadsCheck: () => {
                return "ol > li > ol > li:nth-child(3) > span > label > span.rct-title"
            },

            text: () => {
                return ".text-success"
            },
        }
    }

    radioButton() {
        return {
            yesButton: () => {
                return "div:nth-child(2) > div:nth-child(2) > label"
            },

            impressiveButton: () => {
                return "div:nth-child(2) > div:nth-child(3) > label"
            },

            noButton: () => {
                return "div:nth-child(2) > div:nth-child(4) > label"
            },

            successText: () => {
                return ".text-success"
            }
        }
    }

    webTables() {
        return {
            addButton: () => {
                return "#addNewRecordButton"
            },

            firstName: () => {
                return "#firstName"
            },

            lastName: () => {
                return "#lastName"
            },

            userEmail: () => {
                return "#userEmail"
            },

            userAge: () => {
                return "#age"
            },

            userSalary: () => {
                return "#salary"
            },

            userDep: () => {
                return "#department"
            },

            submitButton: () => {
                return "#submit"
            },

            edit: () => {
                return "#edit-record-3"
            },

            delete: () => {
                return "#delete-record-4 > svg"
            },

            salaryCount: () => {
                return "div:nth-child(4) > div > div:nth-child(5)"
            }
        }
    }

    buttons() {
        return  {
            doubleClick: () => {
                return "#doubleClickBtn"
            },

            rightClickButton: () => {
                return "#rightClickBtn"
            },

            dynamicClick: () => {
                return ".mt-4:nth-child(3) > button"
            },

            doubleClickText: () => {
                return "#doubleClickMessage"
            },

            rightClickText: () => {
                return "#rightClickMessage"
            },

            dynamicClickText: () => {
                return "#dynamicClickMessage"
            }
        }
    }

    formPage () {
        return {
            "formText": ".practice-form-wrapper > h5",
            "firstName": "#firstName",
            "lastName": "#lastName",
            "email": "#userEmail",
            "gender": "[for='gender-radio-1']",
            "phone": "[placeholder=\"Mobile Number\"]",
            "address": "#currentAddress",
            "submit": "#submit",
            "close": "#close-fixedban",
            "form": ".modal-header"
        }
    }
}

module.exports = {Selectors}