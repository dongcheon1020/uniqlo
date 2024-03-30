import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Header from "./component/Header";
import Login from "./page/Login";
import { useState, useEffect } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [login, setLogin] = useState(false);
  // const navigate = useNavigate();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductAll />,
    },
    {
      path: "/product/:id",
      element: <PrivateRoute login={login} />,
    },
    {
      path: "/login",
      element: <Login setLogin={setLogin} />,
    },
  ]);

  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <div className="bg">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route path="/product/:id" element={<PrivateRoute login={login} />} />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
