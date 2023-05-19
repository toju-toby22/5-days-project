const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('./connection');
require('dotenv').config();
const server = http.createServer(app);
const {Server} = require('socket.io');


const io = new Server(server, {
  cors: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PATCH', "DELETE"]
})


const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const imageRoutes = require('./routes/imageRoutes');
const { default: mongoose } = require('mongoose');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/images', imageRoutes);





server.listen(5080, ()=> {
  console.log('server running at port', 5080)
})

app.set('socketio', io);







// local server config
// mongoose.connect("mongodb://localhost/jumia_db",
//     { useNewUrlParser: true, useUnifiedTopology: true, family: 4 },
//     err => {
//         if (err) throw err;
//         console.log("db connected")
//         // finds a database called website_db, if it does not exist. it will create the datatbase it self
//     });
// mongoose.Promise = global.Promise;

// const port = 5080
// app.listen(port, () => {
//     console.log(`Running ${port}`) 
// })

