import React, { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginService, signUpService } from "../services/authServices";

export const AuthContext = createContext();
const initialUser = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
};
function AuthProvider({ children }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");
  const [isLogined, setIsLogined] = useState(false);
  const [signupUser, setSignupUser] = useState(initialUser);
  const navigate = useNavigate();
  const location = useLocation();

  const addUserLogined = async (user) => {
    if (user.username && user.password) {
      try {
        const { data } = await loginService(user);
        localStorage.setItem("encodedToken", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.foundUser));
        if (data.encodedToken) {
          setToken(data.encodedToken);
          setIsLogined(true);
          const newPath = location?.state?.from?.pathname;
          navigate(newPath);
          toast.success("Login Successfully!");
        } else {
          setIsLogined(false);
        }
      } catch (error) {
        console.log(error);
        setIsLogined(false);
      }
    } else {
      toast.error("Username and Password should not be empty.");
    }
  };
  const addUserSignup = async (signupUser) => {
    if (signupUser.username && signupUser.password) {
      try {
        const response = await signUpService(signupUser);
        localStorage.setItem("encodedToken", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
        const result = response.data;
        if (result.encodedToken) {
          setToken(result.encodedToken);
          setIsLogined(true);
          const newPath = location?.state?.from?.pathname;
          navigate(newPath);
          toast.success("Login Successfully!");
        } else {
          setIsLogined(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Username and Password should not be empty.");
    }
  };
  const handleGuest = (event) => {
    event.preventDefault();
    const guestUser = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    setUser(guestUser);
    addUserLogined(guestUser);
    return false;
  };
  const handleLogin = (event) => {
    event.preventDefault();
    if (user.username && user.password) {
      addUserLogined(user);
    } else {
      toast.error("Username and Password should not be empty.");
    }
    return false;
  };
  const handleSignup = (event, signupUser) => {
    event.preventDefault();
    if (
      signupUser.firstName &&
      signupUser.lastName &&
      signupUser.username &&
      signupUser.password
    ) {
      setUser({ username: signupUser.username, password: signupUser.password });
      addUserSignup(signupUser);
    } else {
      toast.error("Fields should not be empty");
    }
    return false;
  };
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("encodedToken");
    setToken(null);
    toast.success("Logged out");
  };
  return (
    <AuthContext.Provider
      value={{
        handleGuest,
        handleLogin,
        isLogined,
        setIsLogined,
        setUser,
        user,
        token,
        setToken,
        handleSignup,
        setSignupUser,
        signupUser,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
