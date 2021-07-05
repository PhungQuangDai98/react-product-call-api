import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
const ProductForm = ({ productItem, addProduct, updateProduct }) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    setProduct({ ...productItem });
  }, [productItem]);

  const onChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const SaveProduct = () => {
    addProduct(product);
  };

  const Update = () => {
    updateProduct(product);
  };

  return (
    <div>
      <div>
        <h5 className="title">Product form</h5>
      </div>
      <form>
        <div className="row">
          <div className="form-group col-md-3">
            <label>Name :</label>
          </div>
          <div className="form-group col-md-9">
            <input
              id="productName"
              type="text"
              name="name"
              placeholder=""
              value={product.name || ""}
              onChange={onChange}
              className="form-control"
            />
            <input id="productId" value={product.id} type="hidden" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-3">
            <label>Price :</label>
          </div>
          <div className="form-group col-md-9">
            <input
              type="number"
              id="productPrice"
              name="price"
              value={product.price || ""}
              onChange={onChange}
              placeholder=""
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-3">
            <label>Description :</label>
          </div>
          <div className="form-group col-md-9">
            <textarea
              id="productDescription"
              name="description"
              value={product.description || ""}
              onChange={onChange}
              className="form-control"
            ></textarea>
          </div>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={SaveProduct}
          >
            Save
          </button>
          <button type="button" className="btn btn-primary" onClick={Update}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

// ProductForm.propTypes = {
//     addProduct: PropTypes.func
// }

export default ProductForm;
