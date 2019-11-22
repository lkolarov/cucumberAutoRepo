Feature: Create an account in Facebook
As a user you need to open Facebook home page and do the validations

Scenario: Validate First Name field
Given User needs to be on the Facebook login page
When User enters first name
Then User checks if first name is present


#Scenario: Validate create user multiple fields 
#Given User needs to be on the Facebook login page
#When User enters first name
#And User enters surname
#Then User checks if first name is present
#But User mobile number field should be blank
