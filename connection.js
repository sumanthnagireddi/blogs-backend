const mongoose = require('mongoose')


const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://sumanthnagireddi:2516@blogstore.m5tv4ca.mongodb.net/store?retryWrites=true&w=majority`)
        console.log("connection established");
    } catch (error) {
        console.log(`connection error:${error}`);
    }
}

module.exports = connect;