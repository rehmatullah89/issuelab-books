@web
Feature: Required Actions for Logged In Users
    In order to access benefits of the IssueLab system and contribute research
    As a logged-in user
    I need to fulfill actions required for registered users

    Scenario Outline: Required actions are only accessable by logged in users
        Given I go to <page>
        Then I should be on "/login"

        Examples:
        |page|
        |"/select-organization"|

    Scenario Outline: Logged in user must complete actions before accessing the rest of the site
        Given I am logged in as a user
        And I have not <requirement>
        When I go to the homepage
        Then I should be on <page>

        Examples:
        |requirement|page|
        |selected an organization|"select-organization"|

    Scenario Outline: Logged in user who has completed required actions can access the rest of the site and cannot access required action pages
        Given I am logged in as a user
        And I have <requirement>
        When I go to the homepage
        Then I should be on the homepage
        And I go to <page>
        Then I should not be on <page>

        Examples:
        |requirement|page|
        |selected an organization|"select-organization"|




