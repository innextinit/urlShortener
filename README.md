## About this Work
This is a url-shortener for shorting links that are too long, to make sharing fast and easy

## Installation
Use [`npm install`]() command to install dependencies.
```
$ npm install
```

## Start-Up
Rename the [`env-example`]() file to .env
```
$ mv env-example .env
```
When this done, input the mongodb url and other information inside it. Start the server by running
```
$ node Index.js
```

## Usage
There should be two things here, the first for REST and the second for GraphQL.

Method | Route | Controller
-------|-------|-------|
get | {{baseURL}}/ | welcome
post | {{baseURL}}/ | URLpost
get | {{baseURL}}/:code | URLredirect