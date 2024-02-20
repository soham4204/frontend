import React from 'react';
import { Link } from 'react-router-dom';

const DashboardComponent = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800">User Dashboard</h1>
          </div>
          <div className="space-x-4 flex items-center">
            <Link to="/">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-yellow-600">Thoughts Journal</button>    
            </Link>
            <Link to="/breathing">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-yellow-600">Breathing Exercise</button>    
            </Link>
            <Link to="/">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-red-600">Logout</button>    
            </Link>
          </div>
        </nav>
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thought Journal</h2>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Breathing Exercise</h2>
          </div>
        </section>
        <footer className="text-center mt-8 text-gray-600 text-sm">
          <p>Contact Us: mindfulcc@gmail.com</p>
        </footer>
      </div>
    </div>
  );
}

export default DashboardComponent;
