@web
Feature: Administration Pages
    In order to maintain the application
    As a superadmin
    I need to administrate the IssueLab system

    Background:
        Given I am logged in as a superadmin

    Scenario: Search Records Admin
        When I go to "/admin/search-records"
        Then I should be on "/admin/search-records"
