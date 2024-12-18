import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PasswordInput from '../../components/Navbar/Input/PasswordInput';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Sign Up form submitted!");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl font-semibold mb-7 text-center">Sign Up</h4>
            
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-sm bg-transparent py-3 mb-4 rounded outline-none border border-gray-300 px-4"
            />
            
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-sm bg-transparent py-3 mb-4 rounded outline-none border border-gray-300 px-4"
            />
            
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
            >
              Sign Up
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet?{' '}
              <Link to="/SignUp" className="text-blue-500 hover:underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
