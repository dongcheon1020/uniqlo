import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "../component/Card";

const menuList = ["유니클로", "MEN", "TOPS 상의", "T-Shirts 티셔츠"];

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();

  // useState
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  // api get
  const getProduct = async () => {
    try {
      let searchQuery = query.get("q") || "";
      let url = `https://my-json-server.typicode.com/dongcheon1020/uniqlo/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
      console.log(data);
      if (data.length === 0) {
        throw new Error("검색결과가 없습니다.");
      } else {
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div
      className="wrapper"
      style={{
        minHeight: "calc(100vh - 150px)",
      }}
    >
      {error === null ? (
        <>
          <h3 className="title">T-Shirts 티셔츠</h3>
          <ul className="menu-list">
            {menuList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <section className="product-list">
            {productList.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </section>
        </>
      ) : (
        <>{error}</>
      )}
    </div>
  );
};

export default ProductAll;
