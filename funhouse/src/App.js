import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { UserContext } from "./UserContext";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

