






// import React, { useRef } from 'react';
// import { Check } from 'lucide-react';
// import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

// // Create styles for PDF templates
// const styles = StyleSheet.create({
//   // Base styles
//   page: {
//     padding: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   contactInfo: {
//     fontSize: 10,
//     marginBottom: 3,
//   },
//   section: {
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     textTransform: 'uppercase',
//   },
//   sectionContent: {
//     fontSize: 10,
//     lineHeight: 1.5,
//   },
//   experienceItem: {
//     marginBottom: 8,
//   },
//   companyName: {
//     fontSize: 11,
//     fontWeight: 'bold',
//   },
//   position: {
//     fontSize: 10,
//     marginBottom: 2,
//   },
//   date: {
//     fontSize: 10,
//     color: '#666666',
//   },
//   skillsList: {
//     marginLeft: 15,
//   },
//   skill: {
//     fontSize: 10,
//     marginBottom: 2,
//   },

//   // Template 2 specific styles
//   template2: {
//     header: {
//       alignItems: 'center',
//       marginBottom: 30,
//     },
//     name: {
//       fontSize: 28,
//       textAlign: 'center',
//     },
//     contactInfo: {
//       fontSize: 10,
//       textAlign: 'center',
//     },
//     divider: {
//       borderBottom: 1,
//       borderBottomColor: '#000000',
//       marginVertical: 10,
//     },
//   },

//   // Template 3 specific styles
  // template3: {
  //   page: {
  //     paddingTop: 40,
  //   },
  //   header: {
  //     marginBottom: 30,
  //   },
  //   name: {
  //     fontSize: 26,
  //     fontFamily: 'Times-Roman',
  //   },
  //   sectionTitle: {
  //     fontSize: 16,
  //     fontFamily: 'Times-Roman',
  //     borderBottom: 1,
  //     borderBottomColor: '#000000',
  //     paddingBottom: 5,
  //   },
  // },
// });

// // PDF Template 1
// const Template1PDF = ({ formData, educationData, experienceData, refereesData }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.header}>
//         <Text style={styles.name}>{formData.firstname} {formData.lastname}</Text>
//         <Text style={styles.contactInfo}>Email: {formData.email}</Text>
//         <Text style={styles.contactInfo}>Phone: {formData.phone}</Text>
//         <Text style={styles.contactInfo}>Address: {formData.address}</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Summary</Text>
//         <Text style={styles.sectionContent}>{formData.about}</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Experience</Text>
//         {experienceData.map((exp, index) => (
//           exp.Organization && (
//             <View key={index} style={styles.experienceItem}>
//               <Text style={styles.companyName}>{exp.Organization}</Text>
//               <Text style={styles.position}>{exp.position}</Text>
//               <Text style={styles.date}>{exp.from} – {exp.to}</Text>
//             </View>
//           )
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Education</Text>
//         {educationData.map((edu, index) => (
//           edu.institute && (
//             <View key={index} style={styles.experienceItem}>
//               <Text style={styles.companyName}>{edu.institute}</Text>
//               <Text style={styles.position}>{edu.quali}</Text>
//               <Text style={styles.date}>
//                 {edu.started} – {edu.check ? 'Present' : edu.finished}
//               </Text>
//             </View>
//           )
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Skills</Text>
//         <View style={styles.skillsList}>
//           {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
//             .filter(skill => skill)
//             .map((skill, index) => (
//               <Text key={index} style={styles.skill}>• {skill}</Text>
//             ))}
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>References</Text>
//         {refereesData.map((ref, index) => (
//           ref.refereesname && (
//             <View key={index} style={styles.experienceItem}>
//               <Text style={styles.companyName}>{ref.refereesname}</Text>
//               <Text style={styles.position}>{ref.refereesposition}</Text>
//               <Text style={styles.sectionContent}>{ref.refereesorg}</Text>
//               <Text style={styles.sectionContent}>{ref.refereescontact}</Text>
//             </View>
//           )
//         ))}
//       </View>
//     </Page>
//   </Document>
// );

// // PDF Template 2
// const Template2PDF = ({ formData, educationData, experienceData, refereesData }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.template2.header}>
//         <Text style={styles.template2.name}>{formData.firstname} {formData.lastname}</Text>
//         <Text style={styles.template2.contactInfo}>{formData.email} • {formData.phone}</Text>
//         <Text style={styles.template2.contactInfo}>{formData.address}</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Professional Summary</Text>
//         <View style={styles.template2.divider} />
//         <Text style={styles.sectionContent}>{formData.about}</Text>
//       </View>

//       {/* <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Work Experience</Text>
//         <View style={styles.template2.divider} />
//         {experienceData.map((exp, index) => (
//           exp.Organization && (
//             <View key={index} style={styles.experienceItem}>
//               <Text style={styles.companyName}>{exp.Organization}</Text>
//               <Text style={styles.position}>{exp.position}</Text>
//               <Text style={styles.date}>{exp.from} – {exp.to}</Text>
//             </View>
//           )
//         ))}
//       </View> */}



