import React, { useState, useEffect } from "react";

function App() {
  const [products , setProducts] = useState([]);
  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data);
        
      });
  }, []);
  return(
    <div>
      {products.map((product) => (
        <h2 key={product.id}>{product.name}</h2>
        ))}
    </div>
  );
}

export default App;
