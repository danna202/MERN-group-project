//dependencies 
const orders = require('express').Router()
const db = require('../models')
const { Order } = db

//orders 
orders.get('/', async (req,res) => {
    try{
        const foundOrder = await Order.findAll()
        res.status(200).json(foundOrder)
    }catch(err) {
        res.status(500).json(err)
    }
})

//order by ID 
orders.get('/:id', async (req,res) => {
    try{
        const foundOrder = await Order.findOne({
            where: { order_id: req.params.id }
        })
    }catch(err) {
        res.status(200).json(err)
    }
})

//create Order
orders.post('/', async (req,res) => {
    try{
        const newOrder = await Order.create(req.body)
        res.status(200).json({
            message:'New Order Created',
            data: newOrder
        })
    }catch(err){
        res.status(500).json(err)
    }
})

//update order
orders.put('/:id', async (req,res) => {
    try {
        const updatedOrder = await Order.update(req.body, {
            where: {
                order_id: req.params.id
            }
        })
        res.status(200).json({
            message:`Successfully updated ${updatedOrder} order!`
        })
    }catch(err) {
        res.status(500).json(err)
    }
})

//delete order
orders.delete('/:id', async (req,res) => {
    try{
        const deletedOrder = await Order.destroy({
            where: {
                order_id: req.params.id
            }
        })
        res.status(200).json({
            message:`Successfully deleted ${deletedOrder} order`
        })
    }catch(err){
        res.status(500).json(err)
    }
})
//export
module.exports = orders