// <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Experience</Text>
//         {experienceData.map((exp, index) => (
//           exp.Organization && (
//             <View key={index} style={styles.experienceItem}>
//               <Text style={styles.companyName}>{exp.Organization}</Text>
//               <Text style={styles.position}>{exp.position}</Text>
//               <Text style={styles.date}>{exp.from} – {exp.to}</Text>
//             </View>
//           )
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Education</Text>
//         {educationData.map((edu, index) => (
//           edu.institute && (
//             <View key={index} style={styles.experienceItem}>
//               <Text style={styles.companyName}>{edu.institute}</Text>
//               <Text style={styles.position}>{edu.quali}</Text>
//               <Text style={styles.date}>
//                 {edu.started} – {edu.check ? 'Present' : edu.finished}
//               </Text>
//             </View>
//           )
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Skills</Text>
//         <View style={styles.skillsList}>
//           {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
//             .filter(skill => skill)
//             .map((skill, index) => (
//               <Text key={index} style={styles.skill}>• {skill}</Text>
//             ))}
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>References</Text>
//         {refereesData.map((ref, index) => (
//           ref.refereesname && (
//             <View key={index} style={styles.experienceItem}>
//               <Text style={styles.companyName}>{ref.refereesname}</Text>
//               <Text style={styles.position}>{ref.refereesposition}</Text>
//               <Text style={styles.sectionContent}>{ref.refereesorg}</Text>
//               <Text style={styles.sectionContent}>{ref.refereescontact}</Text>
//             </View>
//           )
//         ))}
//       </View>

//       {/* Education, Skills, and References sections similar to Template 1 */}
//       {/* ... */}
//     </Page>
//   </Document>
// );

// // PDF Template 3
// const Template3PDF = ({ formData, educationData, experienceData, refereesData }) => (
//   <Document className="bg-red-400" >
//     <Page size="A4" style={[styles.page, styles.template3.page]}>
//       <View style={styles.template3.header}>
//         <Text style={styles.template3.name}>{formData.firstname} {formData.lastname}</Text>
//         <Text style={styles.contactInfo}>Email: {formData.email}</Text>
//         <Text style={styles.contactInfo}>Phone: {formData.phone}</Text>
//         <Text style={styles.contactInfo}>Address: {formData.address}</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.template3.sectionTitle}>Objective</Text>
//         <Text style={styles.sectionContent}>{formData.about}</Text>
//       </View>

//       {/* Experience, Education, Skills, and References sections similar to Template 1 */}
//       {/* ... */}

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Experience</Text>
//         {experienceData.map((exp, index) => (
//           exp.Organization && (
//             <View key={index} style={styles.experienceItem}>
//               <Text style={styles.companyName}>{exp.Organization}</Text>
//               <Text style={styles.position}>{exp.position}</Text>
//               <Text style={styles.date}>{exp.from} – {exp.to}</Text>
//             </View>
//           )
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Education</Text>
//         {educationData.map((edu, index) => (
//           edu.institute && (
//             <View key={index} style={styles.experienceItem}>
//               <Text style={styles.companyName}>{edu.institute}</Text>
//               <Text style={styles.position}>{edu.quali}</Text>
//               <Text style={styles.date}>
//                 {edu.started} – {edu.check ? 'Present' : edu.finished}
//               </Text>
//             </View>
//           )
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Skills</Text>
//         <View style={styles.skillsList}>
//           {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
//             .filter(skill => skill)
//             .map((skill, index) => (
//               <Text key={index} style={styles.skill}>• {skill}</Text>
//             ))}
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>References</Text>
//         {refereesData.map((ref, index) => (
//           ref.refereesname && (
//             <View key={index} style={styles.experienceItem}>
//               <Text style={styles.companyName}>{ref.refereesname}</Text>
//               <Text style={styles.position}>{ref.refereesposition}</Text>
//               <Text style={styles.sectionContent}>{ref.refereesorg}</Text>
//               <Text style={styles.sectionContent}>{ref.refereescontact}</Text>
//             </View>
//           )
//         ))}
//       </View>


//     </Page>
//   </Document>
// );

// // Preview Templates (HTML/CSS versions)
// const Template1Preview = ({ formData, educationData, experienceData, refereesData }) => (
//   <div className="w-full min-h-[600px] p-8 mt-3 md:mt-0 bg-white">
//     <div className="mb-6">
//       <h1 className="text-2xl font-bold mb-1 text-black">{formData.firstname} {formData.lastname}</h1>
//       <div className="text-sm space-y-1">
//         <p className="text-black">Email: {formData.email}</p>
//         <p className="text-black">Phone: {formData.phone}</p>
//         <p className="text-black">Address: {formData.address}</p>
//       </div>
//     </div>

//     <div className="space-y-4">
//       <section className="w-full">
//         <h2 className="text-lg font-bold mb-2 text-black">Summary</h2>
//         <div className="w-full max-w-full">
//           <hr className="border-gray-700 my-2" />
//         </div>
//         <p className="text-sm mt-1 text-black leading-relaxed">{formData.about}</p>
//       </section>

//       <section className="w-full">
//     <h2 className="text-lg font-bold mb-2 text-black">Experience</h2>
//     <div className="w-full max-w-full">
//       <hr className="border-gray-700 my-2" />
//     </div>
//     {experienceData.map((exp, index) => (
//       exp.Organization && (
//         <div key={index} className="mt-2">
//           <div className="flex justify-between text-sm">
//             <p className="font-bold text-black">{exp.Organization}</p>
//           </div>
//           <p className="text-sm  text-black">{exp.position}</p>
//           <p className="text-black mt-1">{exp.from} – {exp.to}</p>
//         </div>
//       )
//     ))}
//   </section>

//   <section className="w-full">
//     <h2 className="text-lg font-bold mb-2 text-black">Education</h2>
//     <div className="w-full max-w-full">
//       <hr className="border-gray-700 my-2" />
//     </div>
//     {educationData.map((edu, index) => (
//       edu.institute && (
//         <div key={index} className="mt-2">
//           <div className="flex justify-between text-sm">
//             <p className="font-bold text-black">{edu.institute}</p>
//           </div>
//           <p className="text-sm text-black">{edu.quali}</p>
//           <p className="text-black mt-1">
//             {edu.started} – {edu.check ? 'Present' : edu.finished}
//           </p>
//         </div>
//       )
//     ))}
//   </section>

