

"use client"
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import GeneratedResume from './GeneratedResume'

const ResumeContainer = () => {
  const [formData, setFormData] = useState({
    firstname: "", lastname: "", job: "", about: "", birth: "", local: "",
    origin: "", gender: "", status: "", religion: "", address: "", phone: "",
    email: "", institute: "", typeinstitute: "", quali: "", started: "",
    finished: "", check: "", Organization: "", position: "", location: "",
    from: "", to: "", refereesname: "", refereesposition: "", refereesorg: "",
    refereescontact: ""
  })

  const [showTemplate, setShowTemplate] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTemplate(true)
  }

  const InputField = ({ label, name, type = "text", placeholder = "", options = [] }) => (
    <div className='flex flex-col gap-1 w-full'>
      <label className='font-semibold'>{label}</label>
      {type === "select" ? (
        <select 
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className='border rounded-md p-2 outline-none bg-slate-50 w-full'
        >
          <option value="Choose">Choose</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input 
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          placeholder={placeholder}
          className='border rounded-md p-2 outline-none bg-slate-50 w-full'
        />
      )}
    </div>
  )

  const AddButton = ({ text }) => (
    <button className="plus text-emerald-700 flex gap-1 items-center border border-emerald-700 rounded-md p-1 w-max hover:bg-emerald-50">
      <Plus />
      <p className='text-emerald-600 text-sm'>Add {text}</p>
    </button>
  )

  const SectionTitle = ({ title }) => (
    <>
      <h1 className='text-xl md:text-2xl font-semibold text-start mt-6'>{title}</h1>
      <hr className='w-full h-[1px] bg-gray-500'/>
    </>
  )

  return (
    <div className='shadow-2xl border shadow-slate-100 p-4 md:p-6 lg:p-10 w-full max-w-7xl mx-auto'>
      <div className="w-full">
        <h1 className='text-xl md:text-2xl font-semibold text-start'>Profile Information</h1>
        <form className='mt-4 flex flex-col gap-3 w-full' onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <InputField label="First name" name="firstname" placeholder="e.g John" />
            <InputField label="Last name" name="lastname" placeholder="e.g Doe" />
            <InputField label="Job title" name="job" placeholder="e.g Web Developer" />
          </div>

          <InputField 
            label="About yourself" 
            name="about" 
            placeholder="e.g: a self motivated..."
          />

          <hr className='w-full h-1'/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <InputField label="Date of birth" name="birth" type="date" />
            <InputField label="State of Origin" name="origin" placeholder="e.g lagos" />
            <InputField label="LGA" name="local" placeholder="e.g Badagry" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <InputField 
              label="Gender" 
              name="gender" 
              type="select" 
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" }
              ]}
            />
            <InputField 
              label="Marital Status" 
              name="status" 
              type="select" 
              options={[
                { value: "Married", label: "Married" },
                { value: "Single", label: "Single" }
              ]}
            />
            <InputField 
              label="Religion" 
              name="religion" 
              type="select" 
              options={[
                { value: "Islam", label: "Islam" },
                { value: "Christianity", label: "Christianity" }
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField label="Address" name="address" placeholder="e.g:123 areola street" />
            <InputField label="Phone" name="phone" type="number" placeholder="e.g:09078542345" />
          </div>

          <div className='w-full md:w-1/2'>
            <InputField label="Email" name="email" type="email" placeholder="johndoe@gmail.com" />
          </div>

          <SectionTitle title="Educational History" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField label="Name of Institute" name="institute" placeholder="e.g:Lagos state university" />
            <InputField label="Location" name="location" placeholder="e.g:Lagos" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <InputField 
              label="Type of Institute" 
              name="typeinstitute" 
              type="select" 
              options={[
                { value: "Tertiary", label: "Tertiary" },
                { value: "Secondary", label: "Secondary" }
              ]}
            />
            <InputField 
              label="Qualification Obtained" 
              name="quali" 
              type="select" 
              options={[
                { value: "Bsc", label: "BSc" },
                { value: "OND", label: "OND" }
              ]}
            />
            <InputField label="Started When" name="started" type="date" />
          </div>

          <div className='w-full md:w-1/3'>
            <InputField label="Finished When" name="finished" type="date" />
          </div>

          <div className="flex items-center gap-1">
            <input 
              type="checkbox" 
              name="check" 
              checked={formData.check} 
              onChange={handleInputChange}
              className="h-4 w-4"
            />
            <p className='text-gray-800'>I have not finished</p>
          </div>

          <AddButton text="Education" />

          <SectionTitle title="Work Experience" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField label="Name of Organization" name="Organization" placeholder="e.g:Solana" />
            <InputField label="Position" name="position" placeholder="e.g:Sales Rep" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <InputField label="Location" name="location" placeholder="e.g:Lagos" />
            <InputField label="From When" name="from" type="date" />
            <InputField label="To When" name="to" type="date" />
          </div>

          <AddButton text="Work" />

          <SectionTitle title="Referees" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField label="Full Name" name="refereesname" placeholder="e.g:Mrs Doe" />
            <InputField label="Organization" name="refereesorg" placeholder="e.g:Mrs Doe Designs" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField label="Position" name="refereesposition" placeholder="e.g:Manager" />
            <InputField label="Contact" name="refereescontact" placeholder="e.g:Contact details" />
          </div>

          <AddButton text="Referees" />

          <button 
            type="submit" 
            className='border font-semibold text-xl rounded-md w-full mt-5 p-2 outline-none bg-purple-600 hover:bg-purple-700 text-white'
          >
            Continue
          </button>
        </form>
      </div>

      <div className="p-6 max-h-[80vh] overflow-y-auto">
        <GeneratedResume  
          showTemplate={showTemplate} 
          formData={formData} 
          onClose={() => setShowTemplate(false)} 
        />
      </div>
    </div>
  )
}

export default ResumeContainer