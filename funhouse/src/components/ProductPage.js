import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";

export default function Product(props) {
    const { product, onBackClick } = props;
    const [currSize, setCurrSize] = useState('M');

    const onSizeClick = (size) => {
        setCurrSize(size);
    }
    return(
      <div>
         {product.name}
         <img src={product.img} alt={product.name} height="200px" width="200px" onClick={() => onBackClick()}></img>
         <DropdownButton id="dropdown-basic-button" title={currSize}>
          <Dropdown.Item onClick={() => onSizeClick('XS')}>XSmall</Dropdown.Item>
          <Dropdown.Item onClick={() => onSizeClick('S')}>Small</Dropdown.Item>
          <Dropdown.Item onClick={() => onSizeClick('M')}>Medium</Dropdown.Item>
        </DropdownButton>
         price
         description
         <button> Add to Cart</button>
      </div>
    )
  }
  