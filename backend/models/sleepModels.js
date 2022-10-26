const mongoose = require('mongoose')

const sleepSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    hour: {
        type: Number,
        require: true,
    },
    days: {
        type: String,
        enum: ['Mon', 'Tue', "Wed", "Thu", "Fri", "Sat", "Sun"],
        require: true,
    },
    feeling: {
        type: String,
        enum: ['Bad', 'Good', "Best"],
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
}, {timestamps: true})

module.exports = mongoose.model("Sleeps", sleepSchema);