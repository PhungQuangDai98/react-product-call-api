import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

/**
 *
 * @param {Array} productList
 * @returns
 */
const ProductTable = ({ productList, deleteProduct, editProduct }) => {
  const del = (id) => {
    deleteProduct(id);
  };

  const edit = (id) => {
    editProduct(id);
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {productList.map(({ id, name, price, description }) => {
          return (
            <Product
              key={id}
              id={id}
              name={name}
              price={price}
              description={description}
              deleteProduct={del}
              editProduct={edit}
            />
          );
        })}
      </tbody>
    </table>
  );
};

ProductTable.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string || PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string || PropTypes.number,
      description: PropTypes.string,
    })
  ),
};

export default ProductTable;
