//Dependencies
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


//Configuration 
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Sql connection 
const sequelize = new Sequelize(process.env.PG_URI)
try{
    sequelize.authenticate()
    console.log(`Connected at ${process.env.PG_URI}`)
}catch(err) {
    console.log(`unable to connect to PG ${err}`)
}
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