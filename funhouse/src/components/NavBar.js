import { NavbarLink } from "../styles/NavStyle";

export default function NavBar() {
    return(
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
        <br/>
        <NavbarLink to="/cart">Cart</NavbarLink>
    </nav>
    );
}