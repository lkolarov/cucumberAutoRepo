Feature: Create an account in Facebook9
As a user you need to open Facebook home page and do the validations

Scenario: Validate First Name field91
Given User needs to be on the Facebook login page
When User enters first name
Then User checks if first name is present
Then close browser


Scenario: Validate create user multiple fields92 
Given User needs to be on the Facebook login page
When User enters first name
And User enters surname
Then User checks if first name is present
Then User mobile number field should be blank
Then close browser
