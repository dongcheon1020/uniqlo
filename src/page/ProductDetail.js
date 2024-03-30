import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    try {
      let url = `http://my-json-server.typicode.com/dongcheon1020/uniqlo/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="wrapper detail">
      {error === null ? (
        <>
          <h3 className="detail-title">{product?.title}</h3>
          <section className="detail-product">
            <img src={product?.img} />
            <article>
              <section className="detail-section">
                <h5>컬러 - Color</h5>
                <ul>
                  {product?.color.map((color, index) => (
                    <li key={index} style={{ backgroundColor: color }}></li>
                  ))}
                </ul>
              </section>

              <section className="detail-section">
                <h5>사이즈 - Size</h5>
                <ul>
                  {product?.size.map((size, index) => (
                    <li key={index}>{size}</li>
                  ))}
                </ul>
              </section>

              <h3>{product?.price + "원"}</h3>
              <p>{product?.material}</p>

              <section className="detail-section">
                <h5>수량</h5>
                <select>
                  {Array.from({ length: 10 }, (_, index) => (
                    <option className="num" key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </section>

              <button>구매하기</button>
            </article>
          </section>
        </>
      ) : (
        <>{error}</>
      )}
    </div>
  );
};

export default ProductDetail;
