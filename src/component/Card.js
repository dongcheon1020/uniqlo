import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const goProduct = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <article onClick={goProduct} className="product-item">
      <img src={item?.img} />

      <ul>
        {item.color?.map((color, colorIndex) => (
          <li key={colorIndex} style={{ backgroundColor: color }}></li>
        ))}
      </ul>

      <h3>{item?.title}</h3>
      <p>{item?.material}</p>
      <div>{item?.price + "원"}</div>
    </article>
  );
};

export default Card;
