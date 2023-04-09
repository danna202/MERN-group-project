import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


function Edit(props) {
  const [foodName, setFoodName] = useState(props.menuItem.food_name);
  const [customerName, setCustomerName] = useState(props.menuItem.customer_name);
  const [price, setPrice] = useState(props.menuItem.price);
  const [descript, setDescript] = useState(props.menuItem.descript);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedMenuItem = {
      food_name: foodName,
      customer_name: customerName,
      price: price,
      descript: descript,
    };
    props.handleEdit(props.menuItem.id, updatedMenuItem);
  };

  const handleClick = (event) => {
    event.stopPropagation();
  }

  return (
    <div onClick={handleClick}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="foodName">
          <Form.Label>Food/Beverage</Form.Label>
          <Form.Control
            type="text"
            value={foodName}
            onChange={(event) => setFoodName(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="customerName">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control
            type="text"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Special Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descript}
            onChange={(event) => setDescript(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
        <Button variant="secondary" href="http://localhost:3000/menu">
        Cancel
      </Button>
      </Form>
    </div>
  );
}

export default Edit;