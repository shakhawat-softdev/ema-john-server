const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000


// middleware
app.use(express());
app.use(cors());


app.get('/', async (req, res) => {
   res.send("Ema-john is Running............")
});



app.listen(port, () => {
   console.log(`Ema john server is running on port ${port}`);
})