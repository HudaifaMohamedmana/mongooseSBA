const express = require("express");
const app = express();
require("dotenv").config();
const Pirates = require('./models/PiratesM')
const PiratesRoutes = require('./routes/PiratesR');
const NavyRoutes = require('./routes/NavyR');


const port = process.env.PORT || 3000;
//----------------------------imports --------------------------
app.use(express.json());
app.get('/',(req, res) => {
    res.send(" hello: world");
});

app.use('/Pirates',PiratesRoutes)
app.use('/Navy',NavyRoutes)


//----------------------------server ---------------------------
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})