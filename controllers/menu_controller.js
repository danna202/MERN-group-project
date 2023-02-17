//dependencies 
const menus = require('express').Router()
const db = require('../models')
const { Menu, Order } = db
const { Op } = require('sequelize')

//menu
menus.get('/', async (req,res) => {
    try { 
        const foundItem = await Menu.findAll({
            order: [ [ 'food_id', 'ASC'] ],
            where: {
                food_name: { [Op.like]: `%${req.query.name ? req.query.name: ''}%`}
            }
        })
        res.status(200).json(foundItem)
    }catch(error) {
        res.status(500).json(error)
    }
})

//specific menu item
menus.get('/:id', async (req,res) => {
    try{
        const foundItem = await Menu.findOne({
            where: { name: req.params.id},
            include: { 
                model: Order, 
                as: "order",
                where: { [Op.like]: `%${req.query.name ? req.query.name: ''}%`}
            }
        })
        res.status(200).json(foundItem)
    }catch(err) {
        res.status(500).json(err)
    }
})

//create menu item
menus.post('/', async (req,res) => {
    try{
        const newItem = await Menu.create(req.body)
        res.status(200).json({
            message:'Created new Menu item!',
            data: newItem
        })
    }catch(err){
        res.status(500).json(err)
    }
})

//update menu item
menus.put('/:id', async (req,res) => {
    try{
        const updatedMenu = await Menu.update(req.body, {
            where: {
                food_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Updated ${updatedMenu} Menu`
        })
    }catch(err){
        res.status(500).json(err)
    }
})

//delete menu item
menus.delete('/:id', async (req,res) => {
    try{ 
        const deletedMenu = await Menu.destroy({
            where: {
                food_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Deleted ${deletedMenu} from Menu`
        })
    }catch(err) {
        res.status(500).json(err)
    }
})

//export
module.exports = menus