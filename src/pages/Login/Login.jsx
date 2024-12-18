import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import Navbar from '../../components/Navbar/Navbar'; // Ensure Navbar path is correct
import PasswordInput from '../../components/Navbar/Input/PasswordInput';
import { validateEmail } from '../../utils/helper';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState(null);

    const handleLogin = async (e) =>{
        e.preventDefult();

        if(!validateEmail (email)){
            setError("Please enter a valid email address.");
            return;
        }

        setError("")

        //Login API Call
    };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100"> {/* Add some styling for layout */}
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl font-semibold mb-7 text-center">Login</h4>
            <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className ="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none input-box"
              />
            </div>
            <div className="mb-6">
             <PasswordInput value={password}
             onChange={(e) => setPassword(e.target.value)}/>
             {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            </div>
            <button
              type="submit"
              className="btn-primary w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet?{' '}
              <Link to="/Login" className="text-blue-500 hover:underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
 