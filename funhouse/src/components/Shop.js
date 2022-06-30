import { NavbarLink } from "../styles/NavStyle";
import Product from "../components/Product.js";

export default function Shop() {
  return (
    <div>
      <h1>Funhouse</h1>

      <nav style={{ listStyleType: "none", padding: 0 }}>
        <NavbarLink to="/">Home</NavbarLink>
        <br />
        <NavbarLink to="/game">Game</NavbarLink>
        <br />
        <NavbarLink to="/shop">Shop</NavbarLink>
        <br />
        <NavbarLink to="/about">About</NavbarLink>
        <br />
        <NavbarLink to="/contact">Contact</NavbarLink>
      </nav>

      <main style={{ padding: "1rem 0" }}>
        <h2>Shop</h2>

        <tbody>{all_clothing}</tbody>
      </main>
    </div>
  );
}

let blueshirt = { name: "blue_shirt", img: "some-url" };

let clothing = [blueshirt];

let all_clothing = clothing.map((cloth) => (
  <Product name={cloth.name} img={cloth.img} />
));
