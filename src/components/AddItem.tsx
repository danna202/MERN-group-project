import React from 'react';
import { Form, Button } from 'react-bootstrap';

type MenuItem = {
  order_id: string;
  food_name: string;
  customer_name: string;
  price: string;
  descript: string;
};

type AddItemProps = {
  handleAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  newMenuItem: MenuItem;
  setNewMenuItem: React.Dispatch<React.SetStateAction<MenuItem>>;
  showAddModal: boolean;
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddItem({
  handleAdd,
  newMenuItem,
  setNewMenuItem,
  showAddModal,
  setShowAddModal,
}: AddItemProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleAdd(event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNewMenuItem((prevMenuItem) => ({
      ...prevMenuItem,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formOrderID">
        <Form.Label>Order ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Order ID"
          name="order_id"
          value={newMenuItem.order_id}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formFoodName">
        <Form.Label>Food/Beverage</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Food Name"
          name="food_name"
          value={newMenuItem.food_name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formCustomerName">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Customer Name"
          name="customer_name"
          value={newMenuItem.customer_name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Price"
          name="price"
          value={newMenuItem.price}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Special Instructions</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter Description"
          name="descript"
          value={newMenuItem.descript}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="secondary" onClick={() => setShowAddModal(false)}>
        Cancel
      </Button>
    </Form>
  );
}

export default AddItem;