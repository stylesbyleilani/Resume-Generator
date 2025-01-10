


// // Add key skills and technical skill to the form and make it appear as a list, 
// // also add required to it and github and portfolio form to it 
// // improve the welcome ui 
// //fix the form issie
// // push to github





"use client"
import { Plus, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import GeneratedResume from './GeneratedResume'

const ResumeContainer = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    job: "",
    about: "",
    birth: "",
    skill: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    local: "",
    origin: "",
    gender: "",
    status: "",
    religion: "",
    address: "",
    phone: "",
    email: ""
  })

  const [mainEducation, setMainEducation] = useState({
    institute: "",
    typeinstitute: "",
    quali: "",
    started: "",
    finished: "",
    check: false,
    location: ""
  })

  const [mainExperience, setMainExperience] = useState({
    Organization: "",
    position: "",
    location: "",
    from: "",
    to: ""
  })

  const [mainReferee, setMainReferee] = useState({
    refereesname: "",
    refereesposition: "",
    refereesorg: "",
    refereescontact: ""
  })

  const [educationList, setEducationList] = useState([])
  const [experienceList, setExperienceList] = useState([])
  const [refereesList, setRefereesList] = useState([])

  const handleEducationChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setEducationList(prevList => {
      const updatedList = [...prevList];
      updatedList[index] = {
        ...updatedList[index],
        [name]: newValue
      };
      return updatedList;
    });
  }

  const handleMainEducationChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setMainEducation(prev => ({
      ...prev,
      [name]: newValue
    }));
  }

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    setExperienceList(prevList => {
      const updatedList = [...prevList];
      updatedList[index] = {
        ...updatedList[index],
        [name]: value
      };
      return updatedList;
    });
  }

  const handleMainExperienceChange = (e) => {
    const { name, value } = e.target;
    setMainExperience(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleRefereesChange = (index, e) => {
    const { name, value } = e.target;
    setRefereesList(prevList => {
      const updatedList = [...prevList];
      updatedList[index] = {
        ...updatedList[index],
        [name]: value
      };
      return updatedList;
    });
  }

  const handleMainRefereeChange = (e) => {
    const { name, value } = e.target;
    setMainReferee(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const addEducation = () => {
    setEducationList(prev => [...prev, {
      institute: "",
      typeinstitute: "",
      quali: "",
      started: "",
      finished: "",
      check: false,
      location: ""
    }]);
  }

  const addExperience = () => {
    setExperienceList(prev => [...prev, {
      Organization: "",
      position: "",
      location: "",
      from: "",
      to: ""
    }]);
  }

  const addReferee = () => {
    setRefereesList(prev => [...prev, {
      refereesname: "",
      refereesposition: "",
      refereesorg: "",
      refereescontact: ""
    }]);
  }

  const removeEducation = (index) => {
    setEducationList(prev => prev.filter((_, i) => i !== index));
  }

  const removeExperience = (index) => {
    setExperienceList(prev => prev.filter((_, i) => i !== index));
  }

  const removeReferee = (index) => {
    setRefereesList(prev => prev.filter((_, i) => i !== index));
  }

  const [showTemplate, setShowTemplate] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: newValue
    }));
  }

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   const newValue = type === 'checkbox' ? checked : value;
      
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [name]: newValue
  //   }));
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const allData = {
      ...formData,
      education: [mainEducation, ...educationList],
      experience: [mainExperience, ...experienceList],
      referees: [mainReferee, ...refereesList]
    };
    setShowTemplate(true);
  }

  const InputField = ({ label, name, type = "text", placeholder = "", value, onChange, options = [] }) => (
    <div className='flex flex-col gap-1 w-full'>
      <label htmlFor={name} className='font-semibold'>{label}</label>
      {type === "select" ? (
        <select 
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className='border rounded-md p-2 outline-none bg-slate-50 w-full'
        >
          <option value="">Choose</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input 
          id={name}
          type={type}
          name={name}
          // value={value}
          // onChange={onChange}
          placeholder={placeholder}
          className='border rounded-md p-2 outline-none bg-slate-50 w-full'
          required
        />
      )}
    </div>
  )

  const SectionTitle = ({ title }) => (
    <>
      <h1 className='text-xl md:text-2xl font-semibold text-start mt-6'>{title}</h1>
      <hr className='w-full h-[1px] bg-gray-500'/>
    </>
  )

  return (
    <div className='shadow-2xl border shadow-slate-100 p-4 md:p-6 lg:p-10 w-[380px] md:w-full max-w-7xl mx-auto'>
      <div className="w-full">
        <h1 className='text-xl md:text-2xl font-semibold text-start'>Profile Information</h1>
        <form className='mt-4 flex flex-col gap-3 w-full' onSubmit={handleSubmit}>
              {/* <input type="text" className='bg-green-200' /> */}


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <InputField 
              label="First name" 
              name="firstname" 
              placeholder="e.g John"
              value={formData.firstname}
              onChange={handleInputChange}
            />
            <InputField 
              label="Last name" 
              name="lastname" 
              placeholder="e.g Doe"
              value={formData.lastname}
              onChange={handleInputChange}
            />
            <InputField 
              label="Job title" 
              name="job" 
              placeholder="e.g Web Developer"
              value={formData.job}
              onChange={handleInputChange}
            />
          </div>

          <InputField 
            label="About yourself" 
            name="about" 
            placeholder="e.g: a self motivated..."
            value={formData.about}
            onChange={handleInputChange}
          />

          <hr className='w-full h-1'/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <InputField 
              label="Date of birth" 
              name="birth" 
              type="date"
              value={formData.birth}
              onChange={handleInputChange}
            />
            <InputField 
              label="State of Origin" 
              name="origin" 
              placeholder="e.g lagos"
              value={formData.origin}
              onChange={handleInputChange}
            />
            <InputField 
              label="LGA" 
              name="local" 
              placeholder="e.g Badagry"
              value={formData.local}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <InputField 
              label="Gender" 
              name="gender" 
              type="select" 
              value={formData.gender}
              onChange={handleInputChange}
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" }
              ]}
            />
            <InputField 
              label="Marital Status" 
              name="status" 
              type="select" 
              value={formData.status}
              onChange={handleInputChange}
              options={[
                { value: "Married", label: "Married" },
                { value: "Single", label: "Single" }
              ]}
            />
            <InputField 
              label="Religion" 
              name="religion" 
              type="select" 
              value={formData.religion}
              onChange={handleInputChange}
              options={[
                { value: "Islam", label: "Islam" },
                { value: "Christianity", label: "Christianity" }
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField 
              label="Address" 
              name="address" 
              placeholder="e.g:123 areola street"
              value={formData.address}
              onChange={handleInputChange}
            />
            <InputField 
              label="Phone" 
              name="phone" 
              type="tel" 
              placeholder="e.g:09078542345"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className='w-full md:w-1/2'>
            <InputField 
              label="Email" 
              name="email" 
              type="email" 
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <SectionTitle title="Education" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField 
              label="Name of Institute" 
              name="institute" 
              placeholder="e.g:Lagos state university"
              value={mainEducation.institute}
              onChange={handleMainEducationChange}
            />
            <InputField 
              label="Location" 
              name="location" 
              placeholder="e.g:Lagos"
              value={mainEducation.location}
              onChange={handleMainEducationChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <InputField 
              label="Type of Institute" 
              name="typeinstitute" 
              type="select" 
              value={mainEducation.typeinstitute}
              onChange={handleMainEducationChange}
              options={[
                { value: "Tertiary", label: "Tertiary" },
                { value: "Secondary", label: "Secondary" }
              ]}
            />
            <InputField 
              label="Qualification Obtained" 
              name="quali" 
              type="select" 
              value={mainEducation.quali}
              onChange={handleMainEducationChange}
              options={[
                { value: "Bsc", label: "BSc" },
                { value: "OND", label: "OND" }
              ]}
            />
            <InputField 
              label="Started When" 
              name="started" 
              type="date"
              value={mainEducation.started}
              onChange={handleMainEducationChange}
            />
          </div>

          <div className='w-full md:w-1/3'>
            <InputField 
              label="Finished When" 
              name="finished" 
              type="date"
              value={mainEducation.finished}
              onChange={handleMainEducationChange}
            />
          </div>

          <div className="flex items-center gap-1">
            <input 
              type="checkbox" 
              id="check"
              name="check" 
              checked={mainEducation.check}
              onChange={handleMainEducationChange}
              className="h-4 w-4"
            />
            <label htmlFor="check" className='text-gray-800'>I have not finished</label>
          </div>

          {educationList.map((education, index) => (
            <div key={index} className="relative border p-4 rounded-md">
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
              <SectionTitle title={`Additional Education ${index + 1}`} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <InputField 
                  label="Name of Institute" 
                  name="institute" 
                  placeholder="e.g:Lagos state university"
                  value={education.institute}
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <InputField 
                  label="Location" 
                  name="location" 
                  placeholder="e.g:Lagos"
                  value={education.location}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4">
                <InputField 
                  label="Type of Institute" 
                  name="typeinstitute" 
                  type="select" 
                  value={education.typeinstitute}
                  onChange={(e) => handleEducationChange(index, e)}
                  options={[
                    { value: "Tertiary", label: "Tertiary" },
                    { value: "Secondary", label: "Secondary" }
                  ]}
                />
                <InputField 
                  label="Qualification Obtained" 
                  name="quali" 
                  type="select" 
                  value={education.quali}
                  onChange={(e) => handleEducationChange(index, e)}
                  options={[
                    
                      { value: "Bsc", label: "BSc" },
                    { value: "OND", label: "OND" }
                  ]}
                />
                <InputField 
                  label="Started When" 
                  name="started" 
                  type="date"
                  value={education.started}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>

              <div className='w-full md:w-1/3 mt-4'>
                <InputField 
                  label="Finished When" 
                  name="finished" 
                  type="date"
                  value={education.finished}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>

              <div className="flex items-center gap-1 mt-2">
                <input 
                  type="checkbox" 
                  name="check" 
                  checked={education.check}
                  onChange={(e) => handleEducationChange(index, e)}
                  className="h-4 w-4"
                />
                <label className='text-gray-800'>I have not finished</label>
              </div>
            </div>
          ))}

          <button 
            type="button" 
            onClick={addEducation}
            className="text-emerald-700 flex gap-1 items-center border border-emerald-700 rounded-md p-1 w-max hover:bg-emerald-50"
          >
            <Plus />
            <p className='text-emerald-600 text-sm'>Add Education</p>
          </button>

          <SectionTitle title="Work Experience" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField 
              label="Name of Organization" 
              name="Organization" 
              placeholder="e.g:Solana"
              value={mainExperience.Organization}
              onChange={handleMainExperienceChange}
            />
            <InputField 
              label="Position" 
              name="position" 
              placeholder="e.g:Sales Rep"
              value={mainExperience.position}
              onChange={handleMainExperienceChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <InputField 
              label="Location" 
              name="location" 
              placeholder="e.g:Lagos"
              value={mainExperience.location}
              onChange={handleMainExperienceChange}
            />
            <InputField 
              label="From When" 
              name="from" 
              type="date"
              value={mainExperience.from}
              onChange={handleMainExperienceChange}
            />
            <InputField 
              label="To When" 
              name="to" 
              type="date"
              value={mainExperience.to}
              onChange={handleMainExperienceChange}
            />
          </div>

          {experienceList.map((experience, index) => (
            <div key={index} className="relative border p-4 rounded-md mt-4">
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
              <SectionTitle title={`Additional Experience ${index + 1}`} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <InputField 
                  label="Name of Organization" 
                  name="Organization" 
                  placeholder="e.g:Solana"
                  value={experience.Organization}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <InputField 
                  label="Position" 
                  name="position" 
                  placeholder="e.g:Sales Rep"
                  value={experience.position}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-4">
                <InputField 
                  label="Location" 
                  name="location" 
                  placeholder="e.g:Lagos"
                  value={experience.location}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <InputField 
                  label="From When" 
                  name="from" 
                  type="date"
                  value={experience.from}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <InputField 
                  label="To When" 
                  name="to" 
                  type="date"
                  value={experience.to}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
            </div>
          ))}

          <button 
            type="button" 
            onClick={addExperience}
            className="text-emerald-700 flex gap-1 items-center border border-emerald-700 rounded-md p-1 w-max hover:bg-emerald-50"
          >
            <Plus />
            <p className='text-emerald-600 text-sm'>Add Work Experience</p>
          </button>

          <div className="mt-4">
            <SectionTitle title="Key Skills" />
            <div className="grid grid-cols-1 gap-4 w-full mt-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <InputField 
                  key={num}
                  label={`Key Skill ${num}`}
                  name={`skill${num === 1 ? '' : num}`}
                  placeholder="e.g: Strong problem solving skills"
                  value={formData[`skill${num === 1 ? '' : num}`]}
                  onChange={handleInputChange}
                />
              ))}
            </div>
          </div>

          <SectionTitle title="Referees" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField 
              label="Full Name" 
              name="refereesname" 
              placeholder="e.g:Mrs Doe"
              value={mainReferee.refereesname}
              onChange={handleMainRefereeChange}
            />
            <InputField 
              label="Organization" 
              name="refereesorg" 
              placeholder="e.g:Mrs Doe Designs"
              value={mainReferee.refereesorg}
              onChange={handleMainRefereeChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InputField 
              label="Position" 
              name="refereesposition" 
              placeholder="e.g:Manager"
              value={mainReferee.refereesposition}
              onChange={handleMainRefereeChange}
            />
            <InputField 
              label="Contact" 
              name="refereescontact" 
              placeholder="e.g:Contact details"
              value={mainReferee.refereescontact}
              onChange={handleMainRefereeChange}
            />
          </div>

          {refereesList.map((referee, index) => (
            <div key={index} className="relative border p-4 rounded-md mt-4">
              <button
                type="button"
                onClick={() => removeReferee(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
              <SectionTitle title={`Additional Referee ${index + 1}`} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <InputField 
                  label="Full Name" 
                  name="refereesname" 
                  placeholder="e.g:Mrs Doe"
                  value={referee.refereesname}
                  onChange={(e) => handleRefereesChange(index, e)}
                />
                <InputField 
                  label="Organization" 
                  name="refereesorg" 
                  placeholder="e.g:Mrs Doe Designs"
                  value={referee.refereesorg}
                  onChange={(e) => handleRefereesChange(index, e)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
                <InputField 
                  label="Position" 
                  name="refereesposition" 
                  placeholder="e.g:Manager"
                  value={referee.refereesposition}
                  onChange={(e) => handleRefereesChange(index, e)}
                />
                <InputField 
                  label="Contact" 
                  name="refereescontact" 
                  placeholder="e.g:Contact details"
                  value={referee.refereescontact}
                  onChange={(e) => handleRefereesChange(index, e)}
                />
              </div>
            </div>
          ))}

          <button 
            type="button" 
            onClick={addReferee}
            className="text-emerald-700 flex gap-1 items-center border border-emerald-700 rounded-md p-1 w-max hover:bg-emerald-50"
          >
            <Plus />
            <p className='text-emerald-600 text-sm'>Add Referee</p>
          </button>

          <button 
            type="submit" 
            className='border font-semibold text-xl rounded-md w-full mt-5 p-2 outline-none bg-[#7024c7fd] hover:bg-purple-700 text-white'
          >
            Create my resume
          </button>
        </form>
      </div>

      <div className="p-6 max-h-[80vh] overflow-y-auto">
        <GeneratedResume  
          showTemplate={showTemplate} 
          formData={formData}
          educationData={[mainEducation, ...educationList]}
          experienceData={[mainExperience, ...experienceList]}
          refereesData={[mainReferee, ...refereesList]}
          onClose={() => setShowTemplate(false)} 
        />
      </div>
    </div>
  )
}

export default ResumeContainer





