function Cart({ carrinho }) {
  const total = carrinho.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Carrinho</h2>

      {carrinho.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          {carrinho.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
          <h3>Total: R$ {total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;