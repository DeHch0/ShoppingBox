# React-project
 
## Description 

 React-project Shopify is a single page application (SPA) that let you to buy products like clothes,shoest and etc.
 
 ## Build with
 
  * [React](https://reactjs.org/) -A JavaScript library for building user interfaces
  * [MongoDb](https://mongodb.com) - MongoDB is a document database, which means it stores data in JSON-like documents.
  * [mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js.
  * [ExpressJS](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework.
  * [NodeJS](https://nodejs.org/en/) - Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.

## How to set up the project?

   1. First you have to start MongoD typing `mongod` in terminal. 
   If ypu don\`t have it, please install it [MongoDb](https://mongodb.com) .
   2. Write `npm install` in terminal for both directories - _client-side_ and _REST API_. 
   
   ###### bcrypt
   If you hit a problem with bcrypt while installing dependencies, try `npm install bcrypt@3.0.6`.
   
   3. In  _client-side_ write `npm start` in terminal. It will run the project at http://localhost:3000 .
   4. in _REST API_ directory write `node index` in terminal. It will run the server at http://localhost:8080 .
   
## Features
  * Anonymouse users
      * Login/Register
      * View home page
	  * View products by gender.
	  * View any product without option to add it in the cart.
  
  * Logged in users
      * View all products.
      * Can put products in cart.

  * Admin part
	  * Create Product
	  * Edit Product
	  * Remove Product
	  * Create Category
	  * Delete Category
	  * Edit User
	  * Remove User



