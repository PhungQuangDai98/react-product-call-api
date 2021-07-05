import React from "react";
import PropTypes from "prop-types";
/**
 *
 * @param {number} id
 * @param {string} name
 * @param {number} price
 * @param {string} description
 * @returns Product element
 */
const Product = ({
  id,
  name,
  price,
  description,
  deleteProduct,
  editProduct,
}) => {
  const del = () => {
    deleteProduct(id);
  };

  const edit = () => {
    editProduct(id);
  };

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={edit}>
          Edit
        </button>
        <button type="button" className="btn btn-danger" onClick={del}>
          Delete
        </button>
      </td>
    </tr>
  );
};

Product.propTypes = {
  id: PropTypes.string || PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string || PropTypes.number,
  description: PropTypes.string,
};

export default Product;
