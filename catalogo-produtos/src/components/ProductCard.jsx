function ProductCard({ produto, adicionarCarrinho }) {
  return (
    <div className="card">
      <img src={produto.image} alt={produto.title} />
      <h3>{produto.title}</h3>
      <p>R$ {produto.price}</p>

      <button onClick={() => adicionarCarrinho(produto)}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default ProductCard;