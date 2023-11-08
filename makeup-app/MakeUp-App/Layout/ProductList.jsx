import React, { useContext } from "react";
import { UserContext } from "./MainComponent";

function ProductList({ addToCart }) {
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
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>

                {/* Display product colors with Bootstrap styling */}
                <div className="product-colors mt-3">
                  <p className="fw-bold">Product Colors:</p>
                  <ul className="list-inline">
                    {product.product_colors.map((color, index) => (
                      <li key={index} className="list-inline-item">
                        <span
                          className="color-circle"
                          style={{ backgroundColor: color.hex_value } }
                        >
                        </span>
                      </li>
                    ))}
                  </ul>
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
