Feature: Create an account in Facebook1
As a user you need to open Facebook home page and do the validations


Background: common login steps
Given User needs to be on the Facebook login page 


Scenario: Validate First Name field11
When User enters "David" first name
Then User checks "David" if first name is present
Then close browser


Scenario: Validate create user multiple fields12 
When User enters "Ryan" first name
And User enters "Jack" surname
Then User checks "Ryan" if first name is present
Then User mobile number field should be blank
Then close browser
