Feature:
  Background:
    Given I Open ToolsQA Elements
    When I Click On "check-box" Link
    Then I Check That "check-box" is opened

  Scenario Outline:
    When I Click On "<check-button>"
    Then I Check The Select "<result>"

  Examples:
    | check-button | result          |
    | home         | Ok              |
    | desktop      | Desktop-valid   |
    | documents    | Documents-valid |
    | downloads    | Downloads-valid |