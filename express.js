const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const conn = require('./services/db');
conn.dbConnection();

const userRoutes = require('./routes/userRoutes');
app.use('/api/v1/users',userRoutes);


app.use('/*',(req,res)=>{
    res.send("no route found");
});

app.listen(4000,()=> console.log("connecte to port : 4000"));