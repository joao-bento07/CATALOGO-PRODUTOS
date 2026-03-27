function Header({ busca, setBusca, carrinho }) {
  return (
    <header className="header">
      <h1>🛍️ Catálogo</h1>

      <input
        type="text"
        placeholder="Buscar produto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <div>🛒 {carrinho.length}</div>
    </header>
  );
}

export default Header;