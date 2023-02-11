import NavBar from "./componets/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/cartProvider";
import Cart from "./pages/Cart/Cart";
import { cartContext } from "./context/cartContext";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:category" element={<ItemListContainer />} />
      <Route path="item/:id" element={<ItemDetailContainer/>}/>
      <Route path="cart" element={ <Cart /> } />
      <Route/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
