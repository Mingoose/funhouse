import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Funhouse</h1>
      <nav
        style={{ listStyleType: "none", padding: 0 }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/game">Game</Link> |{" "}
        <Link to="/shop">Shop</Link>
      </nav>
      <Outlet />
    </div>
  );
}