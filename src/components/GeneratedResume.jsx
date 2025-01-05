import React from 'react'

const GeneratedResume = ( {showTemplate, formData}) => {
  return (  
    <div>
        {showTemplate && (
            <div className='p-5 border border-gray-600 '>
          <div className="div flex items-center gap-5">
<div className="div1">
    <h1 className='font-semibold text-2xl '>{formData.firstname} </h1>
    <span>Software Developer</span>
    <div className='w-10 h-1 bg-black  text-black' />
    <h1 className='font-semibold text-2xl mt-3 '>Profile</h1>
    <div className='w-10 h-1 bg-black  text-black' />
    <h1 className='font-semibold text-2xl mt-48 '>Education</h1>
    <div className='w-10 h-1 bg-black  text-black' />
    <h1 className='font-semibold text-2xl mt-9 '>Experience</h1>
    <div className='w-10 h-1 bg-black  text-black' />
    <h1 className='font-semibold text-2xl mt-9 '>Reference</h1>
</div>

<div className="div2">
    <div className='w-72 h-1 bg-black  text-black' />
    <p>John Doe</p>
    <p> 56 surulere lagos</p>
    <p>    09036677768    </p>
    <p>johndoe@gmail.com</p>
    <div className='w-72 h-1 bg-black  text-black' />
 <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>

<p>Date of birth :</p>
<p>Gender :</p>
<p>State of Origin :</p>
<p>L.G.A :</p>
<p>Marital Status : single</p>
<p>Religion : Islam</p>

<div className='w-72 h-1 bg-black  text-black' />
<p>University of Lagos</p>
<p>Bsc</p>
<p>sep-2013 jul-2018</p>
<div className='w-72 h-1 bg-black  text-black' />
<p className='font-semibold text-lg'> Mr Bigs</p>
<p className='font-semibold'> Sales Rep</p>
<p>sep-2013 jul-2018</p>
<div className='w-72 h-1 bg-black  text-black' />
<p className='font-semibold'> Mrs Morris</p>
<p>090346879866</p>


</div>

          </div> f



            </div> 
        )}
    </div> 
  )
}

export default GeneratedResume