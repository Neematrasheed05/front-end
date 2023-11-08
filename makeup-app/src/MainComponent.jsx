import React, { useState, useEffect, createContext } from "react";
import AddToCart from "./AddToCart";
import ProductList from "./ProductList";

export const UserContext = createContext(); 

function MainComponent() {
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
  const removeFromCart = (product) =>{
    setSelectedProducts(selectedProducts.filter((selectedProduct) => selectedProduct.id!== product.id));
  }
  return (
    <div>
    <UserContext.Provider value={products}>
      <div>
      <AddToCart selectedProducts={selectedProducts} removeFromCart={removeFromCart}/>
      <ProductList  addToCart={addToCart}/>
      </div>
    </UserContext.Provider>
    
    </div>
  );
}

export default MainComponent;