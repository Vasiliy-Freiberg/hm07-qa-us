# Vasiliy Freiberg — Sprint 7 project - 


# Description of the project
In this project we need to test the Urban Grocers app using test automotation for GET, POST, PUT, and DELETE HTTP requests.


# Setting up the environment
1. First step is to link tester's GitHub account to TripleTen through clicking the “Link GitHub account” button in the widget at the top of project page at the TripleTen web-platform.
2. Second step is to create a local repo on tester's machine using Git Bash, preffered name for directory is 'projects'.
3. After linking acounts and creating local repo it is time to clone project template from GitHub to the local repo using Git Bash.
4. In case to be able to write and run tests it is required to provide some adjustments. So we start is with installing Node.js which contains npm (Node Package Manager). Node JS is made for running JavaScript not only in browser, while npm is used for managing packages or dependencies (libraries and modules).
5. Next step is to install VS code - a tool for coding on different languages, using various extensions also for testing and has it's own in-built terminal.
6. Before xtarting coding and running project tests a tester must save all project dependencies. For that it is need to create file 'package.json' - it is possible to do in Git bash or in VS code terminal with command 'npm init --yes' - only rule is to create that file in the project folder.
7. Now it is possible to install testing libraries JEST as dependencie for developing with command 'npm install jest'. JEST is a framework for testing JS-code written tests and he runs with command 'npx jest' from the VS code terminal.
8. Before starting working on the tests in the VS code it is need to copy generated URL-server lonk to the 'config.js' file in the project folder.
9. After executing all previous steps it is possible to start working on the project in the local repo in the VS code.

# The documentation source used (we recommend apiDoc)
To test the Urban Grocers app the dollowing URLs realized in the API were used:

URLs for kits
● POST /api/v1/kits - create a kit
● GET /api/v1/kits/search - get a kit by name
● PUT /api/v1/kits/:id - change the kit
● DELETE /api/v1/kits/:id - delete a kit

URLs for the cart
● POST /api/v1/orders - create the cart
● GET /api/v1/orders/:id - get a list of products in the cart
● PUT /api/v1/orders/:id/complete - make an order
● DELETE /api/v1/orders/:id - delete the cart

URLs for warehouses
● GET /api/v1/warehouses - get a list of warehouses


# A description of the technologies and techniques used
To run automatic tests were used such technologies as NPM (to install tools for testing) and Jest (to test code to match various conditions), and techniques like asynchronous JS and HTTP requests with JS.


# instructions on how to run the tests

Kits endpoints
1. First test to run - postKits.test.js.
2. Second test to run - getKits.test.js.
As the endpoint need to use following "api/v1/kits/search?name=My%20new%20kito".
Also we can with the command 'console.log(newKitId)' log in the console value of the variable "newKitId" which will be used in the endpoints of the next tests. Afterwards this command should be removed from the code due to the project task.
3. Third test to run - putKits.test.js.
As the endpoint we need to use "/api/v1/kits/:id" where "id" is the value of the variable "newKitId" logged to the console in the second test (getKits.test.js).
4. Fourth and the last test for kits - deleteKits.test.js.
As the endpoint we need to use "/api/v1/kits/:id" where "id" is the value of the variable "newKitId" logged to the console in the second test (getKits.test.js).

Orders endpoints
1. First test to run - postOrders.test.js.
Also we withe the commands:

const newCartId = newOrderData["id"];
console.log(newCartId);

log in the console value of the variable "newCartId" which will be used in the endpoints of the next tests. Afterwards this command should be removed from the code due to the project task.
2. Second test to run - getOrders.test.js.
As the endpoint we need to use following "/api/v1/orders/:id" where "id" is the value of the variable "newCartId" logged to the console in the first test (postOrders.test.js).
3. Third test to run - putOrders.test.js.
As the endpoint we need to use "/api/v1/orders/:id/complete" where "id" is the value of the variable "newCartId" logged to the console in the first test (postOrders.test.js).
4. Fourth and the last test for kits - deleteOrders.test.js.
As the endpoint we need to use "/api/v1/orders/:id" where "id" is the value of the variable "newCartId" logged to the console in the first test (postOrders.test.js).
For some reason this test has never passed; when sending HHTP request in Postman with different ID's of the created carts (XX) in response every time returns { "code": 404, "message": "Cart with id=XX not found"}

Warehouses endpoints
1. First test to run - getWarehouses.test.js.