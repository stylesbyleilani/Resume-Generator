





import React from 'react';
import { Check } from 'lucide-react';

const GeneratedResume = ({ showTemplate, formData, onClose, onSelectTemplate }) => {
  if (!showTemplate) return null;

  const [selectedTemplate, setSelectedTemplate] = React.useState(1);

  const handleTemplateSelect = React.useCallback((templateNumber) => {
    setSelectedTemplate(templateNumber);
  }, []);



  const resumeTemplates = {
    Template1: () => (
      <div className="bg-white w-full border border-gray-600 scale-90 transform origin-top min-h-[600px]">
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/3 bg-gray-100 p-6">
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">{formData.firstname} {formData.lastname}</h1>
            <span className="text-gray-600 text-sm md:text-base">{formData.job || 'Software Developer'}</span>
            
            {['Profile', 'Education', 'Experience', 'Reference'].map((section) => (
              <div key={section} className="mt-6">
                <h2 className="font-semibold text-base md:text-lg lg:text-xl">{section}</h2>
                <div className="w-8 h-1 bg-black mb-2" />
              </div>
            ))}
          </div>

          <div className="w-full md:w-2/3 p-6 text-xs md:text-sm lg:text-base">
            <div className="space-y-6">
              <div className="space-y-1">
                <p>{formData.address}</p>
                <p>{formData.phone}</p>
                <p>{formData.email}</p>
              </div>

              <div className="space-y-1">
                {['birth', 'gender', 'origin', 'local', 'status', 'religion'].map((field) => (
                  formData[field] && (
                    <p key={field} className="text-gray-700">
                      {field.charAt(0).toUpperCase() + field.slice(1)}: {formData[field]}
                    </p>
                  )
                ))}
              </div>

              <div className="space-y-1">
                <p className="font-medium">{formData.institute}</p>
                <p>{formData.quali}</p>
                <p className="text-gray-600">{formData.started} - {formData.finished}</p>
              </div>

              <div className="space-y-1">
                <p className="font-medium">{formData.Organization}</p>
                <p>{formData.position}</p>
                <p className="text-gray-600">{formData.from} - {formData.to}</p>
              </div>

              <div className="space-y-1">
                <p className="font-medium">{formData.refereesname}</p>
                <p>{formData.refereesposition}</p>
                <p>{formData.refereesorg}</p>
                <p>{formData.refereescontact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    Template2: () => (
      <div className="bg-white w-full border border-gray-600 scale-90 transform origin-top min-h-[600px]">
        <div className="p-6">
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{formData.firstname} {formData.lastname}</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">{formData.job}</p>
            <div className="flex flex-wrap justify-center gap-3 mt-2 text-xs md:text-sm">
              <span>{formData.email}</span>
              <span>•</span>
              <span>{formData.phone}</span>
              <span>•</span>
              <span>{formData.address}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm lg:text-base">
            {[
              {
                title: 'Profile',
                content: (
                  <div className="space-y-2">
                    <p>{formData.about}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <p>Birth: {formData.birth}</p>
                      <p>Gender: {formData.gender}</p>
                    </div>
                  </div>
                )
              },
              {
                title: 'Education',
                content: (
                  <div className="space-y-1">
                    <p className="font-medium">{formData.institute}</p>
                    <p>{formData.quali}</p>
                    <p className="text-gray-600">{formData.started} - {formData.finished}</p>
                  </div>
                )
              },
              {
                title: 'Experience',
                content: (
                  <div className="space-y-1">
                    <p className="font-medium">{formData.Organization}</p>
                    <p>{formData.position}</p>
                    <p className="text-gray-600">{formData.from} - {formData.to}</p>
                  </div>
                )
              },
              {
                title: 'Reference',
                content: (
                  <div className="space-y-1">
                    <p className="font-medium">{formData.refereesname}</p>
                    <p>{formData.refereesposition}</p>
                    <p>{formData.refereesorg}</p>
                    <p>{formData.refereescontact}</p>
                  </div>
                )
              }
            ].map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold border-b-2 border-gray-300 pb-1">{section.title}</h2>
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </div>
    ),

    Template3: () => (
      <div className="bg-white w-full border border-gray-600 scale-90 transform origin-top min-h-[600px]">
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{formData.firstname} {formData.lastname}</h1>
          <p className="text-lg md:text-xl mt-2">{formData.job}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-xs md:text-sm">
            <span>{formData.email}</span>
            <span>{formData.phone}</span>
            <span>{formData.address}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm lg:text-base">
            {[
              {
                title: 'Profile',
                content: (
                  <div className="space-y-2">
                    <p>{formData.about}</p>
                    <div className="grid grid-cols-2 gap-2 text-gray-600">
                      <p>Birth: {formData.birth}</p>
                      <p>Gender: {formData.gender}</p>
                      <p>Origin: {formData.origin}</p>
                      <p>Local: {formData.local}</p>
                    </div>
                  </div>
                )
              },
              {
                title: 'Education',
                content: (
                  <div className="space-y-1">
                    <p className="font-medium">{formData.institute}</p>
                    <p>{formData.quali}</p>
                    <p className="text-gray-600">{formData.started} - {formData.finished}</p>
                  </div>
                )
              },
              {
                title: 'Experience',
                content: (
                  <div className="space-y-1">
                    <p className="font-medium">{formData.Organization}</p>
                    <p>{formData.position}</p>
                    <p className="text-gray-600">{formData.from} - {formData.to}</p>
                  </div>
                )
              },
              {
                title: 'Reference',
                content: (
                  <div className="space-y-1">
                    <p className="font-medium">{formData.refereesname}</p>
                    <p>{formData.refereesposition}</p>
                    <p>{formData.refereesorg}</p>
                    <p>{formData.refereescontact}</p>
                  </div>
                )
              }
            ].map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-lg md:text-xl font-bold text-blue-600">{section.title}</h2>
                <div className="border-l-4 border-blue-600 pl-4">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-7xl bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl md:text-2xl font-semibold">Choose a template</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {[1, 2, 3].map((templateNum) => (
            <div 
              key={templateNum}
              className={`relative cursor-pointer transition-all hover:scale-105 ${
                selectedTemplate === templateNum ? '' : ''
              }`}
              onClick={() => handleTemplateSelect(templateNum)}
            >
              {selectedTemplate === templateNum && (
                <div className="absolute top-2 right-2 bg-purple-500 rounded-full p-1 z-10">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              {resumeTemplates[`Template${templateNum}`]()}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center p-4 border-t">
          <button 
            onClick={() => onSelectTemplate(selectedTemplate)}
            className="bg-purple-500 hover:bg-purple-600 text-white text-lg font-medium px-8 py-3 rounded-md transition-colors"
          >
            Continue with Template {selectedTemplate}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedResume;