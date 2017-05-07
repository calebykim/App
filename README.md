# finnest

## HOW TO RUN APP (FINNEST APP):
  1. npm install sails -g (if sails is not already installed)
  2. npm install (installs all necessary node_modules)
  3. run mySql server on localhost
  4. node create_db.js (creates finnest_db for application, only need to run once)
  5. sails lift (run application -> localhost:1337)

## HOW TO RUN (BANK_API):
  1. add 'bank_db' as a schema on the same mysql server (configuration is already done)
      1.1 if you don't know to, you can copy the 'create_db.js' script and replace 'finnest_db' with 'bank_db'
  2. On another console session, sails lift (localhost:3000)
