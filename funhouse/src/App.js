import { Outlet, Link } from "react-router-dom";
import { NavbarLink } from "./styles/NavStyle";
import funhouseGif from "./images/funhouse.gif";
export default function App() {
  return (
    <div>
      <h1>Funhouse</h1>
      <nav
        style={{ listStyleType: "none", padding: 0 }}
      >
        <NavbarLink to="/">Home</NavbarLink>
        <br/>
        <NavbarLink  to="/game">Game</NavbarLink>
        <br/>
        <NavbarLink to="/shop">Shop</NavbarLink>
        <br/>
        <NavbarLink to="/about">About</NavbarLink>
        <br/>
        <NavbarLink to="/contact">Contact</NavbarLink>
      </nav>
      <img src={funhouseGif} alt="Funhouse Gif" width="200" height="300"/>
    </div>
  );
}