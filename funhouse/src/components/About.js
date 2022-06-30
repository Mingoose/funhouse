import { NavbarLink } from "../styles/NavStyle";
export default function About() {
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
      <main style={{ padding: "1rem 0" }}>
      <h2>About</h2>
    </main>
    </div>
  );
}