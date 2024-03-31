import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ login, setBookmark, bookmark }) => {
  return login === true ? (
    <ProductDetail setBookmark={setBookmark} bookmark={bookmark} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
