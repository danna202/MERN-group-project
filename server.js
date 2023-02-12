//Dependencies
const express = require('express')
const app = express()



//Configuration 
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Root
app.get('/', (req,res) => {
    res.status(200).json({
        message: 'Welcome to OrderIn!'
    })
})

//Listen
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})