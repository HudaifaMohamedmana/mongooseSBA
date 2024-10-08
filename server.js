const express = require("express");
const app = express();
require("dotenv").config();
const PiratesRoutes = require('./routes/PiratesR');
const NavyRoutes = require('./routes/NavyR');
const ShichibukaiRoutes = require('./routes/shichibukaiR');


const port = process.env.PORT || 3000;
//----------------------------imports --------------------------
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use((req, res, next) => {
    console.log(`A request happened: ${req.method} ${req.url}`);
    next();
  });

app.use(express.json());
app.get('/',(req, res) => {
    let data = ["hudaifa","bryan","shaq"]
    res.render('Index',{ data });
});

app.use('/Pirates',PiratesRoutes)
app.use('/Navy',NavyRoutes)
app.use('/Shichibukai',ShichibukaiRoutes)



//----------------------------server ---------------------------
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})