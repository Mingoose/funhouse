import NavBar from "./NavBar";
import styled from "styled-components";

export default function Home() {

  const HomeDiv = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  return (
    <HomeDiv>
        <h1>Funhouse</h1>
        <NavBar/>
    </HomeDiv>
  );
}