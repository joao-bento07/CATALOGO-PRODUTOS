function ProductCard({ produto, adicionarCarrinho }) {
  return (
    <div className="card">
      <h3>{produto.title}</h3>
      <p><strong>Descrição:</strong> {produto.description}</p>
      <p>R$ {produto.price}</p>

      <button onClick={() => adicionarCarrinho(produto)}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default ProductCard;