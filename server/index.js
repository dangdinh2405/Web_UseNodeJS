// 5. Node.js Server Setup: Write a Node.js script to set up a server 
// for the project management website. 
// The server should listen on a specified port and serve a static index.html file.

// 6. Express.js Routing: Using Express.js in a Node.js application, 
// write route handlers to manage GET and POST 
// requests for adding and viewing projects.

// 7. MongoDB Connection: Write a Node.js script to connect to a 
// MongoDB database and log a message on successful 
// connection or an error on failure.

const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()
const Routes = require("./routes/route.js")
const path = require('path');
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("Connect Fail", err))

app.use('/', Routes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})