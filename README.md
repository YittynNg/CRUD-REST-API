# CRUD-REST-API
CRUD application in Node.js by using MEN stack

REST API that can:
- request data from HTTP server (GET)
- send data to HTTP server and save in database (POST)

Sample client request:
- GET https://localhost:9000/[var]
- GET https://localhost:9000/[var]/[id]
- POST https://localhost:9000/[var]
- PATCH https://localhost:9000/[var]/[id]

## Tools needed to build the API
- Web browser: Platform for client to request and send data
- Node.js: Runtime
- Express: Framework to maintain code
- MongoDB: Database
- POSTMAN: API tester  (Download desktop version to test API)
- VSCode: Editor

## Installation
1. Clone the repository
2. **npm install express**, **npm install mongodb**, **npm install mongoose** for production purpose
3. **npm -g install nodemon --save-dev** for development purpose

## Create data
Insert body message as JSON format and follow database Schema (required for all), then **POST https://localhost:9000/aliens**

## Read data
**GET https://localhost:9000/aliens**

**GET https://localhost:9000/aliens/[id]**

## Update data
Insert updated body message as JSON format (not required for all), then **PATCH https://localhost:9000/aliens/[id]**
