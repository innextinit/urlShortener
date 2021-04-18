const  gpl = require("graphql-tag")

const typeDefs =`
    type urlSchema {
        url: String!
        shortURL: String!
        shortCode: String!
        date: String!
    }

    type Query {
        getURLs: [urlSchema]
        getURL(shortURL: String!): urlSchema
    }

    type Mutation {
        postURL(url: String!, shortURL: String, shortCode: String, date: String): urlSchema 
    }
`

module.exports = typeDefs