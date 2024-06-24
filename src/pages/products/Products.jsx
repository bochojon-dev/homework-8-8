import React from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../context/api/productAPI";

const Products = () => {
  const { data } = useGetProductsQuery({ limit: 50 });
  const [deledeProduct] = useDeleteProductMutation();
  const handleDeleteProductById = (id) => {
    deledeProduct(id);
  };
  return (
    <div>
      <h2>Products</h2>
      {data?.data?.products?.map((product) => (
        <div key={product.id}>
          <img
            src={product.urls[0]}
            height={250}
            style={{ backgroundSize: "contain", padding: 30 }}
            width={250}
            alt={product.title}
          />
          <h3>{product.title}</h3>
          <button onClick={() => handleDeleteProductById(product.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