//   <section className="w-full">
//     <h2 className="text-lg font-bold mb-2 text-black">Skills</h2>
//     <div className="w-full max-w-full">
//       <hr className="border-gray-700 my-2" />
//     </div>
//     <ul className="list-disc pl-4 mt-2">
//       {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
//         .filter(skill => skill)
//         .map((skill, index) => (
//           <li key={index} className="text-black">{skill}</li>
//         ))}
//     </ul>
//   </section>

//   <section className="w-full">
//     <h2 className="text-lg font-bold mb-2 text-black">References</h2>
//     <div className="w-full max-w-full">
//       <hr className="border-gray-700 my-2" />
//     </div>
//     {refereesData.map((ref, index) => (
//       ref.refereesname && (
//         <div key={index} className="text-sm mt-2">
//           <p className="font-bold text-black">{ref.refereesname}</p>
//           <p className="text-black">{ref.refereesposition}</p>
//           <p className="text-black">{ref.refereesorg}</p>
//           <p className="text-black">{ref.refereescontact}</p>
//         </div>
//       )
//     ))}
//   </section>

//       {/* Experience, Education, Skills, and References sections */}
//       {/* ... */}
//     </div>
//   </div>
// );

// const Template2Preview = ({ formData, educationData, experienceData, refereesData }) => (
//   // <div className="w-full min-h-[600px] p-8 mt-3 md:mt-0 bg-white">
  // //   <div className="text-center mb-6">
  // //     <h1 className="text-2xl font-bold mb-2 text-black">{formData.firstname} {formData.lastname}</h1>
  // //     <div className="text-sm">
  // //       <p className="text-black">{formData.email} • {formData.phone}</p>
  // //       <p className="text-black">{formData.address}</p>
  // //     </div>
  // //   </div>

  // //   {/* Professional Summary, Experience, Education, Skills, and References sections */}
  // //   {/* ... */}
  // // </div>

  // <div className="w-full min-h-[600px] p-8 mt-3 md:mt-0 bg-white">
  //   <div className="text-center mb-6">
  //     <h1 className="text-2xl font-bold mb-2 text-black">{formData.firstname} {formData.lastname}</h1>
  //     <div className="text-[11px]">
  //       <p className="text-black">{formData.email} • {formData.phone}</p>
  //       <p className="text-black">{formData.address}</p>
  //     </div>
  //   </div>

  //   <div className="space-y-4">
  //     <section>
  //       <h2 className="text-sm font-bold uppercase mb-2 text-black">Professional Summary</h2>
  //       <div className="border-t border-gray-700 py-2">
  //         <p className="text-[13px] text-black">{formData.about}</p>
  //       </div>
  //     </section>

  //     {/* Rest of the sections similar to Template1 but with different styling */}
  //     {/* ... */}
  //   </div>
//   </div>

// );

// const Template3Preview = ({ formData, educationData, experienceData, refereesData }) => (
//   <div className="w-full min-h-[600px] p-8 mt-3 md:mt-0 bg-white" style={{ fontFamily: 'Times New Roman, serif' }}>
//     <div className="mb-6">
//       <h1 className="text-2xl font-bold mb-1 text-black">{formData.firstname} {formData.lastname}</h1>
//       <div className="text-sm space-y-1">
//         <p className="text-black">Email: {formData.email}</p>
//         <p className="text-black">Phone: {formData.phone}</p>
//         <p className="text-black">Address: {formData.address}</p>
//       </div>
//     </div>

//     <section className="mb-6">
//           <h2 className="text-base font-bold text-black mb-3 uppercase">Objective</h2>
//           <p className="text-sm text-black leading-relaxed">{formData.about}</p>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-base font-bold text-black mb-3 uppercase">Professional Experience</h2>
//           {experienceData.map((exp, index) => (
//             exp.Organization && (
//               <div key={index} className="mt-2">
//                 <div className="flex justify-between text-sm">
//                   <p className="font-bold text-black">{exp.Organization}</p>
//                 </div>
//                 <p className="text-sm  text-black">{exp.position}</p>
//                 <p className="text-black mt-1">{exp.from} – {exp.to}</p>
//               </div>
//             )
//           ))}
//         </section>

//         <section className="mb-6">
//           <h2 className="text-base font-bold text-black mb-3 uppercase">Education</h2>
//           {educationData.map((edu, index) => (
//             edu.institute && (
//               <div key={index} className="mt-2">
//                 <div className="flex justify-between text-sm">
//                   <p className="font-bold text-black">{edu.institute}</p>
//                 </div>
//                 <p className="text-sm text-black">{edu.quali}</p>
//                 <p className="text-black mt-1">
//                   {edu.started} – {edu.check ? 'Present' : edu.finished}
//                 </p>
//               </div>
//             )
//           ))}

//         </section>




// <section>
//           <h2 className="text-sm font-bold mb-2 uppercase text-black">Skills</h2>

//           <ul className="list-disc pl-4 mt-2">
//             {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
//               .filter(skill => skill)
//               .map((skill, index) => (
//                 <li key={index} className="text-black">{skill}</li>
//               ))}
//           </ul>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-base font-bold text-black mb-3  uppercase">References</h2>
//           {refereesData.map((ref, index) => (
//             ref.refereesname && (
//               <div key={index} className="text-sm mt-2">
//                 <p className="font-bold text-black">{ref.refereesname}</p>
//                 <p className="text-black">{ref.refereesposition}</p>
//                 <p className="text-black">{ref.refereesorg}</p>
//                 <p className="text-black">{ref.refereescontact}</p>
//               </div>
//             )
//           ))}
//         </section>

//     {/* Objective, Experience, Education, Skills, and References sections */}
//     {/* ... */}
//   </div>
// );

