

import React, { useRef } from 'react';
import { Check } from 'lucide-react';

const GeneratedResume = ({ 
  showTemplate, 
  formData, 
  educationData, 
  experienceData, 
  refereesData, 
  onClose 
}) => {
  if (!showTemplate) return null;

  const [selectedTemplate, setSelectedTemplate] = React.useState(1);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const templateRef = useRef(null);

  const handleTemplateSelect = (templateNumber) => {
    setSelectedTemplate(templateNumber);
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const { jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;
      const template = templateRef.current;
      
      const scale = 2;
      const canvas = await html2canvas(template, {
        scale: scale,
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        windowWidth: template.scrollWidth,
        windowHeight: template.scrollHeight,
        onclone: (document) => {
          const el = document.querySelector('#template-to-print');
          if (el) {
            el.style.padding = '20px';
            el.style.margin = '0';
          }
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const aspectRatio = canvas.width / canvas.height;
      
      let imgWidth = pdfWidth;
      let imgHeight = pdfWidth / aspectRatio;

      if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight;
        imgWidth = imgHeight * aspectRatio;
      }

      const x = (pdfWidth - imgWidth) / 2;
      const y = (pdfHeight - imgHeight) / 2;

      pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
      pdf.save(`${formData.firstname}_${formData.lastname}_resume.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const Template1 = () => (
<div className="w-full min-h-[600px] p-8 mt-3 md:mt-0  bg-white">


<div className="mb-6">
  <h1 className="text-2xl font-bold mb-1 text-black">{formData.firstname} {formData.lastname}</h1>
  <div className="text-sm space-y-1">
    <p className="text-black">Email: {formData.email}</p>
    <p className="text-black">Phone: {formData.phone}</p>
    <p className="text-black">Address: {formData.address}</p>
  </div>
</div>

<div className="space-y-4">
  <section className="w-full">
    <h2 className="text-lg font-bold mb-2 text-black">Summary</h2>
    <div className="md:w-full w-[310px] sm:w-[530px] max-w-full">
      <hr className="border-gray-700 my-2" />
    </div>
    <p className="text-sm mt-1 text-black leading-relaxed">{formData.about}</p>
  </section>

  <section className="w-full">
    <h2 className="text-lg font-bold mb-2 text-black">Experience</h2>
    <div className="w-full max-w-full">
      <hr className="border-gray-700 my-2" />
    </div>
    {experienceData.map((exp, index) => (
      exp.Organization && (
        <div key={index} className="mt-2">
          <div className="flex justify-between text-sm">
            <p className="font-bold text-black">{exp.Organization}</p>
          </div>
          <p className="text-sm  text-black">{exp.position}</p>
          <p className="text-black mt-1">{exp.from} – {exp.to}</p>
        </div>
      )
    ))}
  </section>

  <section className="w-full">
    <h2 className="text-lg font-bold mb-2 text-black">Education</h2>
    <div className="w-full max-w-full">
      <hr className="border-gray-700 my-2" />
    </div>
    {educationData.map((edu, index) => (
      edu.institute && (
        <div key={index} className="mt-2">
          <div className="flex justify-between text-sm">
            <p className="font-bold text-black">{edu.institute}</p>
          </div>
          <p className="text-sm text-black">{edu.quali}</p>
          <p className="text-black mt-1">
            {edu.started} – {edu.check ? 'Present' : edu.finished}
          </p>
        </div>
      )
    ))}
  </section>

  <section className="w-full">
    <h2 className="text-lg font-bold mb-2 text-black">Skills</h2>
    <div className="w-full max-w-full">
      <hr className="border-gray-700 my-2" />
    </div>
    <ul className="list-disc pl-4 mt-2">
      {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
        .filter(skill => skill)
        .map((skill, index) => (
          <li key={index} className="text-black">{skill}</li>
        ))}
    </ul>
  </section>

  <section className="w-full">
    <h2 className="text-lg font-bold mb-2 text-black">References</h2>
    <div className="w-full max-w-full">
      <hr className="border-gray-700 my-2" />
    </div>
    {refereesData.map((ref, index) => (
      ref.refereesname && (
        <div key={index} className="text-sm mt-2">
          <p className="font-bold text-black">{ref.refereesname}</p>
          <p className="text-black">{ref.refereesposition}</p>
          <p className="text-black">{ref.refereesorg}</p>
          <p className="text-black">{ref.refereescontact}</p>
        </div>
      )
    ))}
  </section>
</div>
</div>
);




  const Template2 = () => (
  

    <div className="w-full min-h-[600px] p-8 mt-3 md:mt-0  bg-white">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">{formData.firstname} {formData.lastname}</h1>
        <div className="text-[11px] ">
          <p>{formData.email} • {formData.phone}</p>
          <p>{formData.address}</p>
        </div>
      </div>

      <div className="space-y-4">
        <section>
          <h2 className="text-sm font-bold uppercase mb-2">Professional Summary</h2>
          <div className="border-t  py-2">
            <p className="text-[13px] ">{formData.about}</p>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase mb-2">Work Experience</h2>
          <div className="border-t  py-2">

          {experienceData.map((exp, index) => (
            exp.Organization && (
              <div key={index} className="mt-2">
                <div className="flex justify-between text-sm">
                  <p className="font-bold text-black">{exp.Organization}</p>
                </div>
                <p className="text-sm  text-black">{exp.position}</p>
                <p className="text-black mt-1">{exp.from} – {exp.to}</p>
              </div>
            )
          ))}
            
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase mb-2">Education</h2>
          <div className="border-t  py-2">


{educationData.map((edu, index) => (
            edu.institute && (
              <div key={index} className="mt-2">
                <div className="flex justify-between text-sm">
                  <p className="font-bold text-black">{edu.institute}</p>
                </div>
                <p className="text-sm text-black">{edu.quali}</p>
                <p className="text-black mt-1">
                  {edu.started} – {edu.check ? 'Present' : edu.finished}
                </p>
              </div>
            )
          ))}

          </div>
        </section>
     
        <section>
          <h2 className="text-sm font-bold mb-2 uppercase text-black">Skills</h2>
          <div className="bg-gray-700 mt-1 overflow-hidden h-[0.60px] w-full"></div>
          <ul className="list-disc pl-4 mt-2">
            {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
              .filter(skill => skill)
              .map((skill, index) => (
                <li key={index} className="text-black">{skill}</li>
              ))}
          </ul>
        </section>
  
        <section>
          <h2 className="text-sm font-bold uppercase mb-2">References</h2>
          <div className="border-t py-2">
          {refereesData.map((ref, index) => (
            ref.refereesname && (
              <div key={index} className="text-sm mt-2">
                <p className="font-bold text-black">{ref.refereesname}</p>
                <p className="text-black">{ref.refereesposition}</p>
                <p className="text-black">{ref.refereesorg}</p>
                <p className="text-black">{ref.refereescontact}</p>
              </div>
            )
          ))}
          </div>
        </section>
      </div>
    </div>
  );


  const Template3 = () => (
    <div id="template-to-print" className="w-[21cm] min-h-[29.7cm] p-8 mt-3 md:mt-0 bg-white text-black" style={{ fontFamily: 'Times New Roman, serif' }}>


<div className="mb-6">
        <h1 className="text-2xl font-bold mb-1 text-black">{formData.firstname} {formData.lastname}</h1>
        <div className="text-sm space-y-1">
          <p className="text-black">Email: {formData.email}</p>
          <p className="text-black">Phone: {formData.phone}</p>
          <p className="text-black">Address: {formData.address}</p>
        </div>
      </div>

      <div className="space-y-6">
        <section className="mb-6">
          <h2 className="text-base font-bold text-black mb-3 uppercase">Objective</h2>
          <p className="text-sm text-black leading-relaxed">{formData.about}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold text-black mb-3 uppercase">Professional Experience</h2>
          {experienceData.map((exp, index) => (
            exp.Organization && (
              <div key={index} className="mt-2">
                <div className="flex justify-between text-sm">
                  <p className="font-bold text-black">{exp.Organization}</p>
                </div>
                <p className="text-sm  text-black">{exp.position}</p>
                <p className="text-black mt-1">{exp.from} – {exp.to}</p>
              </div>
            )
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold text-black mb-3 uppercase">Education</h2>
          {educationData.map((edu, index) => (
            edu.institute && (
              <div key={index} className="mt-2">
                <div className="flex justify-between text-sm">
                  <p className="font-bold text-black">{edu.institute}</p>
                </div>
                <p className="text-sm text-black">{edu.quali}</p>
                <p className="text-black mt-1">
                  {edu.started} – {edu.check ? 'Present' : edu.finished}
                </p>
              </div>
            )
          ))}

        </section>




<section>
          <h2 className="text-sm font-bold mb-2 uppercase text-black">Skills</h2>

          <ul className="list-disc pl-4 mt-2">
            {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
              .filter(skill => skill)
              .map((skill, index) => (
                <li key={index} className="text-black">{skill}</li>
              ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold text-black mb-3  uppercase">References</h2>
          {refereesData.map((ref, index) => (
            ref.refereesname && (
              <div key={index} className="text-sm mt-2">
                <p className="font-bold text-black">{ref.refereesname}</p>
                <p className="text-black">{ref.refereesposition}</p>
                <p className="text-black">{ref.refereesorg}</p>
                <p className="text-black">{ref.refereescontact}</p>
              </div>
            )
          ))}
        </section>
      </div>
    </div>
  );





  const templates = {
    1: Template1,
    2: Template2,
    3: Template3
  };

  const SelectedTemplate = templates[selectedTemplate];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black bg-opacity-50">
      <div className="relative w-full max-w-7xl bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 bg-white flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Choose a template</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
          {Object.keys(templates).map((templateNum) => (
            <div 
              key={templateNum}
              className="relative cursor-pointer transition-all hover:scale-95 md:hover:scale-105 border border-gray-200"
              onClick={() => handleTemplateSelect(Number(templateNum))}
            >
              {selectedTemplate === Number(templateNum) && (
                <div className="absolute top-2 right-2 bg-purple-600 rounded-full p-1 z-10">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              <div ref={Number(templateNum) === selectedTemplate ? templateRef : null}>
                {templates[templateNum]()}
              </div>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 z-10 bg-white flex justify-center items-center gap-4 p-4 border-t">
          <button 
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium px-8 py-3 rounded-md transition-colors disabled:bg-gray-300"
          >
            {isDownloading ? 'Generating PDF...' : 'Download PDF'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedResume;