const mongoose = require('mongoose')


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URI)
        console.log("connection established");
    } catch (error) {
        console.log("connection error");
    }
}

module.exports = connect;