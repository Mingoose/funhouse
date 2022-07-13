import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import styled from "styled-components";

export default function Product(props) {
    const { product, onBackClick } = props;
    const [currSize, setCurrSize] = useState('M');
    const {user, setUser} = useContext(UserContext);
    const onSizeClick = (size) => {
        setCurrSize(size);
    }
    const addToCart = () => {
        console.log(user);
        let cart = user.cart;
        cart.push(product.name);
        setUser({cart});
    }
    console.log(user);
    const Row = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `;
    const Col = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `;
    return(
      <Row>
        <Col>
          <img src={product.img} alt={product.name} height="200px" width="200px" onClick={onBackClick}></img>
        </Col>
        <Col>
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
          <h4>{product.description}</h4>
          <DropdownButton id="dropdown-basic-button" title={currSize}>
            <Dropdown.Item onClick={() => onSizeClick('XS')}>XSMALL</Dropdown.Item>
            <Dropdown.Item onClick={() => onSizeClick('S')}>SMALL</Dropdown.Item>
            <Dropdown.Item onClick={() => onSizeClick('M')}>MEDIUM</Dropdown.Item>
            <Dropdown.Item onClick={() => onSizeClick('L')}>LARGE</Dropdown.Item>
            <Dropdown.Item onClick={() => onSizeClick('XL')}>XLARGE</Dropdown.Item>
          </DropdownButton>
          <button onClick={() => addToCart(product.name)}> Add to Cart </button>
        </Col>
      </Row>
    )
  }
  