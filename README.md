# Vasiliy Freiberg — Sprint 7 project - 


# Description of the project
In this project we need to test the Urban Grocers app using test automotation for GET, POST, PUT, and DELETE HTTP requests.


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
Also we log in the console value of the variable "newKitId" which will be used in the endpoints of the next tests.
3. Third test to run - putKits.test.js.
As the endpoint we need to use "/api/v1/kits/:id" where "id" is the value of the variable "newKitId" logged to the console in the second test (getKits.test.js).
4. Fourth and the last test for kits - deleteKits.test.js.
As the endpoint we need to use "/api/v1/kits/:id" where "id" is the value of the variable "newKitId" logged to the console in the second test (getKits.test.js).

Orders endpoints
1. First test to run - postOrders.test.js.
Also we log in the console value of the variable "newCartId" which will be used in the endpoints of the next tests.
2. Second test to run - getOrders.test.js.
As the endpoint we need to use following "/api/v1/orders/:id" where "id" is the value of the variable "newCartId" logged to the console in the first test (postOrders.test.js).
3. Third test to run - putOrders.test.js.
As the endpoint we need to use "/api/v1/orders/:id/complete" where "id" is the value of the variable "newCartId" logged to the console in the first test (postOrders.test.js).
4. Fourth and the last test for kits - deleteOrders.test.js.
As the endpoint we need to use "/api/v1/orders/:id" where "id" is the value of the variable "newCartId" logged to the console in the first test (postOrders.test.js).
For some reason this test has never passed; when sending HHTP request in Postman with different ID's of the created carts (XX) in response every time returns { "code": 404, "message": "Cart with id=XX not found"}

Warehouses endpoints
1. First test to run - getWarehouses.test.js.