Feature: Users
    In order to interact with the Issuelab system
    As a user
    I can access my account

    Scenario: User belongs to one or more Organizations
        Given there is an organization called "Whitehouse"
        And there is a user called "Abraham Lincoln" that belongs to organization "Whitehouse"
        And there is a user called "Bill Clinton" that belongs to organization "Whitehouse"
        Then I should see that organization "Whitehouse" has a user called "Bill Clinton"
        And I should see that organization "Whitehouse" has a user called "Abraham Lincoln"

    @web
    Scenario Outline: Users can not access administration pages
        Given I am logged in as a user
        When I go to <page>
        Then I should not be on <page>

        Examples:
        |page|
        |"/users"|
        |"/admin/search-records"|

    @web
    Scenario: User registration
        Given I am not logged in as a user
        When I register with name "Happy User" email "happy@user.com" password "12345678"
        Then I should be logged in
        When I log out
        And I log in with email "happy@user.com" and password "12345678"
        Then I should be logged in

    @web
    Scenario: User login
        Given there is a user with email "very@happy.com" and password "43218765"
        And I am not logged in as a user
        When I log in with email "very@happy.com" and password "43218765"
        Then I should be logged in

    @web
    Scenario: User can request a password reset
        Given I am a user
        When I reset my password
        Then I receive an email with the password reset link
        When I go to the reset link
        And I reset my password to "87654321"
        Then I can log in with password "87654321"
