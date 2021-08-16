## About this Work
This is a url-shortener for shorting links that are too long, to make sharing fast and easy

## Installation
Use [`npm install`]() command to install dependencies in both root folder of [`urlshortener`]() and in the [`GraphQL`]().
```
// root@root: /../../urlShortener
$ npm install
$ cd GraphQL
// root@root: /../../urlShortener/GraphQL
$ npm install
```

## Start-Up
Rename the [`env-example`]() file to .env and copy a sample to the GraphQL folder.
```
$ mv env-example .env
$ cp .env GraphQL/
```
When this done, input the mongodb url and other information inside it.

Start the server for REST and GraphQL by running `node index.js` in both folder
```
$ node index.js && cd GraphGL/ && node index.js

```

## Usage
There should be two things here, the first for REST and the second for GraphQL.

Method | Route | Controller
-------|-------|-------|
get | {{baseURL}}/ | allData
post | {{baseURL}}/ | URLpost
get | {{baseURL}}/:code | URLredirect

The playground for the GraphQL is at http://localhost:2224/graphql