Feature: Unique Identifiers
    In order to identify objects in the system
    As a user
    I need to associate a unique key with each object

    Scenario Outline: Unique Identifier
        Given there is a <type> called <name>
        And there is a <type> called <name>
        Then I should see a <type> with identifier <first_identifier>
        And I should see a <type> with identifier <second_identifier>

        Examples:
        |type|name|first_identifier|second_identifier|
        # Don't test authors or coverage here because their fullname and coverage properties are constructed from other attributes
        |doctype|"History Report"|"history_report"|"history_report_1"|
        |issue_area|"Crime and Safety"|"crime_and_safety"|"crime_and_safety_1"|
        |resource|"Most Excellent Research"|"most_excellent_research"|"most_excellent_research_1"|
        |organization|"The Whitehouse"|"the_whitehouse"|"the_whitehouse_1"|
        |user|"Barack Obama"|"barack_obama"|"barack_obama_1"|

    # Omit this author test, for now, since database won't allow saving authors with the same fullname
    # Scenario: Authors must have unique identifiers
        # # Put first and last name in separate quotes b/c these are each saved as a separate attribute
        # Given there is an author called "James" "Baldwin"
        # And there is an author called "James" "Baldwin"
        # Then I should see an author with identifier "james_baldwin"
        # And I should see an author with identifier "james_baldwin_1"

    Scenario: Coverage must have unique identifiers
        Given there is a coverage with continent "Antarctica"
        And there is a coverage with continent "Antarctica"
        Then I should see a coverage with identifier "antarctica"
        And I should see a coverage with identifier "antarctica_1"

    Scenario: Languages must have unique abbreviations
        Given there is a language with abbrev "eng"
        Then I should not be able to create a language with abbrev "eng"
