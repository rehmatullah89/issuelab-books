@web
Feature: Users Admin
    In order to manage users on the site
    As a superadmin
    I need to administrate users

    Background:
        Given I am logged in as a superadmin

    Scenario: Superadmins can access user administration
        And I go to "/users"
        Then I should be on "/users"

    Scenario: Superadmins can see a list of users
        When I go to "/users"
        Then I should be on "/users"
        And I should see a list of users

    Scenario: Superadmins can create new users
        When I go to "/users/create"
        Then I should be on "/users/create"
        When I create a user called "John Smith"
        Then I should see a message
        And I should be on "/users"
        And I should see "John Smith"

    Scenario: Superadmins can edit users
        And there is a user "John Smith" with email "john@smith.com"
        When I go to "/users/john_smith/edit"
        And I change users email to "john@issuelab.com"
        Then I should be on "/users/john_smith/edit"
        And I should see "john@issuelab.com"

    Scenario: Superadmins can delete users
        And there is a user called "Jane Doe"
        When I go to "/users"
        Then I should see "Jane Doe"
        When I delete user "Jane Doe"
        Then I should see a message
        And I should be on "/users"
        And I should not see a user called "Jane Doe"

    Scenario: Superadmins can send user password reset links
        And there is a user "Johnny Appleseed" with email "grow@apples.com"
        When I go to "/users/johnny_appleseed/edit"
        And I press "Reset Password"
        Then "grow@apples.com" receives a password reset email

    # Scenario: Users who are are the only organizational contact cannot be deleted
    #     Given there is a user called "Tom Cruise"
    #     And there is an organization called "Cruise Productions"
    #     And "Tom Cruise" is the only contact for "Cruise Productions"
    #     And I delete user "Tom Cruise"
    #     Then I should see an error
    #     And I should see a user called "Tom Cruise"
