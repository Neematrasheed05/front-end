import React, { useState, useEffect, createContext } from "react";
import ProductCollection from "./ProductCollection";
import AddToCart from "./AddToCart";

export const UserContext = createContext(); 

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addToCart = (product) => {
    if (!selectedProducts.find((selectedProduct) => selectedProduct.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
    console.log(selectedProducts);
  };
  return (
    <div>
    <UserContext.Provider value={products}>
      <div>
      <AddToCart selectedProducts={selectedProducts} />
        <ProductCollection  addToCart={addToCart}/>
      </div>
    </UserContext.Provider>
    
    </div>
  );
}

export default App;
