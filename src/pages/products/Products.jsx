import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../products/Products.css";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../context/api/productAPI";
import { Link } from "react-router-dom";
import Model from "../../components/navbar/model/Model";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [model, setModel] = useState(false);
  const { data, isLoading } = useGetProductsQuery({ limit: 50 });
  const [deledeProduct] = useDeleteProductMutation();
  const handleDeleteProductById = (id) => {
    deledeProduct(id);
  };
  return (
    <div className="container">
      {model ? <Model data={data} close={setModel} /> : <></>}
      <h2 className="title">Products</h2>
      <div className="products">
        {!isLoading ? (
          data?.data?.products?.map((product) => (
            <div className="product" key={product.id}>
              <img
                onClick={() => setModel(true)}
                src={product.urls[0]}
                height={250}
                style={{ backgroundSize: "contain", padding: 30 }}
                width={250}
                alt={product.title}
              />
              <h3 onClick={() => setSearchParams({ detail: product.id })}>
                Details
              </h3>
              <Link to={`/product/${product.id}`}>
                <h3>{product.title}</h3>
              </Link>
              <button onClick={() => handleDeleteProductById(product.id)}>
                delete
              </button>
            </div>
          ))
        ) : (
          <>
            <h2>Loading...</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
