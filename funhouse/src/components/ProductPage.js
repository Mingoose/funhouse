import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import styled from "styled-components";
import { BiArrowBack }  from "react-icons/bi";

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
        cart.push([product, currSize]);
        setUser({cart});
    }
    console.log(user);
    const Row = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `;
    const Col = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: left;
    `;
    const StyledDropdown = styled(Dropdown)`
        background-color: #f5f5f5;
        color: black;
        margin-right: 5px;
    `
    const StyledDropdownToggle = styled(Dropdown.Toggle)`
        background-color: white;
        border-color: black;
        border-radius: 0;
        border-width: 2px;
        width: 150px;
        height: 30px;
        color: black;
        padding: 0;
        &:hover {
            background-color: #f5f5f5;
            border-color: black;
            color: black;
        };
        &[aria-expanded='true']::hover{
          content: "Read this: ";
        }
    `
    const StyledDropdownMenu = styled(Dropdown.Menu)`
        background-color: #f5f5f5;
        border-color: black;
        border-radius: 0;
    `
    const StyledDropdownItem = styled(Dropdown.Item)`
        &:active {
            background-color: #f5f5f5;
        }
    `
    const AddToBag = styled.button`
        background-color: #505050;
        border: none;
        width: 150px;
        height: 30px;
        color: white;
        margin-left: 5px;
        &:active {
            background-color: #707070;
        }
    `
    const Banner = styled(Row)`
    flex-direction: row;
    justify-content: start;
    `
    const Body = styled(Row)`
    align-items: start;
    `
    const ProductName = styled.h3`
    font-family: "helvetica";
    `
    const ProductDescription = styled.p`
    font-family: "helvetica";
    `
    return(
      <div>
        <Banner>
          <BiArrowBack onClick={() => onBackClick()} size="70px"/>
        </Banner>
        <Body>
          <Col>
            <img src={product.img} alt={product.name} height="400px" width="400px"></img>
          </Col>
          <Col>
            <ProductName>{product.name.toUpperCase()}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <h4>{product.price}</h4>
            <Row>
              <StyledDropdown>
                <StyledDropdownToggle variant="secondary">
                  {currSize}
                </StyledDropdownToggle>
                <StyledDropdownMenu>
                  <StyledDropdownItem onClick={() => onSizeClick('XS')}>XSMALL</StyledDropdownItem>
                  <StyledDropdownItem onClick={() => onSizeClick('S')}>SMALL</StyledDropdownItem>
                  <StyledDropdownItem onClick={() => onSizeClick('M')}>MEDIUM</StyledDropdownItem>
                  <StyledDropdownItem onClick={() => onSizeClick('L')}>LARGE</StyledDropdownItem>
                  <StyledDropdownItem onClick={() => onSizeClick('XL')}>XLARGE</StyledDropdownItem>
                </StyledDropdownMenu>
              </StyledDropdown>
              <AddToBag onClick={() => addToCart(product)}> Add to Bag </AddToBag>
            </Row>
          </Col>
        </Body>
      </div>
    )
  }
  