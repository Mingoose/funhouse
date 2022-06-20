import {Link} from "react-router-dom";
import styled from "styled-components";
export const NavbarLink = styled(Link)`
color:black;
font-size: large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
&:hover{
    background-color:black;
    color:white;
}
&:active{
    color: grey;
};`;