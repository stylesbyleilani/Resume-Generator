



// import React from 'react';

// const GeneratedResume = ({ showTemplate, formData, onClose }) => {
//   if (!showTemplate) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
//       <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg">
//         {/* Modal Header */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <h2 className="text-3xl text-center font-semibold">Choose a template</h2>
//           <button 
//             onClick={onClose}
//             className="p-1 hover:bg-gray-100 text-2xl rounded-full transition-colors"
//             aria-label="Close modal"
//           >
//             <svg 
//               className="w-6 h-6" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d="M6 18L18 6M6 6l12 12" 
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Modal Content */}
//         <div className="div flex items-center gap-5">
//         <div className="p-6 max-h-[80vh] overflow-y-auto">
//           <div className="flex justify-center items-center">
//             <div className="p-5 border border-gray-600 bg-white w-full max-w-3xl">
//               <div className="flex flex-col md:flex-row gap-8">
//                 {/* Left Column */}
//                 <div className="w-full md:w-1/3">
//                   <h1 className='font-semibold text-2xl'>{formData.firstname} {formData.lastname}</h1>
//                   <span className="text-gray-600">{formData.job || 'Software Developer'}</span>
                  
//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Profile</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>

//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Education</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>

//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Experience</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>

//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Reference</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="w-full md:w-2/3">
//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   {/* Contact Information */}
//                   <div className="mb-6">
//                     <p>{formData.address}</p>
//                     <p>{formData.phone}</p>
//                     <p>{formData.email}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   {/* Profile Information */}
//                   <div className="mb-6">
//                     <p>{formData.about}</p>
//                     <p>Date of birth: {formData.birth}</p>
//                     <p>Gender: {formData.gender}</p>
//                     <p>State of Origin: {formData.origin}</p>
//                     <p>L.G.A: {formData.local}</p>
//                     <p>Marital Status: {formData.status}</p>
//                     <p>Religion: {formData.religion}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   {/* Education */}
//                   <div className="mb-6">
//                     <p>{formData.institute}</p>
//                     <p>{formData.quali}</p>
//                     <p>{formData.started} - {formData.finished}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   {/* Work Experience */}
//                   <div className="mb-6">
//                     <p className='font-semibold text-lg'>{formData.Organization}</p>
//                     <p className='font-semibold'>{formData.position}</p>
//                     <p>{formData.from} - {formData.to}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   {/* References */}
//                   <div className="mb-6">
//                     <p className='font-semibold'>{formData.refereesname}</p>
//                     <p>{formData.refereesposition}</p>
//                     <p>{formData.refereesorg}</p>
//                     <p>{formData.refereescontact}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 max-h-[80vh] ">
//           <div className="flex justify-center items-center">
//             <div className="p-5 border border-gray-600 bg-white w-full ">
//             <div className='font-semibold flex gap-1 tracking-wider items-center justify-center text-2xl'>
//            <span> {formData.firstname}   </span>  
//              <span>  {formData.lastname},   </span>
//             <span>  {formData.job} </span>
//                </div>
//    <div className="div flex text-sm justify-center gap-1 items-center">
//    <p>{formData.address} |</p>
//                     <p>{formData.phone} |</p>
//                     <p>{formData.email} |</p>
//    </div>




//               </div>
//               </div>
//               </div>

//         {/* <div className="p-6 max-h-[80vh] overflow-y-auto">
//           <div className="flex justify-center items-center">
//             <div className="p-5 border border-gray-600 bg-white w-full max-w-3xl">
//               <div className="flex flex-col md:flex-row gap-8">
//                 <div className="w-full md:w-1/3">
//                   <h1 className='font-semibold text-2xl'>{formData.firstname} {formData.lastname}</h1>
//                   <span className="text-gray-600">{formData.job || 'Software Developer'}</span>
                  
//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Profile</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>

//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Education</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>

//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Experience</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>

//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Reference</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>
//                 </div>

//                 <div className="w-full md:w-2/3">
//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   <div className="mb-6">
//                     <p>{formData.address}</p>
//                     <p>{formData.phone}</p>
//                     <p>{formData.email}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   <div className="mb-6">
//                     <p>{formData.about}</p>
//                     <p>Date of birth: {formData.birth}</p>
//                     <p>Gender: {formData.gender}</p>
//                     <p>State of Origin: {formData.origin}</p>
//                     <p>L.G.A: {formData.local}</p>
//                     <p>Marital Status: {formData.status}</p>
//                     <p>Religion: {formData.religion}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   <div className="mb-6">
//                     <p>{formData.institute}</p>
//                     <p>{formData.quali}</p>
//                     <p>{formData.started} - {formData.finished}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   <div className="mb-6">
//                     <p className='font-semibold text-lg'>{formData.Organization}</p>
//                     <p className='font-semibold'>{formData.position}</p>
//                     <p>{formData.from} - {formData.to}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   <div className="mb-6">
//                     <p className='font-semibold'>{formData.refereesname}</p>
//                     <p>{formData.refereesposition}</p>
//                     <p>{formData.refereesorg}</p>
//                     <p>{formData.refereescontact}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}





        

