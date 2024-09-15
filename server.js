const express = require("express");
const app = express();
require("dotenv").config();
const OnePiece = require('./models/one_piceM')
const onePieceRoutes = require('./routes/one_piceR'); // Correctly importing the router

const port = process.env.PORT || 3000;
//----------------------------imports --------------------------
app.use(express.json());
app.get('/',(req, res) => {
    res.send(" hello: world");
});

app.use('/OnePiece',onePieceRoutes)

//----------------------------server ---------------------------
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})