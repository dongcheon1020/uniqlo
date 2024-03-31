import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLogin }) => {
  const navigate = useNavigate();
  const login = () => {
    setLogin(true);
    navigate("/");
  };
  return (
    <div className="wrapper" style={{ height: "calc(100vh )" }}>
      <h2 style={{ fontSize: 40, color: "#1d1d1f" }} className="login-title">
        상품 상세페이지를 보려면 로그인하세요.
      </h2>
      <div className="login-box">
        <h5
          style={{
            fontSize: 23,
            textAlign: "center",
            marginBottom: 20,
            color: "#1d1d1f",
          }}
        >
          유니클로에 로그인하세요
        </h5>
        <form>
          <input
            className="login"
            type="email"
            placeholder="이메일 또는 전화번호"
          />

          <input className="login" type="password" placeholder="암호" />
          <button onClick={login} className="submit" type="button">
            ➞
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
