import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, functions } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const ContactUsComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useNavigate();

  const handleContactSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log(auth); // Log auth to see if it's initialized
      console.log(functions); // Log functions to see if it's initialized
  
      const sendEmailFunction = functions.httpsCallable('sendEmail');
      console.log(sendEmailFunction); // Log to see if the function is correctly fetched
  
      await sendEmailFunction({ name, email, message });
      setSuccess(true);
      history('/');
    } catch (error) {
      setError(error.message);
    }
  };  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Mindfit: Campus Connect - Contact Us
        </h2>
        <form onSubmit={handleContactSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">Message sent successfully!</p>}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/dashboard" className="text-yellow-500">
            Go back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
