import NavBar from "./NavBar";
import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function Game() {
    const {user, setUser} = useContext(UserContext);
    console.log(user);
  let all_clothing = user.cart.map((cloth) => (
    <div> {cloth[0].name} {cloth[0].price} {cloth[1]}</div>
  ));
  return (
    <div>
      <h1>Funhouse</h1>
      <NavBar/>
      <main style={{ padding: "1rem 0" }}>
      {all_clothing}
    </main>
    </div>
  );
}