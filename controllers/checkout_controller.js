//dependencies
const checkouts = require('express').Router()
const db = require('../models')
const { Checkout } = db

//checkout
checkouts.get('/', async (req,res) => {
    try {
        const foundCheckout = await Checkout.findAll()
        res.status(200).json(foundCheckout)
    }catch(err){
        res.status(500).json(err)
    }
})

//checkout by ID
checkouts.get('/:id', async (req,res) => {
    try{
        const foundCheckout = await Checkout.findOne({
            where: { order_id: req.params.id }
        })
        res.status(200).json(foundCheckout)
    } catch(err) {
        res.status(500).json(err)
    }
})

//create checkout 
checkouts.post('/', async (req,res) => {
    try{
       const newCheckout = await Checkout.create(req.body)
       res.status(200).json({
        message: 'Created Checkout',
        data: newCheckout
       }) 
    }catch(err) {
        res.status(500).json(err)
    }
})

//update Checkout
checkouts.put('/:id', async (req,res) => {
    try{
        const updatedCheckout = await Checkout.update(req.body, {
            where: {
                checkout_id: req.params.id
            }
        })
        res.status(200).json({
            message:`Successfully updated ${updatedCheckout} checkout!`
        })
    }catch(err){
        res.status(500).json(err)
    }
})

//delete checkout
checkouts.delete('/:id', async (req,res) => {
    try{
        const deletedCheckout = await Checkout.destroy({
            where:{
                checkout_id: req.params.id
            }
        })
        res.status(200).json({
            message:`Successfully deleted ${deletedCheckout} checkout!`
        })
    }catch(err){
        res.status(500).json(err)
    }
})

//export 
module.exports = checkouts