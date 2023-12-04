const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins");
const cors = require('cors');

dotenv.config();

app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://New_user:ooMjahtXWEVBSs4b@cluster0.qvqpnuv.mongodb.net/',{  useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,   })
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log(err));

app.use('/api/pins',pinRoute)
app.listen(8800,()=>{
    console.log("Backend running")
})

