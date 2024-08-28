const mongoose = require('mongoose')
require('dotenv').config();
const databaseConnection = () => {
    mongoose.connect(process.env.DB,{
    }).then((data)=>{
        console.log(`database connected successfully at server ${data.connection.host}`)
    })
}

module.exports = databaseConnection