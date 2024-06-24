import React, { useEffect, useState } from "react";
import "../products/Products.css";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../context/api/productAPI";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const { data } = useGetProductsQuery({ limit: 50 });
  const [deledeProduct] = useDeleteProductMutation();
  const handleDeleteProductById = (id) => {
    deledeProduct(id);
  };
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>Products</h2>
      <div className="products">
        {data?.data?.products?.map((product) => (
          <div className="product" key={product.id}>
            <img
              src={product.urls[0]}
              height={250}
              style={{ backgroundSize: "contain", padding: 30 }}
              width={250}
              alt={product.title}
            />
            <Link to={`/product/${product.id}`}>
              <h3>{product.title}</h3>
            </Link>
            <button onClick={() => handleDeleteProductById(product.id)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
