import React, { useContext } from "react";
import { UserContext } from "./App";

function ProductCollection() {
  const products = useContext(UserContext);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img src={product.image_link} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.brand}</h5>
                <p className="card-text">{product.category}</p>
                <p className="card-text">
                  {product.price}
                  
                </p>
               
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCollection;
