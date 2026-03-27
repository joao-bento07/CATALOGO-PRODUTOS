import ProductCard from "./ProductCard";

function ProductList({ produtos, busca, adicionarCarrinho }) {
  const filtrados = produtos.filter((produto) =>
    produto.title.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container">
      {filtrados.map((produto) => (
        <ProductCard
          key={produto.id}
          produto={produto}
          adicionarCarrinho={adicionarCarrinho}
        />
      ))}
    </div>
  );
}

export default ProductList;