Feature:
  Background:
    Given I Open ToolsQA Elements
    When I Click On "web-tables" Link
    Then I Check That "web-tables" is opened
    When I "add" New Table

  Scenario Outline:
    When I "<perform>" New Table
    Then I Check WebTable "<result>"

  Examples:
    | perform | result        |
    | edit    | updated-table |
    | delete  | no-table      |