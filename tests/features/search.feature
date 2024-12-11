Feature: Search
    In order to access information
    As a user
    I need to search resources

    @web
    Scenario: Search from the header
        Given I go to the homepage
        When I search
        Then I should be on "/search"
