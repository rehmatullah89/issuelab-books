Feature: User Search
    In order to support users in updating and maintainin their profiles
    As a superadmin
    I need to search of users by name and email

    Scenario: Search Users by Name
        Given there is a user called "Jodie Foster"
        When I search for user "Jodie Foster"
        Then I should see a user called "Jodie Foster"

    Scenario: Search Users by Email
        Given there is a user with email "me@myselfandi.com"
        When I search for user "me@myselfandi.com"
        Then I should see a user with email "me@myselfandi.com"
