# GuideSmiths Backend Code Challenge

### NodeJS - Express - MongoDB - React - Redux


## Requirements 

* MongoDB
* NodeJS
* Express
* React
* Redux


## Install

* Clone Repo with https://github.com/cerra88/GuideSmithsPhones
* Run `npm install` command
* Go to /backend folder and Run `npm install` command again.
* Make sure MongoDB server is running, after that execute:
 `npm run installDB` (this command create de Database and import all data of phones from a json)

* Execute on /backend folder `npm start` , for run the API on the backend.
* Finally go to /phones folder and execute `npm start` again for run the Frontend.


Note: By default , backend is running in port 3008 and frontend is running on port 3000


## API Methods

### Phones (GET)

* Complete list of Phones:
`http://localhost:3001/api/phones`

* Detail of a specific Phone
`http://localhost:3001/api/phones/detail/:id`