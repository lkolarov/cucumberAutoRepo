@Important
Feature: Create an account in Facebook12
As a user you need to open Facebook home page and do the validations

@Smoke
Scenario: Validate First Name field121
Given User needs to be on the Facebook login page
When User enters "David" first name
Then User checks "David" if first name is present
Then close browser

@Smoke @Regression
Scenario: Validate create user multiple fields123 
Given User needs to be on the Facebook login page
When User enters "Ryan" first name
And User enters "Jack" surname
Then User checks "Ryan" if first name is present
Then User mobile number field should be blank
Then close browser


Scenario: Validate First Name field124
Given User needs to be on the Facebook login page
When User enters "David" first name
Then User checks "David" if first name is present
Then close browser

@Regression
Scenario: Validate First Name field125
Given User needs to be on the Facebook login page
When User enters "David" first name
Then User checks "David" if first name is present
Then close browser

@Smoke
Scenario: Validate First Name field126
Given User needs to be on the Facebook login page
When User enters "David" first name
Then User checks "David" if first name is present
Then close browser