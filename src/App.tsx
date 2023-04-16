import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Edit from './components/Edit';
import AddItem from './components/AddItem';
import './SCSS/style.scss';

interface OrderMenuItem extends MenuItems {
  order_id: number;
  customer_name: string;
}

interface MenuItems {
  id: number;
  name: string;
  description: string;
  price: number;
}

function App(): JSX.Element {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/menu" element={<MenuWrapper />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route
            path="/add"
            element={
              <AddItem
                handleAdd={() => {}}
                newMenuItem={{ id: 0, name: '', description: '', price: 0 }}
                setNewMenuItem={() => {}}
                showAddModal={false}
                setShowAddModal={() => {}}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function MenuWrapper(): JSX.Element | null {
  const location = useLocation();
  const [menuItems, setMenuItems] = useState<OrderMenuItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/menu')
      .then((response: Response) => response.json())
      .then((data: OrderMenuItem[]) => setMenuItems(data))
      .catch((error: Error) => console.error(error));
  }, []);

  return location.pathname === '/menu' ? <Menu menuItems={menuItems} /> : null;
}

export default App;