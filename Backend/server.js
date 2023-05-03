import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();


// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());





// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));


dotenv.config();


//local server config
// mongoose.connect("mongodb://localhost/quoraservr_db",
//     { useNewUrlParser: true, useUnifiedTopology: true, family: 4 },
//     err => {
//         if (err) throw err;
//         console.log("db connected")
//         // finds a database called website_db, if it does not exist. it will create the datatbase it self
//     });
// mongoose.Promise = global.Promise;

// const port = 3024
// app.listen(port, () => {
//     console.log(`Running ${port}`) 
// })


const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));



