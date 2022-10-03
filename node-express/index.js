const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

// Decide on database name for connection!
// mongoose.connect("mongodb://localhost:27017/", {useNewUrlParser : true}, 
// (error) => {
//     if(error) {
//         console.log("No database connection could be made.");
//     } else if(!error) {
//         console.log("Connected to the database.");
//     }
// })

const server = app.listen(3001, () => {
    console.log(`Server started successfully on port: ${server.address().port}`);
})

// server.on("close", () => {
//     mongoose.connection.close();
// })

module.exports = server;