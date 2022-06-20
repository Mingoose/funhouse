import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Game from "./routes/Game";
import Shop from "./routes/Shop";
import About from "./routes/About";
import Contact from "./routes/Contact";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="game" element={<Game />} />
      <Route path="shop" element={<Shop />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      
    </Routes>
  </BrowserRouter>
);