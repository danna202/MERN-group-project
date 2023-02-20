//Dependencies
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const cors = require('cors')

//Configuration 
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Root
app.get('/', (req,res) => {
    res.status(200).json({
        message: 'Welcome to OrderIn!'
    })
})

//controllers 
const menuController = require('./controllers/menu_controller')
app.use('/menu', menuController)


//Listen
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})