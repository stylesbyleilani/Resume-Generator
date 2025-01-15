



// import Link from 'next/link';
// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className='flex items-center justify-center  font-semibold min-h-screen '>
//       <div className='text-start max-w-4xl px-4 py-8 bg-white rounded-xl  mt-24'>

//        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
//           Build a Professional Resume for Free
//         </h1>
//         <p className='text-lg text-gray-600 mb-6'>
//           <span className='block'>Create your resume easily with our intuitive resume builder and </span>
//           <span> builder and choose from a variety of sleek, professional templates.
//            </span>
//         </p>

//         <div className='flex justify-start items-start mb-6'>
//           <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-400'></div>
//         </div>



//         <Link href="/resume">
//           <button
//             className='w-[230px] mt-6 py-3 text-xl font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105'
//           >
//             Create My Resume
//           </button>
//         </Link>


//       </div>

//       <div className="img">
//         <img src="/res.webp" alt="resume" className='w-[300px] h-[300px] ' />
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center min-h-screen p-0 ">
      <div className="text-start max-w-2xl bg-white rounded-xl p-0">
        <h1 className="text-7xl font-bold text-gray-800 mb-4">
          Build a Professional Resume for Free
        </h1>
        
        <p className="text-lg text-gray-600 mb-6">
          Create your resume easily with our intuitive resume builder and 
          choose from a variety of sleek, professional templates.
        </p>

        <div className="mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-400" />
        </div>

        <Link 
          href="/resume"
          className="inline-block w-56 py-3 text-xl font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-800 transition duration-300 hover:scale-105 text-center"
        >
          Create My Resume
        </Link>
      </div>

      <div className=" w-[1000px] h-[900px] relative   hover:scale-105">
        <Image
      
          src="/res.webp"
          alt="Resume preview"
          fill
          priority
          className="object-contain"
        />
      </div>
    </main>
  );
};

export default HomePage;