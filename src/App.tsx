import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Edit from './components/Edit';
import AddItem from './components/AddItem';
import './SCSS/style.scss';


function App() {
  return (
    <Router>
      

        <NavBar />
      

        <div>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/menu" element={<MenuWrapper />} />
            <Route path="/about" element={<About />} />
            <Route path="/edit/:id" component={ Edit } />
            <Route path="/add" component={ AddItem } />
          </Routes>
        </div>

      
    </Router>
  );
}

function MenuWrapper() {
  const location = useLocation();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/menu')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error(error));
  }, []);

  return location.pathname === '/menu' ? <Menu menuItems={menuItems} /> : null;
}

export default App;