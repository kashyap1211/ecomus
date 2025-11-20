import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios"; 
import { path } from "../constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Submit handler
  const submit = async (e) => {
    e.preventDefault();

    // Check empty fields
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const { data } = await API.post("/auth/login", { email, password });

      // Save token + user in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Show success toast
      toast.success("Login Successful!", {
        onClose: () => {
          // Redirect after toast closes
          if (data.user.role === "admin") navigate(path.admin);
          else navigate(path.home);
        },
        autoClose: 1500,
      });
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Section */}
      <div className="flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">
            Hello!
          </h2>
          <p className="text-center text-gray-600 mb-6">Sign into Your account</p>

          <form className="space-y-4" onSubmit={submit}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="E-mail"
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              required
            />

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
            >
              SIGN IN
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate(path.register)}
                className="text-black hover:underline cursor-pointer"
              >
                Create
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col rounded-tl-full justify-center items-center text-white bg-gradient-to-b from-gray-700 to-black p-10">
        <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
        <p className="text-center max-w-md">
          Welcome back! Sign in to access your account...
        </p>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
