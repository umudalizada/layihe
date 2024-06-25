const mongoose = require("mongoose")

const heroSchema = mongoose.Schema({
    image: { type: String, required: true, trim:true },
})

module.exports = mongoose.model("Hero", heroSchema)