import { Outlet, Link } from "react-router-dom";
import { NavbarLink } from "./styles/NavStyle";
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
      </nav>
      <Outlet />
    </div>
  );
}