//         <div className="p-6 max-h-[80vh] overflow-y-auto">
//           <div className="flex justify-center items-center">
//             <div className="p-5 border border-gray-600 bg-white w-full max-w-3xl">
//               <div className="flex flex-col md:flex-row gap-8">
//                 {/* Left Column */}
//                 <div className="w-full md:w-1/3">
//                   <h1 className='font-semibold text-2xl'>{formData.firstname} {formData.lastname}</h1>
//                   <span className="text-gray-600">{formData.job || 'Software Developer'}</span>
                  
//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Profile</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>

//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Education</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>

//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Experience</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>

//                   <div className="mt-6">
//                     <h2 className='font-semibold text-2xl'>Reference</h2>
//                     <div className='w-10 h-1 bg-black mb-4' />
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="w-full md:w-2/3">
//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   {/* Contact Information */}
//                   <div className="mb-6">
//                     <p>{formData.address}</p>
//                     <p>{formData.phone}</p>
//                     <p>{formData.email}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   {/* Profile Information */}
//                   <div className="mb-6">
//                     <p>{formData.about}</p>
//                     <p>Date of birth: {formData.birth}</p>
//                     <p>Gender: {formData.gender}</p>
//                     <p>State of Origin: {formData.origin}</p>
//                     <p>L.G.A: {formData.local}</p>
//                     <p>Marital Status: {formData.status}</p>
//                     <p>Religion: {formData.religion}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   {/* Education */}
//                   <div className="mb-6">
//                     <p>{formData.institute}</p>
//                     <p>{formData.quali}</p>
//                     <p>{formData.started} - {formData.finished}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   {/* Work Experience */}
//                   <div className="mb-6">
//                     <p className='font-semibold text-lg'>{formData.Organization}</p>
//                     <p className='font-semibold'>{formData.position}</p>
//                     <p>{formData.from} - {formData.to}</p>
//                   </div>

//                   <div className='w-full h-1 bg-black mb-4' />
                  
//                   {/* References */}
//                   <div className="mb-6">
//                     <p className='font-semibold'>{formData.refereesname}</p>
//                     <p>{formData.refereesposition}</p>
//                     <p>{formData.refereesorg}</p>
//                     <p>{formData.refereescontact}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>






// </div>
// <div className='flex justify-center items-center p-4'>
// <button className='bg-purple-500 hover:bg-purple-600 font-medium text-white text-3xl w-[600px] p-5 rounded-md'>Continue</button>
// </div>

//       </div>
//     </div>
//   );
// };

// export default GeneratedResume;




import React from 'react';
import { Check } from 'lucide-react';

