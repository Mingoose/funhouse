import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Game from "./routes/Game";
import Shop from "./routes/Shop";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="game" element={<Game />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  </BrowserRouter>
);