require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.pxx8hvs.mongodb.net/jumia__clone?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to JUMIA mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})

// g4gqCW5TXdytqtwD
// jumia__clone