// // Main component
// const GeneratedResume = ({ 
//   showTemplate, 
//   formData, 
//   educationData, 
//   experienceData, 
//   refereesData, 
//   onClose 
// }) => {
//   if (!showTemplate) return null;

//   const [selectedTemplate, setSelectedTemplate] = React.useState(1);
//   const templateRef = useRef(null);

//   const handleTemplateSelect = (templateNumber) => {
//     setSelectedTemplate(templateNumber);
//   };

//   const templates = {
//     1: {
//       preview: Template1Preview,
//       pdf: Template1PDF,
//     },
//     2: {
//       preview: Template2Preview,
//       pdf: Template2PDF,
//     },
//     3: {
//       preview: Template3Preview,
//       pdf: Template3PDF,
//     },
//   };

//   const SelectedTemplatePreview = templates[selectedTemplate].preview;
//   const SelectedTemplatePDF = templates[selectedTemplate].pdf;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black bg-opacity-50">
//       <div className="relative w-full max-w-7xl bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 z-10 bg-white flex items-center justify-between p-4 border-b">
//           <h2 className="text-xl font-semibold">Choose a template</h2>
//           <button 
//             onClick={onClose}
//             className="p-1 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
//           {Object.keys(templates).map((templateNum) => (
//             <div 
//               key={templateNum}
//               className="relative cursor-pointer transition-all hover:scale-95 md:hover:scale-105 border border-gray-200"
//               onClick={() => handleTemplateSelect(Number(templateNum))}
//             >
//               {selectedTemplate === Number(templateNum) && (
//                 <div className="absolute top-2 right-2 bg-purple-600 rounded-full p-1 z-10">
//                   <Check className="w-4 h-4 text-white" />
//                 </div>
//               )}
//               <div ref={Number(templateNum) === selectedTemplate ? templateRef : null}>
//                 <SelectedTemplatePreview
//                   formData={formData}
//                   educationData={educationData}
//                   experienceData={experienceData}
//                   refereesData={refereesData}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

        // <div className="sticky bottom-0 z-10 bg-white flex justify-center items-center gap-4 p-4 border-t">
        //   <PDFDownloadLink
        //     document={
        //       <SelectedTemplatePDF
        //         formData={formData}
        //         educationData={educationData}
        //         experienceData={experienceData}
        //         refereesData={refereesData}
        //       />
        //     }
        //     fileName={`${formData.firstname}_${formData.lastname}_resume.pdf`}
        //     className="bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium px-8 py-3 rounded-md transition-colors"
        //   >
        //     {({ blob, url, loading, error }) =>
        //       loading ? 'Generating PDF...' : 'Download PDF'
        //     }
        //   </PDFDownloadLink>
        // </div>
//       </div>
//     </div>
//   );
// };

// export default GeneratedResume;














// import React, { useRef } from 'react';
// import { Check } from 'lucide-react';
// import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

