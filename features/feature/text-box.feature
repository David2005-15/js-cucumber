Feature:
  Background:
    Given I Open ToolsQA Elements
    When I Click On "text-box" Link
    Then I Check That "text-box" is opened

  Scenario Outline:
    When I Fill Full Name with "<name>"
    When I Fill Email with "<email>"
    When I Fill Current Address with "<address>"
    When I Fill Permanent Address with "<perm address>"
    Then I Check The Form "<result>"

  Examples:
    | name  | email           | address    | perm address    | result              |
    | David | david@gmail.com | My Address | My Prem Address | Ok                  |
    |       | david@gmail.com | My Address | My Prem Address | Name-invalid        |
    | David |                 | My Address | My Prem Address | Email-invalid       |
    | David | david@gmail.com |            | My Prem Address | Address-invalid     |
    | David | david@gmail.com | My Address |                 | PermAddress-invalid |
    |       |                 |            |                 | Bad                 |