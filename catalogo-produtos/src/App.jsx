import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  function adicionarCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  return (
    <div>
      <Header busca={busca} setBusca={setBusca} carrinho={carrinho} />

      <ProductList
        produtos={produtos}
        busca={busca}
        adicionarCarrinho={adicionarCarrinho}
      />

      <Cart carrinho={carrinho} />
    </div>
  );
}

export default App;