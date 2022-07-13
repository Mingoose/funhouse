import NavBar from "./NavBar";
import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function Game() {
    const {user, setUser} = useContext(UserContext);
    console.log(user);
  return (
    <div>
      <h1>Funhouse</h1>
      <NavBar/>
      <main style={{ padding: "1rem 0" }}>
      <h2>{user.cart}</h2>
    </main>
    </div>
  );
}