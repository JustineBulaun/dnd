const Product = (props) => {
  const { productImg, productName, productPrice } = props;
  return (
    <div className="product">
      <img src={`/product/${productImg}`} alt={productName} />
      <h2>{productName}</h2>
      <p>{productPrice}</p>
      <button className="btn">Buy</button>
    </div>
  );
};

export default Product;
