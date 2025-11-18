import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          
          <NavLink className="navbar-brand" to="/">
            My App
          </NavLink>

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/shop"
              >
                Shop
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
  <Route
    path="/"
    element={
      <ErrorBoundary>
        <HomeScreen />
      </ErrorBoundary>
    }
  />

  <Route
    path="/profile"
    element={
      <ErrorBoundary>
        <ProfileScreen />
      </ErrorBoundary>
    }
  />

  <Route
    path="/shop"
    element={
      <ErrorBoundary>
        <ShopScreen />
      </ErrorBoundary>
    }
  />
</Routes>

      </div>
    </BrowserRouter>
  );
}

function HomeScreen() {
  return <h1>home</h1>;
}

function ProfileScreen() {
  return <h1>profile</h1>;
}

function ShopScreen() {
  // Intentionally throw an error to trigger ErrorBoundary
  throw new Error("Shop page failed to load!");
  // return <h1>shop</h1>;  // you won’t reach this line
}

export default App;