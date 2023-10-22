import "./App.css";
import Navbar from "./components/navbar";
import Product from "./components/product";
import SignInPage from "./components/sign-in";
import { shopProducts } from "./utilities/product";

function App() {
  return (
    <>
      <Navbar />
      <div className="product-container">
        {shopProducts.map((product) => {
          return (
            <Product
              key={product.id}
              productImg={product.productImg}
              productName={product.productName}
              productPrice={product.productName}
            />
          );
        })}
      </div>
      <SignInPage />
    </>
  );
}

export default App;
