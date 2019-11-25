Feature: Create an account in Facebook8
As a user you need to open Facebook home page and do the validations

Scenario: Validate First Name field81
Given User needs to be on the Facebook login page
When User enters "David" first name
Then User checks "David" if first name is present
Then close browser


Scenario: Validate create user multiple fields82 
Given User needs to be on the Facebook login page
When User enters "Ryan" first name
And User enters "Jack" surname
Then User checks "Ryan" if first name is present
Then User mobile number field should be blank
Then close browser

