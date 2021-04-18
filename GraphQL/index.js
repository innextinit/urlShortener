require("dotenv").config()
const express = require("express")
const app = express()
const { ApolloServer, makeExecutableSchema } = require("apollo-server-express")
const resolver = require("./resolvers/resolver")
const typeDefs = require("./schema/schema")
const { PORT } = process.env

const schema = makeExecutableSchema({ typeDefs, resolver })
const apolloServer = new ApolloServer({ schema, })
apolloServer.applyMiddleware({ app })

app.listen( PORT, async () => {
  await require("./config/db-config")()
  console.log(`Process PID [${process.pid}] ::> Server listening @ http://localhost:${ PORT }${ apolloServer.graphqlPath }`)
})

module.exports = app