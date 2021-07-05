import React, { useState, useEffect } from "react";
import ProductForm from "../Components/Product/ProductForm";
import ProductTable from "../Components/Product/ProductTable";
import {
  getProduct,
  deleteProduct,
  postProduct,
  putProduct,
} from "../../API/AxiosAPi";

const Container = () => {
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
  });

  const get = async () => {
    await getProduct()
      .then((response) => {
        console.log("Get Successfully!!!");
        console.log(response.data);
        setProductList(response.data);
      })
      .catch((error) => {
        console.log("Get Failure!!!");
        console.log(error);
      });
  };

  const del = async (productId) => {
    await deleteProduct(productId)
      .then((response) => {
        console.log("Delete Successfully!!!");
        console.log(response);
        get();
      })
      .catch((error) => {
        console.log("Delete Failure!!!");
        console.log(error);
      });
  };

  const add = async (product) => {
    await postProduct("", product)
      .then((response) => {
        console.log("Add Successfully!!!");
        console.log(response);
        get();
      })
      .catch((error) => {
        console.log("Add Failure!!!");
        console.log(error);
      });
  };

  const edit = async (id) => {
    await getProduct(id)
      .then((response) => {
        console.log(`Get Product Has ${id} Successfully!!!`);
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Get Failure!!!");
        console.log(error);
      });
  };

  const update = async (product) => {
    await putProduct(product.id, product)
      .then((response) => {
        console.log(`Update Product Has ${product.id} Success!!!`);
        console.log(response);
        get();
        setProduct({ id: "", name: "", price: "", description: "" });
      })
      .catch((error) => {
        console.log("Update Failure!!!");
        console.log(error);
      });
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="row">
      <div className="col-md-7">
        <ProductTable
          productList={productList}
          deleteProduct={del}
          editProduct={edit}
        />
      </div>
      <div className="col-md-5">
        <ProductForm
          productItem={product}
          addProduct={add}
          updateProduct={update}
        />
      </div>
    </div>
  );
};

export default Container;
