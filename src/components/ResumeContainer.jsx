
"use client"
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import GeneratedResume from './GeneratedResume'

const ResumeContainer = () => {

 const [formData, setFormData] = useState({
    firstname : "",
    lastname:"",
    job:"",
    about: "",
    birth:"",
    local:"",
    origin:"",
    gender :"",
    status: "",
    religion:"",
    address:"",
    phone:"",
    email:"",
    institute:"",
    typeinstitute:"",
    quali:"",
    started:"",
    finished:"",
    check:"",
    Organization:"",
    position:"",
    location:"",
    from:"",
    to:"",
    refereesname:"",
    refereesposition:"",
    refereesorg:"",
    refereescontact:"",
 })
const [showTemplate, SetShowTemplate] = useState(false)
 const handleInputChange = (e)=>{

    // const {name, value} = e.tatget.value;
    // setFormData(prev => ({
    //     ...prev,
    //     [name] : value
    // }))
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(name)
 }

 const handleSubmit = (e)=>{
    e.preventDefault();
    SetShowTemplate(true)
    console.log("got it")

 }

  return (   
    <div className='shadow-2xl border shadow-slate-100 p-10'>
        <div className="container">
<h1 className='text-2xl font-semibold text-start'>Profile Information</h1>
<form action=""  className='mt-4 flex flex-col gap-3 ' onSubmit={handleSubmit}>
<div className="div1 flex gap-4 items-center ">
    <div className='flex flex-col gap-1 '>
    <label htmlFor="" className='font-semibold'>First name</label>
    <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} id="" placeholder='e.g John'  className='border rounded-md w-[230px] p-2 outline-none bg-slate-50'/>
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Last name</label>
    <input type="text" name="lastname" id="" value={formData.lastname} onChange={handleInputChange} placeholder='e.g Doe' className='border rounded-md w-[230px] p-2 outline-none bg-slate-50' />
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Job title</label>
    <input type="text" name="job" id="" value={formData.job} onChange={handleInputChange} placeholder='e.g Web Developer' className='border w-[230px] rounded-md p-2 outline-none bg-slate-50' />
    </div>
</div>
<label htmlFor="" className='font-semibold'>Say a little bit about yourself</label>
<input type="text" name="about" id="" value={formData.about} onChange={handleInputChange} placeholder='e.g:a self motivated... ' className='border rounded-md p-4 outline-none bg-slate-50'   />
<hr  className='w-full h-1'/>

<div className="div1 flex gap-4 items-center ">
    <div className='flex flex-col gap-1 '>
    <label htmlFor="" className='font-semibold'>Date of birth</label>
    <input type="date" name="birth" id="" placeholder='mm/dd/yyyy' value={formData.birth} onChange={handleInputChange}  className='border w-[230px] rounded-md p-2 outline-none bg-slate-50'/>
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>State of Origin</label>
    <input type="text" name="origin" id="" placeholder='e.g lagos' value={formData.origin} onChange={handleInputChange} className='border w-[230px] rounded-md p-2 outline-none bg-slate-50' />
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>LGA</label>
    <input type="text" name="local" id="" placeholder='e.g Badagry' value={formData.local} onChange={handleInputChange} className='w-[230px] border rounded-md p-2 outline-none bg-slate-50' />
    </div>
</div>

<div className="div1 flex gap-4 items-center ">
    <div className='flex flex-col gap-1 '>
    <label htmlFor="" className='font-semibold'>Gender</label>
    <select name="gender" id="" value={formData.gender} onChange={handleInputChange} className='border  w-[230px] rounded-md p-2 outline-none bg-slate-50'>
        <option value="Choose" >Choose</option>
<option value="Male">Male</option>
<option value="female">female</option>
    </select>
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Marital Status</label>
    <select name="status" id="" value={formData.status} onChange={handleInputChange} className='border w-[230px] rounded-md p-2 outline-none bg-slate-50'>
        <option value="Choose" >Choose</option>
<option value="Male">Married</option>
<option value="female">Single</option>
    </select>
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Religion</label>
    <select name="religion" id="" onChange={handleInputChange} value={formData.religion} className='border w-[230px] rounded-md p-2 outline-none bg-slate-50'>
        <option value="Choose" >Choose</option>
<option value="Male">Islam</option>
<option value="female">Christianity</option>
    </select>

    </div>
</div>

<div className="div1 flex gap-4 items-center ">
    <div className='flex flex-col gap-1 '>
    <label htmlFor="" className='font-semibold'>Address</label>
    <input type="text" name="address" id="" value={formData.address} onChange={handleInputChange} placeholder='e.g:123 areola street'  className='border rounded-md w-[500px] p-2 outline-none bg-slate-50'/>
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Phone</label>
    <input type="number" name="phone" id="" onChange={handleInputChange} value={formData.phone} placeholder='e.g:09078542345' className='border rounded-md w-[230px] p-2 outline-none bg-slate-50' />
    </div>

</div>

<div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Email</label>
    <input type="email" name="email" id="" value={formData.email} onChange={handleInputChange} placeholder='johndoe@gmail.com'  className='border w-[230px] rounded-md p-2 outline-none bg-slate-50'/>
    </div>

<h1 className='text-2xl font-semibold text-start'>Educational History</h1>

<div className="div1 flex gap-4 items-center ">
    <div className='flex flex-col gap-1 '>
    <label htmlFor="" className='font-semibold'>Name of Institute</label>
    <input type="text" name="institute" id="" value={formData.institute} onChange={handleInputChange} placeholder='e.g:Lagos state university'  className='border rounded-md w-[500px] p-2 outline-none bg-slate-50'/>
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Location</label>
    <input type="text" name="location" id="" value={formData.location} onChange={handleInputChange} placeholder='e.g:Lagos' className='border rounded-md w-[230px] p-2 outline-none bg-slate-50' />
    </div>
</div>

<div className="div1 flex gap-4 items-center ">
    <div className='flex flex-col gap-1 '>
    <label htmlFor="" className='font-semibold'>Type of Institute</label>
    <select name="typeinstitute" id="" value={formData.typeinstitute} onChange={handleInputChange} className='border  w-[230px] rounded-md p-2 outline-none bg-slate-50'>
        <option value="Choose" >Choose</option>
<option value="Male">Tetiary</option>
<option value="female">female</option>
    </select>
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Qualification Obtained</label>
    <select name="quali" id="" value={formData.quali} onChange={handleInputChange} className='border w-[230px] rounded-md p-2 outline-none bg-slate-50'>
        <option value="Choose" >Choose</option>
<option value="Bsc">Bsc</option>
<option value="OND">OND</option>
    </select>
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Started When</label>
    <input type="date" name="started" id="" value={formData.started} onChange={handleInputChange} placeholder='mm/dd/yyyy'  className='border w-[230px] rounded-md p-2 outline-none bg-slate-50'/>
    </div>
</div>
<div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Finished When</label>
    <input type="date" name="finished" id="" value={formData.finished} onChange={handleInputChange} placeholder='mm/dd/yyyy'  className='border w-[230px] rounded-md p-2 outline-none bg-slate-50'/>
    </div>
<div className="checkbox flex items-center gap-1">
    <input type="checkbox" onChange={handleInputChange} value={formData.check} name="check" id="" />
    <p className='text-gray-800'>I have not finished</p>
</div>
<div className="plus   text-emerald-700 flex gap-1 items-center border w-max  border-emerald-700 rounded-md p-1 ">
    <Plus/>
    <p className=' text-emerald-600 text-sm '>Add Education</p>
</div>
<h1 className='text-2xl font-semibold text-start'>Work Experience</h1>
<div className="div1 flex gap-4 items-center ">
    <div className='flex flex-col gap-1 '>
    <label htmlFor="" className='font-semibold'>Name of Organization</label>
    <input type="text"  value={formData.Organization} onChange={handleInputChange} name="Organization" id="" placeholder='e.g:Solana'  className='border rounded-md w-[500px] p-2 outline-none bg-slate-50'/>
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Position</label>
    <input type="text" name="position" onChange={handleInputChange} value={formData.position} id="" placeholder='e.g:Sales Rep' className='border rounded-md w-[230px] p-2 outline-none bg-slate-50' />
    </div>
</div>

<div className="div1 flex gap-4 items-center ">
    <div className='flex flex-col gap-1 '>
    <label htmlFor="" className='font-semibold'>Location</label>
    <input type="text" name="location" id="" value={formData.location} onChange={handleInputChange} placeholder='e.g:Lagos' className='border rounded-md w-[230px] p-2 outline-none bg-slate-50' />

    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>From When</label>
    <input type="date" name="from" id="" value={formData.from} onChange={handleInputChange} placeholder='mm/dd/yyyy'  className='border w-[230px] rounded-md p-2 outline-none bg-slate-50'/>

    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>To When</label>
    <input type="date" name="to" id="" value={formData.to} onChange={handleInputChange} placeholder='mm/dd/yyyy'  className='border w-[230px] rounded-md p-2 outline-none bg-slate-50'/>
    </div>
</div>
<div className="plus   text-emerald-700 flex gap-1 items-center border w-max  border-emerald-700 rounded-md p-1 ">
    <Plus/>
    <p className='  text-emerald-600 text-sm '>Add Work</p>
</div>
<h1 className='text-2xl font-semibold text-start'>Referees</h1>
<div className="div1 flex gap-4 items-center ">
    <div className='flex flex-col gap-1 '>
    <label htmlFor="" className='font-semibold'>Full Name</label>
    <input type="text" value={formData.refereesname} onChange={handleInputChange} name="refereesname" id="" placeholder='e.g:Mrs Doe'  className='border rounded-md w-[500px] p-2 outline-none bg-slate-50'/>
    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Organization</label>
    <input type="text" name="refereesorg" value={formData.refereesorg} onChange={handleInputChange} id="" placeholder='e.g:Mrs Doe Designs ' className='border rounded-md w-[230px] p-2 outline-none bg-slate-50' />
    </div>
</div>
<div className="div1 flex gap-4 items-center ">
    <div className='flex flex-col gap-1 '>
    <label htmlFor="" className='font-semibold'>Position</label>
    <input type="text" name="refereesposition" value={formData.refereesposition} onChange={handleInputChange} id="" placeholder='e.g:Mrs Doe' className='border rounded-md w-[230px] p-2 outline-none bg-slate-50' />

    </div>
    <div className='flex flex-col gap-1'>
    <label htmlFor="" className='font-semibold'>Contact</label>
    <input type="text" name="refereescontact" value={formData.refereescontact} onChange={handleInputChange} id="" placeholder='e.g:Mrs Doe Contact' className='border rounded-md w-[230px] p-2 outline-none bg-slate-50' />

    </div>

</div>
<div className="plus   text-emerald-700 flex gap-1 items-center border w-max  border-emerald-700 rounded-md p-1 ">
    <Plus/>
    <p className='  text-emerald-600 text-sm '>Add Referees</p>
</div>
<button type="submit"  className='border font-semibold text-xl rounded-md w-full mt-5 p-2 outline-none bg-purple-600 hover:bg-purple-700 text-white' >Continue</button>

</form> 
</div>
<GeneratedResume showTemplate={showTemplate} formData={formData}  />
{/* {showTemplate &&(
    <div className="div bg-green-500 p-2 border  ">
    
    </div>
)
} */}
    </div>
  )
}

export default ResumeContainer