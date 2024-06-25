// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { useGetSingleProductQuery } from "../../context/api/productAPI";

// const SingleRoute = () => {
//   const { id } = useParams();
//   const { data: productData, error, isLoading } = useGetSingleProductQuery(id);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   const product = productData?.data?.data?.products;

//   return (
//     <div className="single">
//       <div className="container">
//         <div
//           style={{
//             paddingTop: 120,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: 20,
//           }}
//           className="single_contents"
//         >
//           <img src={product?.urls[0]} alt="product" />
//           <h3>{product?.title}</h3>
//           <p>{product?.description}</p>
//           <h4>
//             Price: <span>{product?.price}</span>
//           </h4>
//           <Link to={"/products"}>
//             <button>Go back</button>
//           </Link>
//         </div>
//         <h2>product</h2>
//       </div>
//     </div>
//   );
// };

// export default SingleRoute;

import React, { useEffect, useState } from "react";
import axios from "../../api";
import { Link, useParams } from "react-router-dom";

const SingleRoute = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data.data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="single">
      <div className="container">
        <div
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
          <h3>{product?.title} title</h3>
          <p>{product?.description} description</p>
          <h4>
            Price: <span>{product?.price}</span>
          </h4>
          <Link to={"/products"}>
            <button>Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
