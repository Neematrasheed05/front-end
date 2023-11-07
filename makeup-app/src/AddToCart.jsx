import React from "react";


function AddToCart({selectedProducts}) {
  
 

  

    return (
        <div className="container">
          <div className="row">
            {selectedProducts.map((selectedProduct) => (
              <div key={selectedProduct.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card card-hover">
                  <img src={selectedProduct.image_link} className="card-img-top shadow-lg p-3 mb-5 bg-body-tertiary rounded" alt={selectedProduct.name} />
                  <div className="card-body">
                    <h5 className="card-title">{selectedProduct.brand}</h5>
                    <p className="card-text">{selectedProduct.category}</p>
                    <p className="card-text">
                      {selectedProduct.price}
                      <span>{selectedProduct.price_sign}</span>
                    </p>

                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            
          </div>
        </div>
      );
    }
    
    export default AddToCart;
    