import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

import { useAuth } from "../../context/AuthProvider";
function SignUp() {
  const { handleSignup, signupUser, setSignupUser } = useAuth();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility(event) {
    event.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className="signup-container">
      <form className="signup-card">
        <div className="main-header">
          <h1>Socially </h1>
        </div>
        <div className="signup-card-header">
          <h2>Sign Up</h2>
        </div>

        <div className="signup-card-item">
          <label>First name*</label>
          <input
            type="text"
            className="text-input"
            placeholder="First name"
            required
            onChange={(e) =>
              setSignupUser({ ...signupUser, firstName: e.target.value })
            }
          />
        </div>
        <div className="signup-card-item">
          <label>Last name*</label>
          <input
            type="text"
            className="text-input"
            placeholder="Last name"
            required
            onChange={(e) =>
              setSignupUser({ ...signupUser, lastName: e.target.value })
            }
          />
        </div>
        <div className="signup-card-item">
          <label>Username*</label>
          <input
            type="text"
            className="text-input"
            placeholder="Enter username"
            required
            onChange={(e) =>
              setSignupUser({ ...signupUser, username: e.target.value })
            }
          />
        </div>
        <div className="signup-card-item signup-card-item-password">
          <label>Password*</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter Password"
            className="pwd-input"
            required
            onChange={(e) =>
              setSignupUser({ ...signupUser, password: e.target.value })
            }
          />
          <button
            className="show-hide-password"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="signup-card-item">
          <button
            type="submit"
            className="btn-signup"
            onClick={(event) => handleSignup(event, signupUser)}
          >
            Sign Up
          </button>
        </div>
        <p className="signin-footer">
          Already registered{" "}
          <Link to="/login" className="signin-link">
            sign in?
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
