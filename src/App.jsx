import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Item, Items } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
