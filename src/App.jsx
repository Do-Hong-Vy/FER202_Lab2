import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { products as initialProducts } from "./data/product";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [productList, setProductList] = useState(initialProducts);

  const handleAddToCart = (productId) => {
    setProductList((prevList) =>
      prevList.map((p) =>
        p.id === productId && p.quantity > 0
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
    setCartQuantity((prev) => prev + 1);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cartQuantity={cartQuantity} />
      <main className="flex-grow-1">
        <Banner />
        <div className="container my-5">
          <ProductList products={productList} onAddToCart={handleAddToCart} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
