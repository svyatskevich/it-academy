Feature: APPLE tests
  As a user I ...

  Scenario: I navigate to page in Global Nav Menu and validate title
    Given I navigate to "https://www.apple.com/"
    When I close locale switcher
    And I click on Global Nav Menu "iphone" link
    Then The page title should contain "iPhone"

  Scenario: I can search text and search text should be in search results links
    Given I navigate to "https://www.apple.com/"
    When I click on Global Nav Menu Button "search"
    And I search text "Apple" in search field
    Then I should see text "Apple" in search result link 1

  Scenario Outline: I choose country region and validate URL
    When I click on Locale link in Global Footer
    And I select country "<Country>" in country list
    Then The page should contain "<URL>" URL

  Examples:
      | Country               | URL                                  |
      | Armenia               | /am/                                 |
      | France                | /fr/                                 |
      | Latvija               | /lv/                                 |
      | Moldova               | /md/                                 |
      | Ireland               | /ie/                                 |

  Scenario: I go to link in My Profile list without authorization and should see Sign In container
    Given I navigate to "https://www.apple.com/"
    When I click on Global Nav Menu Button "bag" 
    And I go to "orders" link in My Profile list
    Then I should see Sign In container
