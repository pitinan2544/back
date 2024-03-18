require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const authenticate = require('./middlewares/authenticate')
const Record = require('./routes/record-route')
const member = require('./routes/member-route')


const app = express()

app.use(cors())
app.use(express.json())

//service 
app.use("/user",authRoute)
app.use("/record",Record)
app.use("/member",member)
app.use('/useronly',authenticate, (req,res,next)=>{
    res.json({user:req.user})
})


let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))