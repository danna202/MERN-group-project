//dependencies 
const menus = require('express').Router()
const db = require('../models')
const { Menu } = db
const { Op } = require('sequelize')

//menu
menus.get('/', async (req,res) => {
    try { 
        const foundItem = await Menu.findAll({
            order: [ [ 'id', 'ASC'] ],
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
            where: { order_id: req.params.id }
        })
        res.status(200).json(foundItem)
    }catch(err) {
        res.status(500).json(err)
    }
})
//create Item
menus.post('/', async (req, res) => {
  try {
    // Exclude the "id" attribute from the request body
    const { id, ...menuItemData } = req.body;
    const menuItem = await Menu.create(menuItemData);
    res.status(201).json(menuItem);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// update menu item
menus.put('/:id', async (req, res) => {
    try {
      const { food_name, descript, price } = req.body;
      const updatedMenu = await Menu.update(
        { food_name, descript, price },
        {
          where: { id: req.params.id },
          returning: true, // include the updated item in the response
          plain: true, // return only the updated item, not a wrapper object
        }
      );
      if (updatedMenu[0] === 0) {
        // no rows were updated
        res.status(404).json({ message: 'Menu item not found' });
      } else {
        // send the updated item back to the client
        res.status(200).json(updatedMenu[1]);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//delete menu item
menus.delete('/:id', async (req,res) => {
  try{ 
    console.log(req.params.id); // Check that the correct id is being received
    const deletedMenu = await Menu.destroy({
      where: {
        id: req.params.id
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