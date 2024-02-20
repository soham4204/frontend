import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import bglogo from '../assets/loginpagebg.png';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await auth.signInWithEmailAndPassword(email, password);
        history('/Dashboard');
    } catch (error) {
        setError(error.message);
    } 
  }

  const divStyle = {
    backgroundImage: `url(${bglogo})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={divStyle} className="min-h-screen flex items-center justify-left">
      <div className="bg-white p-8 rounded shadow-2xl w-96 ml-48">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Mindfit: Campus Connect
        </h2>
        <form className="">
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-center">You Have Entered Incorrect Credentials</p>}
          <button
            type="button"
            className="w-full bg-yellow-400 text-white p-2 rounded-md"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-yellow-500">
              Sign up here
            </Link>
          </p>
        </div>
        <div>
          <Link>
        <button
            type="button"
            className="w-full bg-orange-400 text-white p-2 mt-4 rounded-md"
          >
            Home
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