// // PDF styles
// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   section: {
//     marginBottom: 15,
//   },
//   header: {
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   contactInfo: {
//     fontSize: 10,
//     marginBottom: 3,
//   },
//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     textTransform: 'uppercase',
//   },
//   sectionContent: {
//     fontSize: 10,
//     lineHeight: 1.5,
//   }
// });

// // Template Preview Components
// const Template1Preview = ({ formData, educationData, experienceData, refereesData }) => (
//   <div className="w-full min-h-[600px] p-8 mt-3 md:mt-0 bg-white">
//     <div className="mb-6">
//       <h1 className="text-2xl font-bold mb-1 text-black">{formData.firstname} {formData.lastname}</h1>
//       <div className="text-sm space-y-1">
//         <p className="text-black">Email: {formData.email}</p>
//         <p className="text-black">Phone: {formData.phone}</p>
//         <p className="text-black">Address: {formData.address}</p>
//       </div>
//     </div>

//     <div className="space-y-4">
//       <section className="w-full">
//         <h2 className="text-lg font-bold mb-2 text-black">Summary</h2>
//         <div className="w-full max-w-full">
//           <hr className="border-gray-700 my-2" />
//         </div>
//         <p className="text-sm mt-1 text-black leading-relaxed">{formData.about}</p>
//       </section>

//       <section className="w-full">
//         <h2 className="text-lg font-bold mb-2 text-black">Experience</h2>
//         <div className="w-full max-w-full">
//           <hr className="border-gray-700 my-2" />
//         </div>
//         {experienceData.map((exp, index) => (
//           exp.Organization && (
//             <div key={index} className="mt-2">
//               <div className="flex justify-between text-sm">
//                 <p className="font-bold text-black">{exp.Organization}</p>
//               </div>
//               <p className="text-sm text-black">{exp.position}</p>
//               <p className="text-black mt-1">{exp.from} – {exp.to}</p>
//             </div>
//           )
//         ))}
//       </section>

//       <section className="w-full">
//         <h2 className="text-lg font-bold mb-2 text-black">Education</h2>
//         <div className="w-full max-w-full">
//           <hr className="border-gray-700 my-2" />
//         </div>
//         {educationData.map((edu, index) => (
//           edu.institute && (
//             <div key={index} className="mt-2">
//               <div className="flex justify-between text-sm">
//                 <p className="font-bold text-black">{edu.institute}</p>
//               </div>
//               <p className="text-sm text-black">{edu.quali}</p>
//               <p className="text-black mt-1">
//                 {edu.started} – {edu.check ? 'Present' : edu.finished}
//               </p>
//             </div>
//           )
//         ))}
//       </section>

//       <section className="w-full">
//         <h2 className="text-lg font-bold mb-2 text-black">Skills</h2>
//         <div className="w-full max-w-full">
//           <hr className="border-gray-700 my-2" />
//         </div>
//         <ul className="list-disc pl-4 mt-2">
//           {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
//             .filter(skill => skill)
//             .map((skill, index) => (
//               <li key={index} className="text-black">{skill}</li>
//             ))}
//         </ul>
//       </section>

//       <section className="w-full">
//         <h2 className="text-lg font-bold mb-2 text-black">References</h2>
//         <div className="w-full max-w-full">
//           <hr className="border-gray-700 my-2" />
//         </div>
//         {refereesData.map((ref, index) => (
//           ref.refereesname && (
//             <div key={index} className="text-sm mt-2">
//               <p className="font-bold text-black">{ref.refereesname}</p>
//               <p className="text-black">{ref.refereesposition}</p>
//               <p className="text-black">{ref.refereesorg}</p>
//               <p className="text-black">{ref.refereescontact}</p>
//             </div>
//           )
//         ))}
//       </section>
//     </div>
//   </div>
// );

// const Template2Preview = ({ formData, educationData, experienceData, refereesData }) => (
//   <div className="w-full min-h-[600px] p-8 mt-3 md:mt-0 bg-white">
//     <div className="text-center mb-6">
//       <h1 className="text-2xl font-bold mb-2 text-black">{formData.firstname} {formData.lastname}</h1>
//       <div className="text-[11px]">
//         <p className="text-black">{formData.email} • {formData.phone}</p>
//         <p className="text-black">{formData.address}</p>
//       </div>
//     </div>

//     <div className="space-y-4">
//       <section>
//         <h2 className="text-sm font-bold uppercase mb-2 text-black">Professional Summary</h2>
//         <div className="border-t border-gray-700 py-2">
//           <p className="text-[13px] text-black">{formData.about}</p>
//         </div>
//       </section>

//       {/* Rest of the sections similar to Template1 but with different styling */}
//       {/* ... */}
//     </div>
//   </div>
// );

// const Template3Preview = ({ formData, educationData, experienceData, refereesData }) => (
//   <div className="w-full min-h-[600px] p-8 mt-3 md:mt-0 bg-white" style={{ fontFamily: 'Times New Roman, serif' }}>
//     <div className="mb-6">
//       <h1 className="text-2xl font-bold mb-1 text-black">{formData.firstname} {formData.lastname}</h1>
//       <div className="text-sm space-y-1">
//         <p className="text-black">Email: {formData.email}</p>
//         <p className="text-black">Phone: {formData.phone}</p>
//         <p className="text-black">Address: {formData.address}</p>
//       </div>
//     </div>

//     <div className="space-y-6">

//     <section className="mb-6">
//           <h2 className="text-base font-bold text-black mb-3 uppercase">Professional Experience</h2>
//           {experienceData.map((exp, index) => (
//             exp.Organization && (
//               <div key={index} className="mt-2">
//                 <div className="flex justify-between text-sm">
//                   <p className="font-bold text-black">{exp.Organization}</p>
//                 </div>
//                 <p className="text-sm  text-black">{exp.position}</p>
//                 <p className="text-black mt-1">{exp.from} – {exp.to}</p>
//               </div>
//             )
//           ))}
//         </section>

//         <section className="mb-6">
//           <h2 className="text-base font-bold text-black mb-3 uppercase">Education</h2>
//           {educationData.map((edu, index) => (
//             edu.institute && (
//               <div key={index} className="mt-2">
//                 <div className="flex justify-between text-sm">
//                   <p className="font-bold text-black">{edu.institute}</p>
//                 </div>
//                 <p className="text-sm text-black">{edu.quali}</p>
//                 <p className="text-black mt-1">
//                   {edu.started} – {edu.check ? 'Present' : edu.finished}
//                 </p>
//               </div>
//             )
//           ))}

//         </section>

// <section>
//           <h2 className="text-sm font-bold mb-2 uppercase text-black">Skills</h2>

//           <ul className="list-disc pl-4 mt-2">
//             {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
//               .filter(skill => skill)
//               .map((skill, index) => (
//                 <li key={index} className="text-black">{skill}</li>
//               ))}
//           </ul>
//         </section>

//         <section className="mb-6">
//           <h2 className="text-base font-bold text-black mb-3  uppercase">References</h2>
//           {refereesData.map((ref, index) => (
//             ref.refereesname && (
//               <div key={index} className="text-sm mt-2">
//                 <p className="font-bold text-black">{ref.refereesname}</p>
//                 <p className="text-black">{ref.refereesposition}</p>
//                 <p className="text-black">{ref.refereesorg}</p>
//                 <p className="text-black">{ref.refereescontact}</p>
//               </div>
//             )
//           ))}
//         </section>

//       {/* Similar sections to Template1 but with Times New Roman font and different spacing */}
//       {/* ... */}
//     </div>
//   </div>
// );

// // Main component
// const GeneratedResume = ({ showTemplate, formData, educationData, experienceData, refereesData, onClose }) => {
//   if (!showTemplate) return null;

//   const [selectedTemplate, setSelectedTemplate] = React.useState(1);
//   const templateRef = useRef(null);

//   const handleTemplateSelect = (templateNumber) => {
//     setSelectedTemplate(templateNumber);
//   };

//   const templates = {
//     1: { preview: Template1Preview },
//     2: { preview: Template2Preview },
//     3: { preview: Template3Preview }
//   };

//   const SelectedTemplatePreview = templates[selectedTemplate].preview;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black bg-opacity-50">
//       <div className="relative w-full max-w-7xl bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 z-10 bg-white flex items-center justify-between p-4 border-b">
//           <h2 className="text-xl font-semibold">Choose a template</h2>
//           <button 
//             onClick={onClose}
//             className="p-1 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
//           {Object.keys(templates).map((templateNum) => (
//             <div 
//               key={templateNum}
//               className="relative cursor-pointer transition-all hover:scale-95 md:hover:scale-105 border border-gray-200"
//               onClick={() => handleTemplateSelect(Number(templateNum))}
//             >
//               {selectedTemplate === Number(templateNum) && (
//                 <div className="absolute top-2 right-2 bg-purple-600 rounded-full p-1 z-10">
//                   <Check className="w-4 h-4 text-white" />
//                 </div>
//               )}
//               <div ref={Number(templateNum) === selectedTemplate ? templateRef : null}>
//                 <SelectedTemplatePreview
//                   formData={formData}
//                   educationData={educationData}
//                   experienceData={experienceData}
//                   refereesData={refereesData}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="sticky bottom-0 z-10 bg-white flex justify-center items-center gap-4 p-4 border-t">
//           <PDFDownloadLink
//             document={
//               <SelectedTemplatePreview
//                 formData={formData}
//                 educationData={educationData}
//                 experienceData={experienceData}
//                 refereesData={refereesData}
//               />
//             }
//             fileName={`${formData.firstname}_${formData.lastname}_resume.pdf`}
//             className="bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium px-8 py-3 rounded-md transition-colors"
//           >
//             {({ blob, url, loading, error }) =>
//               loading ? 'Generating PDF...' : 'Download PDF'
//             }
//           </PDFDownloadLink>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default GeneratedResume;





import React, { useRef } from 'react';
import { Check } from 'lucide-react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Times-Roman',

  },
  section: {
    marginBottom: 15,
  },
  header: {
    marginBottom: 20,

  },
  name: {
    fontSize: 24,
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 10,
    marginBottom: 3,
    marginTop:4,

  },
  sectionTitle: {
    fontSize: 19,
    marginBottom: 5,
    fontWeight:"bold",
    borderBottom: 1,
    borderBottomColor: '#3d3c3c',
    // textTransform: 'uppercase',
  },
  sectionContent: {
    fontSize: 10,
    lineHeight: 1.5,
  },
