import Product from "../components/Product.js";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import ProductPage from './ProductPage';
import NavBar from "./NavBar";
import { UserContext } from "../UserContext";
const axios = require('axios');

export default function Shop() {
  const [clothingList, setClothingList] = useState([]);
  const [productOpen, setProductOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({})

  const onProductClick = (product) => {
    setCurrentProduct(product);
  }

  const onBackClick = () => {
    setProductOpen(false);
    setCurrentProduct({});
  }

  useEffect(() => {
    console.log('currentproduct', currentProduct);
    if (Object.keys(currentProduct).length > 0) {
      console.log('not empty');
      setProductOpen(true);
    } else {
      setProductOpen(false);
    }
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

        <NavBar/>

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
