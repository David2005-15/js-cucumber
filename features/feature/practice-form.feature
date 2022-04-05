Feature:
  Background:
    Given I Open ToolsQA Form
    When I Click On "form" Link

  Scenario Outline:
    When I Fill Student "<name>" in "firstName"
    When I Fill Student "<last-name>" in "lastName"
    When I Check The Gender
    When I Fill Student "<email>" in "email"
    When I Fill Student "<number>" in "phone"
    When I Fill Student "<address>" in "address"
    When I Click On Submit Button
    Then I Check The Student Form "<result>"

  Examples:
    | name  | email           | number     | address    | last-name | result          |
    | david | david@gmail.com | 6545445545 | Nalbandyan | galstyan  | Ok              |
    |       | david@gmail.com | 6545445545 | Nalbandyan | galstyan  | Name-invalid    |
    | david |                 | 6545445545 | Nalbandyan | galstyan  | Email-invalid   |
    | david | david@gmail.com |            | Nalbandyan | galstyan  | Number-invalid  |
    | david | david@gmail.com | 6545445545 |            | galstyan  | Address-invalid |
    |       |                 |            |            |           | Invalid         |