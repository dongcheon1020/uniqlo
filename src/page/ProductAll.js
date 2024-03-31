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
      className="wrapper product-all"
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

// 일단 북마크 달면 북마크 단거 북마크에 볼수 있도록 기능 추가
// 아래 여백 좀 넣기 패딩 ㄱㄱ
// 로그인 로그아웃 느낌 내기
// 컬러 클릭시 클릭 되게 하기
// 나머지 짜잘한 텍스트 호버 효과 주기
// 로그인 작성시 이메일 작성해야만 넘어가게 하는 기능 넣어보기
// 반응형 추가
//
