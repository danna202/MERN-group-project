import { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import Edit from "./Edit";
import AddItem from "./AddItem";


function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMenuItem, setNewMenuItem] = useState({
    order_id: "",
    food_name: "",
    customer_name: "",
    price: "",
    descript: "",
  });

  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/menu/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedMenuItems = menuItems.filter(
          (menuItem) => menuItem.id !== id
        );
        setMenuItems(updatedMenuItems);
      })
      .catch((error) => console.error(error));
  };
  
  const handleEdit = (id, updatedMenuItem) => {
    fetch(`http://localhost:4000/menu/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMenuItem),
    })
      .then(() => {
        const updatedMenuItems = menuItems.map((menuItem) => {
          if (menuItem.id === id) {
            return { ...menuItem, ...updatedMenuItem };
          }
          return menuItem;
        });
        setMenuItems(updatedMenuItems);
        setShowEditModal(false);
        setSelectedMenuItem(null);
      })
      .catch((error) => console.error(error));
  };

  const handleAdd = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenuItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setMenuItems([...menuItems, data]);
        setNewMenuItem({
          order_id: "",
          food_name: "",
          customer_name: "",
          price: "",
          descript: "",
        });
        setShowAddModal(false);
      })
      .catch((error) => console.error(error));
  };


  return (
    <>
      <Button variant="success" onClick={() => setShowAddModal(true)}>
        Create Menu Item
      </Button>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Order ID</th>
      <th>Food Name</th>
      <th>Customer Name</th>
      <th>Price</th>
      <th>Description</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {menuItems.map((menuItem) => (
      <tr key={menuItem.id}>
        <td>{menuItem.id}</td>
        <td>{menuItem.order_id}</td>
        <td>{menuItem.food_name}</td>
        <td>{menuItem.customer_name}</td>
        <td>{menuItem.price}</td>
        <td>{menuItem.descript}</td>
        <td>
          <Button
            variant="primary"
            onClick={() => {
              setSelectedMenuItem(menuItem);
              setShowEditModal(true);
            }}
          >
            Edit
          </Button>
        </td>
        <td>
          <Button
            variant="danger"
            onClick={() => handleDelete(menuItem.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>

    
      <Modal show={showEditModal} onHide={() => {
        if (!selectedMenuItem) {
          setShowEditModal(false);
        }
      }}>
        <Modal.Header>
          <Modal.Title>Edit Menu Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMenuItem && (
            <Edit
              menuItem={selectedMenuItem}
              handleEdit={handleEdit}
            />
          )}
        </Modal.Body>
      </Modal>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header>
          <Modal.Title>Add Menu Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddItem key="menuItem.Id" handleAdd={handleAdd} newMenuItem={newMenuItem} setNewMenuItem={setNewMenuItem} showAddModal={showAddModal} setShowAddModal={setShowAddModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Menu;