reference:{
  fontSize: 14,

},
  skills: {
    fontSize: 10,
  },
  education: {
    fontSize: 10,
  },
  experience: {
    fontSize: 10,
  },
  template2: {
    page: {
      paddingTop: 40,
    },
    header: {
      marginBottom: 30,
    },
    name: {
      fontSize: 26,
      fontFamily: 'Times-Roman',
      color:"red"
    },
    job: {
      fontSize: 20,
      fontFamily: 'Times-Roman',
      color:"red"
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: 'Times-Roman',
      borderBottom: 2,
      borderBottomColor: 'black',
      paddingBottom: 5,
    },

    template2Name: {
      fontSize: 26,
      marginBottom: 5,
      color: 'red',
    },
    template2Section: {
      marginBottom: 15,
    },
    template2SectionTitle: {
      fontSize: 16,
      marginBottom: 8,
      borderBottom: 1,
      borderBottomColor: '#000000',
      paddingBottom: 5,
    },
    template2Organization: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    template2Position: {
      fontSize: 10,
      marginBottom: 2,
    },
    template2Date: {
      fontSize: 10,
      marginBottom: 8,
    },
    template2SkillItem: {
      fontSize: 10,
      marginBottom: 4,
    }
  
  
  },
});

// PDF Document Components
const Template1PDF = ({ formData, educationData, experienceData, refereesData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{formData.firstname} {formData.lastname}</Text>
        <Text style={styles.job}>{formData.job}</Text>
        <Text style={styles.contactInfo}>Email: {formData.email}</Text>
        <Text style={styles.contactInfo}>Phone: {formData.phone}</Text>
        <Text style={styles.contactInfo}>Address: {formData.address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.sectionContent}>{formData.about}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experienceData.map((exp, index) => (
          exp.Organization && (
            <View key={index} style={styles.sectionContent}>
              <Text>{exp.Organization}</Text>
              <Text>{exp.position}</Text>
              <Text>{exp.from} – {exp.to}</Text>
            </View>
          )
        ))}
      </View>

      <View style={styles.section}>
       <Text style={styles.sectionTitle}>Education</Text>
        {educationData.map((edu, index) => (
          edu.institute && (
           <View key={index} style={styles.experienceItem}>
               <Text style={styles.education}>{edu.institute}</Text>
              <Text style={styles.education}>{edu.quali}</Text>
              <Text style={styles.education}>
                 {edu.started} – {edu.check ? 'Present' : edu.finished}
               </Text>
             </View>
           )
         ))}
       </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsList}>
           {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
            .filter(skill => skill)
            .map((skill, index) => (
               <Text key={index} style={styles.skills}>• {skill}</Text>
            ))}
        </View>
       </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>References</Text>
         {refereesData.map((ref, index) => (
           ref.refereesname && (
             <View key={index} style={styles.experienceItem}>
               <Text style={styles.companyName}>{ref.reference}</Text>
              <Text style={styles.position}>{ref.reference}</Text>
              <Text style={styles.sectionContent}>{ref.refereesorg}</Text>
               <Text style={styles.sectionContent}>{ref.refereescontact}</Text>
             </View>
           )
        ))}
       </View>

      {/* Similar sections for Education, Skills, and References */}
    </Page>
  </Document>
);


