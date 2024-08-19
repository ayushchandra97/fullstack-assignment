const port = 8000
const mongodb_url = "mongodb://localhost:27017/HelpCenterCard"

const express = require("express")
const app = express()

const cors = require("cors")
const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const Card = require("./models/Card")

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(mongodb_url)


app.get("/", (req,res) => {
    res.send("<h1 style='text-align:center'>Hello World</h1>")
})

app.get("/ping", (req,res) => {
    res.send("<h1 style='text-align:center'>Server is running</h1>")
})

app.post("/cards", async (req,res) => {
    try {

        if(!req.body.title) throw {status: 400, message: "Title is required"}

        if(!req.body.description) throw {status: 400, message: "Description is required"}


        const id = uuidv4()
            
        const card = new Card({
            id: id,
            title: req.body.title,
            description: req.body.description
        })

        await card.save()
        res.json({
            success: true,
            data: card
        })

    } catch (error) {
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0]
            res.status(409).json({
                success: false,
                message: `${field} must be unique`
            })
        } else {
            res.json(error.status || 500).json({
                success: false,
                message: error.message || "Internal Server Error"
            })
        }
    }
})

app.get("/cards", async (req,res) => {
    try {
        const cards = await Card.find({})

        if(!cards) throw {status: 404, message: "Cards do not exist"}

        res.json({
            success: true,
            data: cards
        })    
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal Server Error"
        })
    }
})


/*  
This API can also be handled using libraries like slugify. That would require a 'slug' field in the 'Card' model & ':slug' parameter in this API route. I did it within the requirements.
*/

app.get("/cards/:title", async (req,res) => {
    try {

        paramsTitle = req.params.title.toLowerCase()
        let cardFound = null
        let oldTitle

        const cards = await Card.find({})

        for (const card of cards) {
            oldTitle = card.title
            card.title = card.title.toLowerCase().replace(/[\s\W-]+/g, '-')
            if (card.title ===  paramsTitle) {
                cardFound = card
                cardFound.title = oldTitle
                break
            }
        }
        
        if (cardFound) {
            res.status(200).send(cardFound)
        } else {
            throw { status: 404, message: "Card does not exist" }
        }

    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal Server Error"
        })
    }
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})