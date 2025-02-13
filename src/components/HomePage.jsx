import Link from 'next/link';
import React from 'react';
const HomePage = () => {
  return (
    <div className='flex items-center justify-center flex-col font-semibold min-h-screen '>
      <div className='text-center max-w-4xl px-4 py-8 bg-white rounded-xl  mt-24'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Build a Professional Resume for Free
        </h1>
        <p className='text-lg text-gray-600 mb-6'>
          Create your resume easily with our intuitive resume builder and choose from a variety of sleek, professional templates.
        </p>
        <div className='flex justify-center items-center mb-6'>
          <div className='w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-400'></div>
        </div>
        <div className='space-y-4'>
          <p className='text-gray-700'>
            Our resume builder is designed for simplicity and effectiveness. Whether you're starting from scratch or looking to update your current resume, we make it easy for you to create a standout resume.
          </p>
        </div>
        <Link href="/resume">
          <button
            className='w-full mt-6 py-3 text-xl font-semibold text-white bg-purple-700 rounded-md hover:bg-purple-800 transition duration-300 ease-in-out transform hover:scale-105'
          >
            Create My Resume
          </button>
        </Link>
        <div className='mt-8'>
          <p className='text-sm text-gray-600'>
            Join thousands of people who have already built professional resumes with our easy-to-use tool. It's time to land your dream job!
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;