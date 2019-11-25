Feature: Create an account in Facebook11
As a user you need to open Facebook home page and do the validations

Scenario: Validate First Name field111
Given User needs to be on the Facebook login page
When User enters "David" first name
Then User checks "David" if first name is present


Scenario: Validate create user multiple fields112
Given User needs to be on the Facebook login page
When User enters "Ryan" first name
And User enters "Jack" surname
Then User checks "Ryan" if first name is present
Then User mobile number field should be blank

