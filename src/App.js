import NavBar from "./componets/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:category" element={<ItemListContainer />} />
      <Route path="item/:id" element={<ItemDetailContainer/>}/>
      <Route/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
