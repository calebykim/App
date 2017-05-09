# Finnest

## HOW TO RUN APP (FINNEST APP):
  1. npm install sails -g (if sails is not already installed)
  2. npm install (installs all necessary node_modules)
  3. run mySql server on localhost
  4. node create_db.js (creates finnest_db for application, only need to run once)
  5. sails lift (run application -> localhost:1337)

## Bank_API (What is it?):

  We have another app, BANK_API, simulate/pretend to be the bank API. This needs to be run at the same time as the finnest app. 

## HOW TO RUN (BANK_API):

  1. "Open Tab" in the same terminal as the Finnest App to create a new terminal tab. 
  2. npm install
  3. make sure mySql server is still running. 
  4. node create_bank_db.js
  5. sails lift (localhost:3000)

## Built With

[Sails JS](https://sailsjs.com) - the MVC used. 

## Authors

* Joseph Yoo
* Caleb Kim
* Xuan Cui
* Matthew Liu

## License

This project is licensed under the MIT License. 