Feature: Resources
    In order to see information of interest
    As a user
    I need to access resources

    Background:
        Given there is a resource called "My Resource"

    Scenario: Pending Resources
        Given "My Resource" is a pending resource by default
        When I browse resources
        Then I should not see a resource called "My Resource"

    Scenario: Approved Resources
        Given "My Resource" is an approved resource
        When I browse resources
        Then I should see a resource called "My Resource"

    Scenario Outline: Resource Relationships
        Given there is a <type> called <name> that belongs to resource "My Resource"
        Then I should see that resource "My Resource" has a <type> called <name>

        Examples:
            |type|name|
            |author|"John Smith"|
            |coverage|"South America"|
            |doctype|"CaseStudy"|
            |issue_area|"Civil Society"|
            |keyword|"policy"|
            |organization|"PolicyLink"|

    Scenario: Resource Creative Commons Copyright
        Given there is a resource with "rights" "http://creativecommons.org/licenses/by/4.0/"
        When I view that resource
        Then I should see an image "//i.creativecommons.org/l/by/4.0/88x31.png"
        And I should see a copyright "Creative Commons Attribution 4.0 International License"
