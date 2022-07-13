import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";

export default function Product(props) {
    const { product, onBackClick } = props;
    const [currSize, setCurrSize] = useState('M');
    const {user, setUser} = useContext(UserContext);
    const onSizeClick = (size) => {
        setCurrSize(size);
    }
    const addToCart = () => {
        setUser({cart: [...user.cart, product.name]});
    }
    console.log(user);
    return(
      <div>
         {product.name}
         <img src={product.img} alt={product.name} height="200px" width="200px" onClick={() => onBackClick()}></img>
         <DropdownButton id="dropdown-basic-button" title={currSize}>
          <Dropdown.Item onClick={() => onSizeClick('XS')}>XSMALL</Dropdown.Item>
          <Dropdown.Item onClick={() => onSizeClick('S')}>SMALL</Dropdown.Item>
          <Dropdown.Item onClick={() => onSizeClick('M')}>MEDIUM</Dropdown.Item>
          <Dropdown.Item onClick={() => onSizeClick('L')}>LARGE</Dropdown.Item>
          <Dropdown.Item onClick={() => onSizeClick('XL')}>XLARGE</Dropdown.Item>
        </DropdownButton>
         price
         description
         <button onClick={() => addToCart(product.name)}> Add to Cart</button>
      </div>
    )
  }
  