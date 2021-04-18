const urlSchema = require("../model/model")
const { systemURL } = process.env
let shortCode = generateShortCode()

const resolvers = {
  Query: {
    getURLs: (parent, args, context, info) =>{ 
      console.log("getURLs hit")
      return urlSchema.find() },
    getURL: async (parent, args, context, info) => {
      const { shortURL } = args
      if (shortURL) {
        return await urlSchema.findOne({ shortURL: shortURL })
      }
      throw new Error("Sorry, No URL Found")
    }
  },

  Mutation: {
    postURL: async (parent, args, context, info) => {
      console.log(args)
      const { url } = args
      const foundURL = await urlSchema.findOne({ url: url})
      if (foundURL) {
        return foundURL
      }
      const newURL = await new urlSchema({
        url: url,
        shortURL: systemURL + "/" + shortCode,
        shortCode: shortCode,
        date: Date.now().toString()
      }).save()
      return newURL
    }
  }
}

function generateShortCode(){
  let urlCode = String.fromCharCode(Math.floor(Math.random()*26)+97)
      + String.fromCharCode(Math.floor(Math.random()*26)+97)
      + String.fromCharCode(Math.floor(Math.random()*26)+97)
      + String.fromCharCode(Math.floor(Math.random()*26)+97)
      + String.fromCharCode(Math.floor(Math.random()*26)+97)
      + String.fromCharCode(Math.floor(Math.random()*26)+97)
  return urlCode
}

module.exports = resolvers