# Finnest

## README's readme!

Nate and Alberta told us that we need to have the DB running on a server to interact with it. But at the moment, we don't have permission to with the department machines. They said we will not be penalized for tech issues with the DB running on department machine servers. The demos work fine on non-CS department machines. They also said to make this issue clear in our readme (which we're doing here). 

## Overview
  This app allows user registration and transactions. Parents sign up first, then kids can use a parent's e-mail to sign up. Please read "How to use" for a bit more information. 


## HOW TO RUN APP (FINNEST APP):
  1. npm install sails -g (if sails is not already installed)
  2. npm install (installs all necessary node_modules)
  3. run mySql server on localhost
  4. node create_db.js (creates finnest_db for application, only need to run once)
  5. sails lift (run application -> localhost:1337)
  6. also have bank_api running (see below!!!)

## Bank_API (What is it?):

  We have another app, BANK_API, simulate/pretend to be the bank API. This needs to be run at the same time as the finnest app.

## HOW TO RUN (BANK_API):

  1. "Open Tab" in the same terminal as the Finnest App to create a new terminal tab. 
  2. npm install
  3. make sure mySql server is still running. 
  4. node create_bank_db.js
  5. sails lift (localhost:3000) <-- You can open it in a browser, but it's meant as debugging tool, and is only meant for eyes of developers. 

## How to use:

When you're on the finnest app (localhost:1337) and registering users, there are a few guidelines. Because in reality a bank API would have to "talk" to our app, we've made a specific family that finnest can register. The names of the family members that can be registered are listed below. As for transactions, everything is quite intuitive and working. 

## Who can be registered:
  1. **Parent**. Homer (first name), Simpson (last name). E-mail:  homer_simpson@duffmail.net
  2. **Parent**. Marge (first name), Simpson (last name). E-mail: homer_simpson@duffmail.net
  3. **Child**. Lisa (first name), Simpson (last name). E-mail: homer_simpson@duffmail.net
  4. **Child**. Bart (first name), Simpson (last name). E-mail: homer_simpson@duffmail.net
  5. **Child**. Maggie (first name), Simpson (last name). E-mail: homer_simpson@duffmail.net
  

## Built With

[Sails JS](https://sailsjs.com) - the MVC used. 

## Authors

* Joseph Yoo
* Caleb Kim
* Xuan Cui
* Matthew Liu

## License

This project is licensed under the MIT License. 
