Feature: Search Records
    In order to keep a record of user searches for improving the user experience
    As a superadmin
    I can view records of user searches

    Scenario: Search records save the current subdomain and ip address
        Given I save a search record
        Then the search record should save my ip
        And the search record should save my subdomain

    @web
    Scenario: Superadmins can access search records
        Given I am logged in as a superadmin
        When I go to "/superadmin/search-records"
        Then I should be on "/superadmin/search-records"

    @javascript
    Scenario: Resource searches are saved
        # Given I search for resources with keywords "water rights"
        # Then "water rights" should be saved as a keyword search
