import { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import Edit from "./Edit";
import AddItem from "./AddItem";
import React from "react";

interface OrderMenuItem {
  id: number;
  order_id: string;
  food_name: string;
  customer_name: string;
  price: string;
  descript: string;
}
interface MenuProps {
  menuItems: OrderMenuItem[];
}

function Menu({ menuItems }: MenuProps): JSX.Element {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<OrderMenuItem | null>(
    null
  );
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newMenuItem, setNewMenuItem] = useState<OrderMenuItem>({
    id: 0,
    order_id: "",
    food_name: "",
    customer_name: "",
    price: "",
    descript: "",
  });
  const [menuItemsState, setMenuItems] = useState<OrderMenuItem[]>(menuItems);

  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMenuItems(data);
        } else {
          throw new Error("Data is not an array.");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id: number) => {
    fetch(`http://localhost:4000/menu/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedMenuItems = menuItemsState.filter(
          (menuItem) => menuItem.id !== id
        );
        setMenuItems(updatedMenuItems);
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (id: number, updatedMenuItem: OrderMenuItem) => {
    fetch(`http://localhost:4000/menu/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMenuItem),
    })
      .then(() => {
        const updatedMenuItems = menuItemsState.map((menuItem) => {
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

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
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
        if (typeof data === "object") {
          setMenuItems([...menuItemsState, data]);
          setNewMenuItem({
            id: 0,
            order_id: "",
            food_name: "",
            customer_name: "",
            price: "",
            descript: "",
          });
          setShowAddModal(false);
        } else {
          throw new Error("Data is not an object.");
        }
      })
      .catch((error) => console.error(error));
  };


  return (
    <>
      <Button variant="success" onClick={() => setShowAddModal(true)}>
        Create Order
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order ID</th>
            <th>Food Name/Beverage</th>
            <th>Customer Name</th>
            <th>Price</th>
            <th>Special Instructions</th>
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
          <Modal.Title>Edit Order</Modal.Title>
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
          <Modal.Title>Add Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddItem key="menuItem.Id" handleAdd={handleAdd} newMenuItem={newMenuItem} showAddModal={showAddModal} setShowAddModal={setShowAddModal} setNewMenuItem={function (value: React.SetStateAction<{ order_id: string; food_name: string; customer_name: string; price: string; descript: string; }>): void {
            throw new Error("Function not implemented.");
          } } />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Menu;