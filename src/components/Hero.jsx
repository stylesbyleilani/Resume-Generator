




import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-white '>
      <div className='absolute inset-0'>
        <Image 
          alt='smack Mall'
          src="/hero.jpg"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className='object-cover z-0  '
        />
        <div className='absolute inset-0 bg-black/80 z-10'></div>
      </div>
      
      <div className='relative z-20 flex flex-col justify-center items-center min-h-screen text-white px-4 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-6xl lg:text-8xl font-serif tracking-wide font-semibold'>
            <span className='block mb-2'>Welcome to</span>
            <span className='block text-cyan-600'> <span className='text-pink-500'>Smack</span> Mini Mall</span>
          </h1>
          <p className='text-base md:text-lg mt-4 px-4 max-w-2xl mx-auto'>
            Smack Mini Mall is supermarket store where you can shop, order online at the comfort of your home
          </p>
          <button className='
            px-10 md:px-20 
            py-3 
            mt-6 
            text-base md:text-xl 
            bg-cyan-600
            rounded-full 
            shadow-sm 
            hover:bg-cyan-700 
            transition-colors 
            duration-300
          '>
            Enter Store
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home