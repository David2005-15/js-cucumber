Feature:
  Background:
    Given I Open ToolsQA Elements
    When I Click On "radio-button" Link
    Then I Check That "radio-button" is opened

  Scenario Outline:
    When I Check The Radio "<button>"
    Then I Check The Result "<text>"

  Examples:
    | button     | text            |
    | yes        | yes-text        |
    | impressive | impressive-text |
    | no         | no-text         |
