import React, { useContext } from "react";
import { UserContext } from "./App";

function ProductCollection() {
  const products = useContext(UserContext);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default ProductCollection;
