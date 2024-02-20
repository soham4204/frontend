import React from 'react';
import { Link } from 'react-router-dom';
import bgvideo from '../assets/bgvideo.mp4'
import onlinetherapy from '../assets/onlinetherapy.png'

const HomeComponent = () => {

  const VideoBackground = () => {
    return (
      <div className="relative">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          <nav className="flex items-center justify-between w-full h-24 bg-gray-300 px-4">
            <div className="">
              <h1 className="text-2x md:text-4xl font-bold">Mindfit: Campus Connect</h1>
            </div>
            <div className="space-x-4">           
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">About Us</button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Success Stories</button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Exercises</button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Learn</button>
              <Link to="/contactus">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 hover:text-yellow-500 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Contact Us</button>
              </Link> 
              <Link to="/login">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-yellow-600">Join Us</button>    
              </Link>
            </div>
          </nav>
          <header className="text-center my-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">Welcome to Mindfit</h1>
            <p className="text-base md:text-lg text-gray-700">Nurturing Minds, Ensuring Wellness</p>
          </header>
          <section className="w-full h-full p-4 text-justify">
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={onlinetherapy} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Online Therapy</h2>
                <p className="text-xl md:text-base text-gray-700">Explore online therapy options and connect with licensed therapists for confidential counseling sessions and mental health support. Online therapy, also known as teletherapy or e-counseling, provides a convenient and accessible platform for individuals to receive professional mental health support from the comfort of their own homes. With just an internet connection and a compatible device, individuals can access a range of mental health services, including individual therapy, couples counseling, and group sessions. Online therapy offers flexibility in scheduling, allowing clients to choose appointment times that suit their busy lifestyles. Therapists utilize evidence-based treatment approaches such as cognitive-behavioral therapy (CBT) and mindfulness-based interventions to address a variety of mental health concerns, including anxiety, depression, trauma, and stress-related disorders. The confidentiality and privacy of client information are prioritized, with communication encrypted to ensure security.</p>
                <a href="https://www.manastha.com/free-online-counselling-and-therapy/" className="text-gray-800 font-semibold mt-2 block">Free Online Therapy and Counselling</a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={onlinetherapy} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Mindfulness Meditation</h2>
                <p className="text-xl md:text-base text-gray-700">Explore online therapy options and connect with licensed therapists for confidential counseling sessions and mental health support. Online therapy, also known as teletherapy or e-counseling, provides a convenient and accessible platform for individuals to receive professional mental health support from the comfort of their own homes. With just an internet connection and a compatible device, individuals can access a range of mental health services, including individual therapy, couples counseling, and group sessions. Online therapy offers flexibility in scheduling, allowing clients to choose appointment times that suit their busy lifestyles. Therapists utilize evidence-based treatment approaches such as cognitive-behavioral therapy (CBT) and mindfulness-based interventions to address a variety of mental health concerns, including anxiety, depression, trauma, and stress-related disorders. The confidentiality and privacy of client information are prioritized, with communication encrypted to ensure security.</p>
                <a href="https://www.manastha.com/free-online-counselling-and-therapy/" className="text-gray-800 font-semibold mt-2 block">Free Online Therapy and Counselling</a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={onlinetherapy} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Wellness Articles</h2>
                <p className="text-xl md:text-base text-gray-700">Explore online therapy options and connect with licensed therapists for confidential counseling sessions and mental health support. Online therapy, also known as teletherapy or e-counseling, provides a convenient and accessible platform for individuals to receive professional mental health support from the comfort of their own homes. With just an internet connection and a compatible device, individuals can access a range of mental health services, including individual therapy, couples counseling, and group sessions. Online therapy offers flexibility in scheduling, allowing clients to choose appointment times that suit their busy lifestyles. Therapists utilize evidence-based treatment approaches such as cognitive-behavioral therapy (CBT) and mindfulness-based interventions to address a variety of mental health concerns, including anxiety, depression, trauma, and stress-related disorders. The confidentiality and privacy of client information are prioritized, with communication encrypted to ensure security.</p>
                <a href="https://www.manastha.com/free-online-counselling-and-therapy/" className="text-gray-800 font-semibold mt-2 block">Free Online Therapy and Counselling</a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={onlinetherapy} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Community Forums</h2>
                <p className="text-xl md:text-base text-gray-700">Explore online therapy options and connect with licensed therapists for confidential counseling sessions and mental health support. Online therapy, also known as teletherapy or e-counseling, provides a convenient and accessible platform for individuals to receive professional mental health support from the comfort of their own homes. With just an internet connection and a compatible device, individuals can access a range of mental health services, including individual therapy, couples counseling, and group sessions. Online therapy offers flexibility in scheduling, allowing clients to choose appointment times that suit their busy lifestyles. Therapists utilize evidence-based treatment approaches such as cognitive-behavioral therapy (CBT) and mindfulness-based interventions to address a variety of mental health concerns, including anxiety, depression, trauma, and stress-related disorders. The confidentiality and privacy of client information are prioritized, with communication encrypted to ensure security.</p>
                <a href="https://www.manastha.com/free-online-counselling-and-therapy/" className="text-gray-800 font-semibold mt-2 block">Free Online Therapy and Counselling</a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={onlinetherapy} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Mental Health Resources</h2>
                <p className="text-xl md:text-base text-gray-700">Explore online therapy options and connect with licensed therapists for confidential counseling sessions and mental health support. Online therapy, also known as teletherapy or e-counseling, provides a convenient and accessible platform for individuals to receive professional mental health support from the comfort of their own homes. With just an internet connection and a compatible device, individuals can access a range of mental health services, including individual therapy, couples counseling, and group sessions. Online therapy offers flexibility in scheduling, allowing clients to choose appointment times that suit their busy lifestyles. Therapists utilize evidence-based treatment approaches such as cognitive-behavioral therapy (CBT) and mindfulness-based interventions to address a variety of mental health concerns, including anxiety, depression, trauma, and stress-related disorders. The confidentiality and privacy of client information are prioritized, with communication encrypted to ensure security.</p>
                <a href="https://www.manastha.com/free-online-counselling-and-therapy/" className="text-gray-800 font-semibold mt-2 block">Free Online Therapy and Counselling</a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 mb-8 sm:p-6 shadow-md w-full flex flex-row">
              <img src={onlinetherapy} alt="Online-therapy-pic" className="h-64 w-64"/>
              <div className="text-xl p-2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">Mindfulness Courses</h2>
                <p className="text-xl md:text-base text-gray-700">Explore online therapy options and connect with licensed therapists for confidential counseling sessions and mental health support. Online therapy, also known as teletherapy or e-counseling, provides a convenient and accessible platform for individuals to receive professional mental health support from the comfort of their own homes. With just an internet connection and a compatible device, individuals can access a range of mental health services, including individual therapy, couples counseling, and group sessions. Online therapy offers flexibility in scheduling, allowing clients to choose appointment times that suit their busy lifestyles. Therapists utilize evidence-based treatment approaches such as cognitive-behavioral therapy (CBT) and mindfulness-based interventions to address a variety of mental health concerns, including anxiety, depression, trauma, and stress-related disorders. The confidentiality and privacy of client information are prioritized, with communication encrypted to ensure security.</p>
                <a href="https://www.manastha.com/free-online-counselling-and-therapy/" className="text-gray-800 font-semibold mt-2 block">Free Online Therapy and Counselling</a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 sm:p-6 shadow-md">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Mindfulness Courses</h2>
              <p className="text-sm md:text-base text-gray-700">Explore guided meditation sessions and mindfulness exercises to cultivate presence and awareness.</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 sm:p-6 shadow-md">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Wellness Articles</h2>
              <p className="text-sm md:text-base text-gray-700">Discover articles and resources on mental health, nutrition, fitness, and more to support your well-being journey.</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 sm:p-6 shadow-md">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Community Forums</h2>
              <p className="text-sm md:text-base text-gray-700">Connect with like-minded individuals, share experiences, and find support in our community forums.</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 sm:p-6 shadow-md">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Mental Health Resources</h2>
              <p className="text-sm md:text-base text-gray-700">Access articles, guides, and support resources focused on mental health issues such as anxiety, depression, stress management, and self-care practices.</p>
              <a href="https://www.healthline.com/health/mental-health-resources#emergency-help" className="text-gray-800 font-semibold mt-2 block">Explore Mental Health Resources</a>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg p-4 sm:p-6 shadow-md">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Mindfulness Courses</h2>
              <p className="text-sm md:text-base text-gray-700">Enroll in mindfulness courses and workshops to learn practical techniques for stress reduction, emotional resilience, and mindfulness-based interventions.</p>
              <a href="https://mindfulnessexercises.com/free-online-mindfulness-courses/" className="text-gray-800 font-semibold mt-2 block">Discover Mindfulness Courses</a>
            </div>
        </section>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-200 h-screen w-full">
      <VideoBackground />
      <div className="container mx-auto w-full bg-gray-800">
        <footer className="text-center mt-8 text-white text-sm">
          <p>Contact Us: mindfitcc@gmail.com</p>
        </footer>
      </div>
    </div>
  );
};

export default HomeComponent;

