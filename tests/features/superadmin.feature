Feature: Superadmin
    In order to maintain the IssueLab platform
    As a superadmin
    I need to administrate the system

    Scenario: User is not a superadmin by default
        Given I am logged in as a user
        Then I should not have the role superadmin

    Scenario: Superadmin privledges can be given or revoked
        Given I am logged in as a user
        When I am a superadmin
        Then I should have the role superadmin
        When I am not a superadmin
        Then I should not have the role superadmin
