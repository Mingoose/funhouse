import { NavbarLink } from "../styles/NavStyle";
import Product from "../components/Product.js";
import BlueShirt from '../images/blue_shirt.png'
import GreenShirt from '../images/green_shirt.png'
import { useState } from "react";
import { useEffect } from "react";
import ProductPage from './ProductPage';
const axios = require('axios');

export default function Shop() {
  const [clothingList, setClothingList] = useState([]);
  const [productOpen, setProductOpen] = useState(true);
  const [currentProduct, setCurrentProduct] = useState({})
  const onProductClick = (product) => {
    setCurrentProduct(product);
  }

  const onBackClick = () => {
    setProductOpen(false);
  }

  useEffect(() => {
    console.log(currentProduct);
    setProductOpen(!productOpen);
  }, [currentProduct]);

  useEffect(() => {
    axios.get('http://localhost:10000/product')
    .then(res => {
      console.log(res.data);
      setClothingList(res.data);
    });
  }, []);

  let all_clothing = clothingList.map((cloth) => (
    <Product key={cloth.name} product={cloth} onProductClick={onProductClick} />
  ));
  if(productOpen === false){
    console.log(productOpen);
    return (
      <div>
        <h1>Funhouse</h1>

        <nav style={{ listStyleType: "none", padding: 0 }}>
          <NavbarLink to="/">Home</NavbarLink>
          <br />
          <NavbarLink to="/game">Game</NavbarLink>
          <br />
          <NavbarLink to="/shop">Shop</NavbarLink>
          <br />
          <NavbarLink to="/about">About</NavbarLink>
          <br />
          <NavbarLink to="/contact">Contact</NavbarLink>
        </nav>

        <main style={{ padding: "1rem 0" }}>
          <h2>Shop</h2>

          <tbody>{all_clothing}</tbody>
        </main>
      </div>
    );
  } else {
    return(
      <ProductPage product={currentProduct} onBackClick={onBackClick} />
    );
  }
}
