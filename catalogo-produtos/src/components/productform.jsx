import { useState } from "react";

function ProductForm({ adicionarProduto }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !preco || !descricao) return;

    adicionarProduto({
      title: nome,
      price: Number(preco),
      description: descricao
    });

    setNome("");
    setPreco("");
    setDescricao("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Cadastrar Produto</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <button type="submit">Adicionar Produto</button>
    </form>
  );
}

export default ProductForm;