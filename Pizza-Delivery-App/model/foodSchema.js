const mongoose = require('../packages').mongoose;

const foodItemSchema = new mongoose.Schema({
    foodName : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    foodPrice : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('food', foodItemSchema);