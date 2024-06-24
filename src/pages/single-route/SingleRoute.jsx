import React, { useEffect, useState } from "react";
import axios from "../../api";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../context/api/productAPI";

const SingleRoute = () => {
  //   const { id } = useParams();
  //   const [product, setProduct] = useState(null);
  //   useEffect(() => {
  //     axios
  //       .get(`/products/${id}`)
  //       .then((res) => setProduct(res.data.data.products))
  //       .catch((err) => console.log(err));
  //   }, [id]);
  const { product } = useGetSingleProductQuery();
  console.log(product);
  return (
    <div className="single">
      <div className="container">
        {/* <div
          style={{
            paddingTop: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
          className="single_contents"
        >
          <img src={product?.urls[0]} alt="product" />
          <h3>{product?.title}</h3>
          <p>{product?.description}</p>
          <h4>
            Price: <span>{product?.price}</span>
          </h4>
          <Link to={"/products"}>
            <button>Go back</button>
          </Link>
        </div> */}
        <h2>product</h2>
      </div>
    </div>
  );
};

export default SingleRoute;
