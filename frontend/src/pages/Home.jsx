
import { useEffect, useState } from "react";
import API from "../services/api";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await API.get("/products");

      console.log("API DATA:", res.data);

      // 🔥 SAFE FIX (handles all backend formats)
      const data = res.data.products || res.data.data || res.data;

      setProducts(Array.isArray(data) ? data : []);

    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <div className="home">
      <h1>Latest Products</h1>

      <div className="product-container">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img
                src={product.image || "https://via.placeholder.com/200"}
                alt={product.name}
              />

              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>₹ {product.price}</h3>

              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Home;