import { NavbarLink } from "../styles/NavStyle";
import Product from "../components/Product.js";
import BlueShirt from '../images/blue_shirt.png'
import GreenShirt from '../images/green_shirt.png'
import { useState } from "react";
import { useEffect } from "react";
import ProductPage from './ProductPage';
export default function Shop() {
  let blueshirt = { name: "blue_shirt", img: BlueShirt };
  let greenshirt = { name: "green_shirt", img: GreenShirt};
  let clothing = [blueshirt, greenshirt];
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

  let all_clothing = clothing.map((cloth) => (
    <Product name={cloth.name} img={cloth.img} onProductClick={onProductClick} />
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
    console.log('hello');
    console.log(currentProduct);
    return(
      <ProductPage name={currentProduct.name} img={currentProduct.img} onBackClick={onBackClick} />
    );
  }
}
