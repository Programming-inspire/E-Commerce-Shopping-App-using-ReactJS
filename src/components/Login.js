// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [loginMode, setLoginMode] = useState(true);

  const toggleMode = () => {
    setLoginMode(!loginMode);
  };

  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <div className="flex justify-between mb-4">
          <button
            className={`py-2 px-4 focus:outline-none ${loginMode ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setLoginMode(true)}
          >
            Sign In
          </button>
          <button
            className={`py-2 px-4 focus:outline-none ${!loginMode ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setLoginMode(false)}
          >
            Sign Up
          </button>
        </div>

        {loginMode ? (
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
                Email
              </label>
              <input type="email" id="email" className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">
                Password
              </label>
              <input type="password" id="password" className="w-full border p-2 rounded" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Sign In
            </button>
          </form>
        ) : (
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600 font-semibold mb-2">
                Username
              </label>
              <input type="text" id="username" className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
                Email
              </label>
              <input type="email" id="email" className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">
                Password
              </label>
              <input type="password" id="password" className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-600 font-semibold mb-2">
                Confirm Password
              </label>
              <input type="password" id="confirmPassword" className="w-full border p-2 rounded" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
