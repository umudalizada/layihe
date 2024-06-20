const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: { type: String, required: true, trim:true },
    name: { type: String, required: true, trim:true  },
    lastname: { type: String, required: true, trim:true  },
    email: { type: String, required: true, trim:true  },
    password: { type: String, required: true, trim:true  },
    orders: { type: Array, required: true, trim:true  },
    user: { type: Boolean, required: true, trim:true  },
})

module.exports = mongoose.model("User", userSchema)