const GeneratedResume = ({ showTemplate, formData, onClose, onSelectTemplate }) => {
  if (!showTemplate) return null;

  // Template selection state
  const [selectedTemplate, setSelectedTemplate] = React.useState(1);

  const handleTemplateSelect = (templateNumber) => {
    setSelectedTemplate(templateNumber);
  };

  const Template1 = () => (
    <div className="p-5 border border-gray-600 bg-white w-full max-w-3xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full md:w-1/3 bg-gray-100 p-4">
          <h1 className="font-semibold text-2xl">{formData.firstname} {formData.lastname}</h1>
          <span className="text-gray-600">{formData.job || 'Software Developer'}</span>
          
          <div className="mt-6">
            <h2 className="font-semibold text-xl">Profile</h2>
            <div className="w-10 h-1 bg-black mb-4" />
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-xl">Education</h2>
            <div className="w-10 h-1 bg-black mb-4" />
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-xl">Experience</h2>
            <div className="w-10 h-1 bg-black mb-4" />
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-xl">Reference</h2>
            <div className="w-10 h-1 bg-black mb-4" />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 p-4">
          <div className="mb-6">
            <p>{formData.address}</p>
            <p>{formData.phone}</p>
            <p>{formData.email}</p>
          </div>

          <div className="mb-6">
            <p>{formData.about}</p>
            <p>Date of birth: {formData.birth}</p>
            <p>Gender: {formData.gender}</p>
            <p>State of Origin: {formData.origin}</p>
            <p>L.G.A: {formData.local}</p>
            <p>Marital Status: {formData.status}</p>
            <p>Religion: {formData.religion}</p>
          </div>

          <div className="mb-6">
            <p>{formData.institute}</p>
            <p>{formData.quali}</p>
            <p>{formData.started} - {formData.finished}</p>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-lg">{formData.Organization}</p>
            <p className="font-semibold">{formData.position}</p>
            <p>{formData.from} - {formData.to}</p>
          </div>

          <div className="mb-6">
            <p className="font-semibold">{formData.refereesname}</p>
            <p>{formData.refereesposition}</p>
            <p>{formData.refereesorg}</p>
            <p>{formData.refereescontact}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Template2 = () => (
    <div className="p-5 border border-gray-600 bg-white w-full max-w-3xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{formData.firstname} {formData.lastname}</h1>
        <p className="text-xl text-gray-600">{formData.job}</p>
        <div className="flex justify-center gap-4 mt-2 text-sm">
          <span>{formData.email}</span>
          <span>|</span>
          <span>{formData.phone}</span>
          <span>|</span>
          <span>{formData.address}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">Profile</h2>
            <p>{formData.about}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">Education</h2>
            <div>
              <p className="font-semibold">{formData.institute}</p>
              <p>{formData.quali}</p>
              <p className="text-gray-600">{formData.started} - {formData.finished}</p>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">Experience</h2>
            <div>
              <p className="font-semibold">{formData.Organization}</p>
              <p>{formData.position}</p>
              <p className="text-gray-600">{formData.from} - {formData.to}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">Reference</h2>
            <div>
              <p className="font-semibold">{formData.refereesname}</p>
              <p>{formData.refereesposition}</p>
              <p>{formData.refereesorg}</p>
              <p>{formData.refereescontact}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  const Template3 = () => (
    <div className="p-5 border border-gray-600 bg-white w-full max-w-3xl">
      <div className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">{formData.firstname} {formData.lastname}</h1>
        <p className="text-xl mt-2">{formData.job}</p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          <span>{formData.email}</span>
          <span>{formData.phone}</span>
          <span>{formData.address}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Profile</h2>
          <p>{formData.about}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <p>Date of birth: {formData.birth}</p>
            <p>Gender: {formData.gender}</p>
            <p>State of Origin: {formData.origin}</p>
            <p>L.G.A: {formData.local}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Education</h2>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">{formData.institute}</p>
            <p>{formData.quali}</p>
            <p className="text-gray-600">{formData.started} - {formData.finished}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Experience</h2>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">{formData.Organization}</p>
            <p>{formData.position}</p>
            <p className="text-gray-600">{formData.from} - {formData.to}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Reference</h2>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">{formData.refereesname}</p>
            <p>{formData.refereesposition}</p>
            <p>{formData.refereesorg}</p>
            <p>{formData.refereescontact}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-3xl font-semibold">Choose a template</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div 
            className={`relative cursor-pointer ${selectedTemplate === 1 ? 'ring-2 ring-purple-500' : ''}`}
            onClick={() => handleTemplateSelect(1)}
          >
            {selectedTemplate === 1 && (
              <div className="absolute top-2 right-2 bg-purple-500 rounded-full p-1">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
            <Template1 />
          </div>

          <div 
            className={`relative cursor-pointer ${selectedTemplate === 2 ? 'ring-2 ring-purple-500' : ''}`}
            onClick={() => handleTemplateSelect(2)}
          >
            {selectedTemplate === 2 && (
              <div className="absolute top-2 right-2 bg-purple-500 rounded-full p-1">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
            <Template2 />
          </div>

          <div 
            className={`relative cursor-pointer ${selectedTemplate === 3 ? 'ring-2 ring-purple-500' : ''}`}
            onClick={() => handleTemplateSelect(3)}
          >
            {selectedTemplate === 3 && (
              <div className="absolute top-2 right-2 bg-purple-500 rounded-full p-1">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
            <Template3 />
          </div>
        </div>

        <div className="flex justify-center items-center p-4 border-t">
          <button 
            onClick={() => onSelectTemplate(selectedTemplate)}
            className="bg-purple-500 hover:bg-purple-600 text-white text-xl font-medium px-8 py-3 rounded-md transition-colors"
          >
            Continue with Template {selectedTemplate}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedResume;