import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ setBookmark, bookmark }) => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    try {
      let url = `https://my-json-server.typicode.com/dongcheon1020/uniqlo/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const addBookmark = () => {
    if (!bookmark.includes(id)) {
      setBookmark(bookmark.concat(id));
    } else {
      let delate = bookmark.filter((v) => v !== id);
      setBookmark(delate);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="wrapper detail">
      {error === null ? (
        <div className="detail-page">
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
              <section
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 50,
                  marginTop: 30,
                  gap: 10,
                }}
              >
                <button>구매하기</button>
                <button onClick={addBookmark} className="bookmark-c ">
                  <svg
                    viewBox="0 0 66 106"
                    width="20px"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.24219 105.041C3.61458 105.041 2.34505 104.52 1.43359 103.479C0.522135 102.437 0.0664062 100.972 0.0664062 99.084V14.3184C0.0664062 9.66341 1.22201 6.16406 3.5332 3.82031C5.8444 1.47656 9.29492 0.304688 13.8848 0.304688H52.0684C56.6582 0.304688 60.1087 1.47656 62.4199 3.82031C64.7311 6.16406 65.8867 9.66341 65.8867 14.3184V99.084C65.8867 100.972 65.431 102.437 64.5195 103.479C63.6081 104.52 62.3385 105.041 60.7109 105.041C59.5065 105.041 58.3835 104.634 57.3418 103.82C56.3327 103.007 54.7214 101.542 52.5078 99.4258L33.416 80.627C33.123 80.3014 32.8301 80.3014 32.5371 80.627L13.4453 99.4258C11.2318 101.574 9.60417 103.039 8.5625 103.82C7.52083 104.634 6.41406 105.041 5.24219 105.041ZM9.24609 91.8574L30.3887 71.3496C31.1699 70.6009 32.0326 70.2266 32.9766 70.2266C33.9206 70.2266 34.7832 70.6009 35.5645 71.3496L56.707 91.8574C57.0651 92.1829 57.3906 92.2969 57.6836 92.1992C58.0091 92.1341 58.1719 91.8574 58.1719 91.3691V14.416C58.1719 12.3001 57.6185 10.7051 56.5117 9.63086C55.4375 8.55664 53.8424 8.01953 51.7266 8.01953H14.2754C12.127 8.01953 10.4993 8.55664 9.39258 9.63086C8.31836 10.7051 7.78125 12.3001 7.78125 14.416V91.3691C7.78125 91.8574 7.92773 92.1341 8.2207 92.1992C8.54622 92.2969 8.88802 92.1829 9.24609 91.8574Z"
                      fill="#1d1d1f"
                    />
                  </svg>
                </button>
              </section>
            </article>
          </section>
        </div>
      ) : (
        <>{error}</>
      )}
    </div>
  );
};

export default ProductDetail;
