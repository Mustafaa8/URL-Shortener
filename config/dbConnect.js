const mongoose = require('mongoose')

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.CONN_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
    } catch(err){
        console.error(err)
    }
}

module.exports = dbConnect;