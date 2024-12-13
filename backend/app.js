const express = require('express')
const app = express();
const cors = require('cors');

const methodsRoute = require('./Routes/methodsRoute')

app.use(cors());
app.use(express.json());

app.get("/api" , (req, res) => {
    res.json("CONNECTED!");
})

app.use('/api/methods' , methodsRoute);

const port = process.env.PORT || 4000;

app.listen(port , () => {
    console.log(`Listening to server at ${port}!`)
})