import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';
import { path } from '../constant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    // ✅ Field validation
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const { data } = await API.post('/auth/register', form);

      // Save token + user
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Show success popup
      toast.success('Register Successful!', {
        autoClose: 1500,
        onClose: () => {
          if (data.user.role === 'admin') navigate(path.admin);
          else navigate(path.home);
        }
      });
    } catch (err) {
      const message = err.response?.data?.message || 'Registration failed';
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section (Welcome message with gradient) */}
      <div className="w-1/2 flex rounded-tr-full flex-col justify-center items-center text-white bg-gradient-to-b from-gray-700 to-black p-10">
        <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
        <p className="text-center max-w-md">
          Sign in to access your personalized dashboard, manage your account,
          and continue where you left off. We’re glad to have you back—your
          journey starts here.
        </p>
      </div>

      {/* Right Section (Registration Form) */}
      <div className="w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">Sign Up</h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your details to create a new account
          </p>

          <form className="space-y-4" onSubmit={submit}>
            <input
              value={form.firstName}
              onChange={e => setForm({ ...form, firstName: e.target.value })}
              type="text"
              placeholder="First Name"
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              required
            />
            <input
              value={form.lastName}
              onChange={e => setForm({ ...form, lastName: e.target.value })}
              type="text"
              placeholder="Last Name"
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              required
            />
            <input
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              required
            />
            <input
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              type="password"
              placeholder="Password"
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              required
            />

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
            >
              Sign Up Now
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <span
                onClick={() => navigate(path.login)}
                className="text-black hover:underline cursor-pointer"
              >
                Sign In Here
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Register;
