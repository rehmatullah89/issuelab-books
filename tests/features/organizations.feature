Feature: Organizations
    In order to learn information about publishing organizations
    As a user
    I need to access, create, and update organizations

    Scenario: Organizations can be associated by name and will not be duplicated
        Given I am logged in as a user
        And there is an organization called "My Awesome Org"
        When I affiliate with "My Awesome Org"
        Then I should see one organization called "My Awesome Org"

    Scenario: Organizations can be associated by name and will be created if they don't exist
        Given I am logged in as a user
        And there is not an organization called "The Ruckus Society"
        When I affiliate with "The Ruckus Society"
        Then I should see an organization called "The Ruckus Society"
