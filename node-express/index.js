const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true}, 
(error) => {
    if(error) {
        console.log("No database connection could be made.");
    } else if(!error) {
        console.log("Connected to the database.");
    }
})

app.use("/films", require("./routes/films.js"));
app.use("/bookings", require("./routes/bookings.js"));

const server = app.listen(3001, () => {
    console.log(`Server started successfully on port: ${server.address().port}`);
})

server.on("close", () => {
    mongoose.connection.close();
})

module.exports = server;