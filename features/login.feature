Feature: Login functionality check
    
    Scenario Outline: "<useCase>" Case for login
        Given I navigate to the test site
        When I click on the login link
        And I put the "<username>" and "<password>" in the login form
        And I click on the login button
        Then the following "<text>" should display

        Examples:
            | useCase | username          | password  | text                    |
            | Invalid | test1             | Asdf@1234 | Wrong email or password | 
            | Valid   | test1@mitcare.com | Asdf@1234 | Log out                 |

    Scenario: Login with valid credential with select remember me option
        Given I navigate to the test site
        When I click on the login link
        And I put the "test1@mitcare.com" and "Asdf@1234" in the login form
        And I select the remember me checkbox
        And I click on the login button
        Then the following "Log out" should display

    Scenario: Login Scenario check for empty credential
        Given I navigate to the test site
        When I click on the login link
        And I put the " " and " " in the login form
        And I click on the login button
        Then the following "Wrong email or password" should display
