const validURL = require("valid-url")
const URL = require("../module/url-module")
const path = require("path")
const { systemURL } = process.env

class controller {
    static async welcome(req, res, next) {
        try {
            return res.sendFile(path.join(__dirname, "..", "/README.md"))
        } catch (error) {
            next(error)
        }
    }

    static async URLpost(req, res, next) {
        try {
            const url = req.body.url
            if (validURL.isUri(url)) {
                let foundURL = await URL.findOne({url: url})
                if (foundURL) {
                    return res.json(foundURL)
                }
                let shortCode = generateShortCode()
                let foundShortCode = await URL.findOne({shortCode: shortCode})
                if (foundShortCode) {
                    shortCode = generateShortCode()
                }
                const shortURL = systemURL + "/" + shortCode
                const cretedDetails = 
                await new URL({
                    url: url,
                    shortURL: shortURL,
                    shortCode: shortCode
                }).save()
                return res.status(201).json(cretedDetails)
            }
        } catch (error) {
            next(error)
        }
    }

    static async URLredirect(req, res, next) {
        try {
            const shortCodeFromParams = req.params.code
            const foundURL = await URL.findOne({shortCode: shortCodeFromParams})
            if (foundURL) {
                return res.redirect(foundURL.url)
            }
            return res.status(404).json("No URL Found")
        } catch (error) {
            next(error)
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

module.exports = controller