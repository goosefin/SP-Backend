const mongoose = require('mongoose')

const connectionStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SPDB'

mongoose.connect(connectionStr)

mongoose.connection.on('connected', ()=> console.log('DB connected... 🙌🙌🙌'));
mongoose.connection.on('error', (err)=> console.log(err.message));
mongoose.connection.on('disconnected', ()=> console.log('mongoose disconnected'));