Feature: User Authentication
  
   Background:
    Given The user is on login page

   Scenario: User logs in with correct credentials
     When the user tries to login with correct credentials
     Then he should be redirected to the homepage