const mongoose = require("mongoose")

const reklamSchema = mongoose.Schema({
    image: { type: String, required: true, trim:true },
    reklamLink: { type: String, required: true, trim:true },
})

module.exports = mongoose.model("Reklam", reklamSchema)