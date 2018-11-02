# wdio
Test Automation with Webdriverio

Prerequisite:
 - Node and NPM installed - https://nodejs.org/en/
 - Selenium standalone - https://github.com/vvo/selenium-standalone
 
Init the project using 
    - npm init 
    - npm install webdriverio --save-dev

Configure Webdriverio project
    - ./node_modules/.bin/wdio config
        - Use jasmin as test framework
        - Use ./e2e/specs/**/*.ts as path for typescripts. (./e2e/specs/**/*.js for javascript)
        - Use spec as reporter (Refer http://webdriver.io/guide.html for more details on reporters)
        - Use Selenium Standalone as the service
        - Use login visibility as you prefer
        - Specify a folder for error screenshots
        - Base url should be changed to use the url of ur todo application

wdio.conf.js will be created in your base directory. 

Install following packages as dependancies.
    - typescript support for chai, jasmine & webdriverio
        - npm install --save  @types/chai @types/jasmine @types/webdriverio
    - install chai as assertion framework - https://www.chaijs.com/
        - npm install --save-dev chai 
    - install typescript and ts-node ro support typescript development
        - npm install --save-dev typescript ts-node
    - install wdio supporting libries for jasmine, selenium-standalone server and spec-reporter
        - npm install --save-dev  wdio-jasmine-framework wdio-selenium-standalone-service wdio-spec-reporter
    - install tslint and ruleset 
        - npm install --save-dev tslint tslint-config-airbnb
    - install mkdir and rimraf for file creation
        - npm install --save-dev mkdirp rimraf


Use a text editor to open it and do following changes.
 
    - In Capabilities section
        - Default drowser in wdio.conf.js is firefox, change it to chrome as we plan to use chrome driver in Selenium Standalone server. You can keep this as it is if you plan to use firfox driver.
        - Change max instance to 1 if you plan to debug
    - Use onPrepare hook to create/clean screenshots taken on each test execution
        - ./e2e/screenshots - hold screenshots taken after each test case.
        - ./errorShots - hold screenshots taken by wdio when an error occured.
    - Use before hook to register typescripts if you plan to write test suit using typescripts.
        require('ts-node/register');


Project Structure (this project will test ToDo reat web application)

   wdio
    |
    |-> e2e
    |    |-> todo
    |    |    |-> todo.page.ts
    |    |    |-> todo.spec.ts
    |    |
    |    |-> active
    |    |    |-> active.page.ts
    |    |    |-> active.spec.ts
    |    |
    |    |-> completed
    |    |    |-> completed.page.ts
    |    |    |-> completed.spec.ts





    