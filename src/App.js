import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeaderUser } from "./components/HeaderUser";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { HomeUser } from "./pages/HomeUser";
import { ProtectedRoute } from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Header>
              <Home />
            </Header>
          }
        />
        <Route
          path="/login"
          element={
            <Header>
              <Login />
            </Header>
          }
        />
        <Route
          path="/register"
          element={
            <Header>
              <Register />
            </Header>
          }
        />

        <Route
          path="home-user"
          element={
            <ProtectedRoute>
              <HeaderUser>
                <HomeUser />
              </HeaderUser>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
