const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.models.Card || mongoose.model('Card', cardSchema)