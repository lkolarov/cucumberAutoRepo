Feature: Create an account in Facebook3
As a user you need to open Facebook home page and do the validations



Scenario: Validate create user multiple fields31 
Given User needs to be on the Facebook login page
When Enter following data
	|userName |UserSurname |Mobile|
	|Tom			|Hanks			 |1234  |
	|Jack			|Daniel			 |5678  |

