import React, { useState, useEffect, createContext } from "react";
import ProductCollection from "./ProductCollection";

export const UserContext = createContext(); 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <UserContext.Provider value={products}>
      <div>
        <ProductCollection />
      </div>
    </UserContext.Provider>
  );
}

export default App;
