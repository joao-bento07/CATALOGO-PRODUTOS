import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductForm from "./components/productform";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");
  const [carrinho, setCarrinho] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 DADOS MOCKADOS + LOADING
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          title: "Camisa",
          price: 50,
          description: "Camisa confortável de algodão"
        },
        {
          id: 2,
          title: "Tênis",
          price: 120,
          description: "Tênis esportivo para corrida"
        },
        {
          id: 3,
          title: "Boné",
          price: 30,
          description: "Boné estiloso"
        }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  function adicionarCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  // ✅ ADICIONAR NOVO PRODUTO
  function adicionarProduto(novoProduto) {
    setProdutos([...produtos, { id: Date.now(), ...novoProduto }]);
  }

  return (
    <div>
      <Header busca={busca} setBusca={setBusca} carrinho={carrinho} />

      <ProductForm adicionarProduto={adicionarProduto} />

      {loading ? (
        <h2 style={{ textAlign: "center" }}>Carregando...</h2>
      ) : (
        <ProductList
          produtos={produtos}
          busca={busca}
          adicionarCarrinho={adicionarCarrinho}
        />
      )}

      <Cart carrinho={carrinho} />
    </div>
  );
}

export default App;