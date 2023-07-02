import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MockApi from "../components/MockApi";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../context/AuthProvider";
import Explore from "../pages/Explore/Explore";
import Bookmark from "../pages/Bookmark/Bookmark";
import PostDetails from "../components/PostDetails/PostDetails";
import UserProfile from "../pages/UserProfile/UserProfile";

function AppRoutes() {
  const { token } = useAuth();
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="post/:postId" element={<PostDetails />} />
          <Route path="/profile/:username" element={<UserProfile />} />
        </Route>

        {!token ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/sign-up" element={<Navigate to="/" replace />} />
          </>
        )}
        <Route path="/mock-api" element={<MockApi />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