const Template2PDF = ({ formData, educationData, experienceData, refereesData }) => (
  // <Document>
  //   <Page size="A4" style={styles.page}>
  //     <View style={styles.header}>
  //       <Text style={styles.template2SectionTitle}>{formData.firstname} {formData.lastname}</Text>
  //       <Text style={styles.contactInfo}>Email: {formData.email}</Text>
  //       <Text style={styles.contactInfo}>Phone: {formData.phone}</Text>
  //       <Text style={styles.contactInfo}>Address: {formData.address}</Text>
  //     </View>

  //     <View style={styles.section}>
  //       <Text style={styles.template2SectionTitle}>Summary</Text>
  //       <Text style={styles.sectionContent}>{formData.about}</Text>
  //     </View>

  //     <View style={styles.section}>
  //       <Text style={styles.sectionTitle}>Experience</Text>
  //       {experienceData.map((exp, index) => (
  //         exp.Organization && (
  //           <View key={index} style={styles.sectionContent}>
  //             <Text>{exp.Organization}</Text>
  //             <Text>{exp.position}</Text>
  //             <Text>{exp.from} – {exp.to}</Text>
  //           </View>
  //         )
  //       ))}
  //     </View>

  //     <View style={styles.section}>
  //      <Text style={styles.sectionTitle}>Education</Text>
  //       {educationData.map((edu, index) => (
  //         edu.institute && (
  //          <View key={index} style={styles.experienceItem}>
  //              <Text style={styles.education}>{edu.institute}</Text>
  //             <Text style={styles.education}>{edu.quali}</Text>
  //             <Text style={styles.education}>
  //                {edu.started} – {edu.check ? 'Present' : edu.finished}
  //              </Text>
  //            </View>
  //          )
  //        ))}
  //      </View>

  //     <View style={styles.section}>
  //       <Text style={styles.sectionTitle}>Skills</Text>
  //       <View style={styles.skillsList}>
  //          {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
  //           .filter(skill => skill)
  //           .map((skill, index) => (
  //              <Text key={index} style={styles.skills}>• {skill}</Text>
  //           ))}
  //       </View>
  //      </View>

  //     <View style={styles.section}>
  //       <Text style={styles.sectionTitle}>References</Text>
  //        {refereesData.map((ref, index) => (
  //          ref.refereesname && (
  //            <View key={index} style={styles.experienceItem}>
  //              <Text style={styles.companyName}>{ref.reference}</Text>
  //             <Text style={styles.position}>{ref.reference}</Text>
  //             <Text style={styles.sectionContent}>{ref.refereesorg}</Text>
  //              <Text style={styles.sectionContent}>{ref.refereescontact}</Text>
  //            </View>
  //          )
  //       ))}
  //      </View>

  //     {/* Similar sections for Education, Skills, and References */}
  //   </Page>
  // </Document>


<Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.template2Name}>{formData.firstname} {formData.lastname}</Text>
        <Text style={styles.contactInfo}>Email: {formData.email}</Text>
        <Text style={styles.contactInfo}>Phone: {formData.phone}</Text>
        <Text style={styles.contactInfo}>Address: {formData.address}</Text>
      </View>

      <View style={styles.template2Section}>
        <Text style={styles.template2SectionTitle}>Summary</Text>
        <Text style={styles.sectionContent}>{formData.about}</Text>
      </View>

      <View style={styles.template2Section}>
        <Text style={styles.template2SectionTitle}>Experience</Text>
        {experienceData.map((exp, index) => (
          exp.Organization && (
            <View key={index} style={styles.sectionContent}>
              <Text style={styles.template2Organization}>{exp.Organization}</Text>
              <Text style={styles.template2Position}>{exp.position}</Text>
              <Text style={styles.template2Date}>{exp.from} – {exp.to}</Text>
            </View>
          )
        ))}
      </View>

      <View style={styles.template2Section}>
        <Text style={styles.template2SectionTitle}>Education</Text>
        {educationData.map((edu, index) => (
          edu.institute && (
            <View key={index} style={styles.sectionContent}>
              <Text style={styles.template2Organization}>{edu.institute}</Text>
              <Text style={styles.template2Position}>{edu.quali}</Text>
              <Text style={styles.template2Date}>
                {edu.started} – {edu.check ? 'Present' : edu.finished}
              </Text>
            </View>
          )
        ))}
      </View>

      <View style={styles.template2Section}>
        <Text style={styles.template2SectionTitle}>Skills</Text>
        {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
          .filter(skill => skill)
          .map((skill, index) => (
            <Text key={index} style={styles.template2SkillItem}>• {skill}</Text>
          ))}
      </View>

      <View style={styles.template2Section}>
        <Text style={styles.template2SectionTitle}>References</Text>
        {refereesData.map((ref, index) => (
          ref.refereesname && (
            <View key={index} style={styles.sectionContent}>
              <Text style={styles.template2Organization}>{ref.refereesname}</Text>
              <Text style={styles.template2Position}>{ref.refereesposition}</Text>
              <Text style={styles.template2Position}>{ref.refereesorg}</Text>
              <Text style={styles.template2Position}>{ref.refereescontact}</Text>
            </View>
          )
        ))}
      </View>
    </Page>
  </Document>



);

