//Dependencies
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

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

//controllers 
const menuController = require('./controllers/menu_controller')
app.use('/menu', menuController)
const orderController = require('./controllers/order_controller')
app.use('/order', orderController)

//Listen
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})