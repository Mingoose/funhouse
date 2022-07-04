import { NavbarLink } from "../styles/NavStyle";
import Product from "../components/Product.js";
import BlueShirt from '../images/blue_shirt.png'
import GreenShirt from '../images/green_shirt.png'

export default function Shop() {

  let blueshirt = { name: "blue_shirt", img: BlueShirt };
  let greenshirt = { name: "green_shirt", img: GreenShirt};
  let clothing = [blueshirt, greenshirt];

  let all_clothing = clothing.map((cloth) => (
    <Product name={cloth.name} img={cloth.img} />
  ));
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
