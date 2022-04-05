Feature:
  Background:
    Given I Open ToolsQA Elements
    When I Click On "buttons" Link
    Then I Check That "buttons" is opened

  Scenario Outline:
    When I Click On Primary "<button>"
    Then I Check The Button "<text>"

  Examples:
    | button        | text               |
    | db-click      | db-click-text      |
    | right-click   | right-click-text   |
    | dynamic-click | dynamic-click-text |