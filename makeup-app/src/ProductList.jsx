import React, { useContext } from "react";
import { UserContext } from "./MainComponent";

function ProductList({ addToCart  }) {
  const products = useContext(UserContext);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card card-hover">
              <img
                src={product.image_link}
                className="card-img-top shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                alt={product.name}
              />
               <div className="card-body">
                 <h5 className="card-title">{product.brand}</h5>
                 <p className="card-text">{product.category}</p>
                 <p className="card-text">
                  {product.price}
                  <span>{product.price_sign}</span>
                 </p>
                <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button" onClick={()=> addToCart(product)}></button>
                 </div>  
                </div>
            </div>
          </div>
        ))}

      </div>
      
    </div>
  );
}

export default ProductList;
