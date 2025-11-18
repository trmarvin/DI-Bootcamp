import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ErrorBoundary from "./ErrorBoundary";
import PostList from "./PostList";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

const WEBHOOK_URL = "https://webhook.site/18c9c29b-15bf-440c-9902-40d1b8f26607";

async function sendDataToWebhook() {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27
      })
    });

    console.log("Status:", response.status);
    const data = await response.text();
    console.log("Response body:", data);
  } catch (error) {
    console.error("Error sending data:", error);
  }
}

function App() {
  return (
    <>
      {/* Webhook Test Button */}
      <div className="container mt-4">
        <button
          onClick={sendDataToWebhook}
          className="btn btn-primary mb-4"
        >
          Send data to webhook
        </button>
      </div>

      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">

            <NavLink className="navbar-brand" to="/">
              My App
            </NavLink>

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/posts">Posts</NavLink>
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

            <Route path="/posts" element={<PostList />} />

            {/* Optional: You can render the Example components */}
            <Route path="/example1" element={<Example1 />} />
            <Route path="/example2" element={<Example2 />} />
            <Route path="/example3" element={<Example3 />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

function HomeScreen() {
  return <h1>home</h1>;
}

function ProfileScreen() {
  return <h1>profile</h1>;
}

function ShopScreen() {
  throw new Error("Shop page failed to load!");
  // return <h1>shop</h1>;
}

export default App;