/*'use strict'
 http= require('http');
const server= http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hola mundo');
});
server.listen(5000);*/

const express=require('express')
const app=express()
const port=3000
const animalRoutes=require('./routes/animalRoutes')
const authRoutes=require('./routes/authentication')
const mongoose=require('mongoose')
require('dotenv').config()
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
app.use('/api/animals',animalRoutes);
app.use('/api/auth',authRoutes);
app.use(express.json());
//conexion a la db
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('Conectado a MongoDB'))
.catch(err=>console.error(err));

app.get('/',(req,res)=>{
    res.send('¡Hola Sergio!')
})

app.listen(port,()=>{
    console.log('La aplicacion se esta ejecutando por http://localhost:'+port)
})