import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import AuthProvider from "./context/AuthProvider";
import PostProvider from "./context/PostProvider";
import UsersProvider from "./context/UsersProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UsersProvider>
          <PostProvider>
            <App />
          </PostProvider>
        </UsersProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
