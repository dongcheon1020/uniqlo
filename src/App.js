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
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    console.log(login, bookmark);
  }, [login, bookmark]);

  return (
    <div className="bg">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route
            path="/product/:id"
            element={
              <PrivateRoute
                login={login}
                setBookmark={setBookmark}
                bookmark={bookmark}
              />
            }
          />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="/bookmark" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
