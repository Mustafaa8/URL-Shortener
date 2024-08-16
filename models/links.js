const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const linkSchema = new Schema({
    originalLink:{
        type: String,
        required: true
    },
    shortedId:{
        type: String,
        required: true
    }
})

const link = mongoose.model("link",linkSchema)
module.exports = link;