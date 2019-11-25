Feature: Create an account in Facebook2
As a user you need to open Facebook home page and do the validations


Scenario Outline: Validate create user multiple fields21 
Given User needs to be on the Facebook login page
When User enters "<user>" first name
And User enters "<surname>" surname
Then User checks "<user>" if first name is present
Then User mobile number field should be blank
Then close browser
Examples: 
	|	user	|	surname	|
	|	Tom		|	Jerry		|
	| Lorren| Hardy		|
