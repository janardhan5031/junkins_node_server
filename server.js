
const express = require('express')

const server = express()

server.use('/',(req,res)=>{
    res.send('Hello world')
})

server.listen(4000,()=>console.log('server is running at http://localhost:4000'))
