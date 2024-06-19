const mongoose = require("mongoose")

const ticketSchema = mongoose.Schema({
    image: { type: String, required: true, trim:true },
    name: { type: String, required: true, trim:true  },
    category: { type: String, required: true, trim:true  },
    price: { type: Number, required: true, trim:true  },
    iframe: { type: String, required: true, trim:true  },
    date: { type: Date, required: true, trim:true  },
    seans: { type: String, required: true, trim:true  },
})

module.exports = mongoose.model("Ticket", ticketSchema)