// Preview Components (HTML/JSX)
const Template1Preview = ({ formData, educationData, experienceData, refereesData }) => (
  <div className="w-full min-h-[600px] p-8 mt-3 md:mt-0 bg-white">
    {/* Your existing Template1Preview JSX */}

    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-1 text-black">{formData.firstname} {formData.lastname}</h1>
      <h1 className="text-xl font-bold mb-1 text-black">{formData.job} </h1>

      <div className="text-sm space-y-1">
        <p className="text-black">Email: {formData.email}</p>
        <p className="text-black">Phone: {formData.phone}</p>
        <p className="text-black">Address: {formData.address}</p>
      </div>
    </div>

    <div className="space-y-4">
      <section className="w-full">
        <h2 className="text-lg font-bold mb-2 text-black">Summary</h2>
        <div className="w-full max-w-full">
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
              <p className="text-sm text-black">{exp.position}</p>
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

const Template2Preview = ({ formData, educationData, experienceData, refereesData }) => (
  <div className="w-full min-h-[600px] p-8 mt-3 md:mt-0 bg-white">


<div className="border-l-4 border-blue-600 pl-4 mb-6">
      <h1 className="text-3xl font-bold text-blue-600">{formData.firstname} {formData.lastname}</h1>
      <h1 className="text-xl font-bold mb-1 text-blue-600">{formData.job} </h1>

      <div className="text-sm mt-2">
        <p className="text-gray-600">{formData.email} • {formData.phone}</p>
        <p className="text-gray-600">{formData.address}</p>
      </div>
    </div>

    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-blue-600 mb-3">Professional Summary</h2>
        <p className="text-gray-700">{formData.about}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600 mb-3">Experience</h2>
        {experienceData.map((exp, index) => (
          exp.Organization && (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-gray-800">{exp.Organization}</h3>
              <p className="text-gray-700">{exp.position}</p>
              <p className="text-gray-600 text-sm">{exp.from} – {exp.to}</p>
            </div>
          )
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600 mb-3">Education</h2>
        {educationData.map((edu, index) => (
          edu.institute && (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-gray-800">{edu.institute}</h3>
              <p className="text-gray-700">{edu.quali}</p>
              <p className="text-gray-600 text-sm">
                {edu.started} – {edu.check ? 'Present' : edu.finished}
              </p>
            </div>
          )
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-600 mb-3">Skills</h2>
        <div className="grid grid-cols-2 gap-2">
          {[formData.skill, formData.skill2, formData.skill3, formData.skill4, formData.skill5]
            .filter(skill => skill)
            .map((skill, index) => (
              <div key={index} className="bg-blue-50 p-2 rounded text-gray-700">{skill}</div>
            ))}
        </div>
      </section>
    </div>


  </div>
);

const Template3Preview = ({ formData, educationData, experienceData, refereesData }) => (



<div className="w-full min-h-[600px] p-8 bg-white" style={{ fontFamily: 'Times New Roman, serif' }}>
<div className="text-start mb-8 pb-4">
  <h1 className="text-3xl font-bold mb-2">{formData.firstname} {formData.lastname}</h1>
  <h1 className="text-xl font-bold mb-1 text-black">{formData.job} </h1>

  <div className="text-sm">
    <p>{formData.email} | {formData.phone}</p>
    <p>{formData.address}</p>
  </div>
</div>

<div className="space-y-6">
  <section>
    <h2 className="text-xl font-bold  mb-3">Professional Summary</h2>
    <p className="text-justify">{formData.about}</p>
  </section>

  <section>
    <h2 className="text-xl font-bold  mb-3">Professional Experience</h2>
    {experienceData.map((exp, index) => (
      exp.Organization && (
        <div key={index} className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">{exp.Organization}</h3>
            <span>{exp.from} – {exp.to}</span>
          </div>
          <p className="italic">{exp.position}</p>
        </div>
      )
    ))}
  </section>

  <section>
    <h2 className="text-xl font-bold  mb-3">Education</h2>
    {educationData.map((edu, index) => (
      edu.institute && (
        <div key={index} className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold">{edu.institute}</h3>
            <span>{edu.started} – {edu.check ? 'Present' : edu.finished}</span>
          </div>
          <p className="italic">{edu.quali}</p>
        </div>
      )
    ))}
  </section>

  <section className="w-full">
        <h2 className="text-lg font-bold mb-2 text-black">Skills</h2>
        <div className="w-full max-w-full">
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

        {refereesData.map((ref, index) => (
          ref.refereesname && (
            <div key={index} className="text-sm mt-2">
              <p className="font-medium text-black">{ref.refereesname}</p>
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

// Map of templates with both preview and PDF components
const templates = {
  1: { preview: Template1Preview, pdf: Template1PDF },
  2: { preview: Template2Preview, pdf: Template1PDF },

  // 2: { preview: Template2Preview, pdf: Template2PDF }, // Using Template1PDF as fallback
  3: { preview: Template3Preview, pdf: Template1PDF }, // Using Template1PDF as fallback
};

// Main component
const GeneratedResume = ({ showTemplate, formData, educationData, experienceData, refereesData, onClose }) => {
  if (!showTemplate) return null;

  const [selectedTemplate, setSelectedTemplate] = React.useState(1);
  const templateRef = useRef(null);

  const handleTemplateSelect = (templateNumber) => {
    setSelectedTemplate(templateNumber);
  };

  const SelectedTemplatePreview = templates[selectedTemplate].preview;
  const SelectedTemplatePDF = templates[selectedTemplate].pdf;

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
              className={`relative cursor-pointer transition-all hover:scale-95 md:hover:scale-105 border border-gray-200 ${
                selectedTemplate === Number(templateNum) ? 'ring-2 ring-purple-600' : ''
              }`}
              onClick={() => handleTemplateSelect(Number(templateNum))}
            >
              {selectedTemplate === Number(templateNum) && (
                <div className="absolute top-2 right-2 bg-purple-600 rounded-full p-1 z-10">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              <div className="preview-container">
                {templates[templateNum].preview({
                  formData,
                  educationData,
                  experienceData,
                  refereesData
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 z-10 bg-white flex justify-center items-center gap-4 p-4 border-t">
          <PDFDownloadLink
            document={
              <SelectedTemplatePDF
                formData={formData}
                educationData={educationData}
                experienceData={experienceData}
                refereesData={refereesData}
              />
            }
            fileName={`${formData.firstname}_${formData.lastname}_resume.pdf`}
            className="bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium px-8 py-3 rounded-md transition-colors"
          >
            {({ loading }) => loading ? 'Generating PDF...' : 'Download PDF'}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default GeneratedResume;



// REMOVE THEM DATE O BITH GENDER AGE LGA STATE FROM THE FORM