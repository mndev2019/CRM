// import React, { useRef } from "react";
// import Topnav from "../../../Component/Topnav";
// import emailTemplate from "../../../assets/Images/emailcampaign.png";
// import { RiSave2Line } from "react-icons/ri";
// import { LuFullscreen } from "react-icons/lu";
// import EmailEditor from "react-email-editor";


// const CreateVisualEmailTemplate = () => {
//     const emailEditorRef = useRef(null);

//     const saveTemplate = () => {
//         emailEditorRef.current.editor.saveDesign((design) => {
//             console.log("Template JSON:", design);
//         });
//     };

//     const exportHTML = () => {
//         emailEditorRef.current.editor.exportHtml((data) => {
//             console.log("Email HTML:", data.html);
//         });
//     };

//     return (
//         <>
//             <Topnav
//                 title="Email Template"
//                 subtitle="Create and manage reusable email templates for your campaigns."
//                 icon={emailTemplate}
//             />

//             <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl">


//                 <div className="bg-[#F7F7F8] p-6 rounded-lg border border-[#EDEEF4] mb-5">
//                     <div className="flex flex-col gap-5">

//                         {/* Name */}
//                           <div className="flex items-center gap-4">
//                             <label className="inter font-medium text-[15px] w-[120px]">
//                                 Name <span className="text-red-500">*</span>
//                             </label>

//                             <input
//                                 type="text"
//                                 className="flex-1 border border-[#A6A4A4] bg-white rounded-md px-3 py-2 text-sm"
//                                 placeholder="Enter subject"
//                             />
//                         </div>

//                         {/* Subject */}
//                         <div className="flex items-center gap-4">
//                             <label className="inter font-medium text-[15px] w-[120px]">
//                                 Subject <span className="text-red-500">*</span>
//                             </label>

//                             <input
//                                 type="text"
//                                 className="flex-1 border border-[#A6A4A4] bg-white rounded-md px-3 py-2 text-sm"
//                                 placeholder="Enter subject"
//                             />
//                         </div>

//                         {/* Sender Name */}
//                         <div className="flex items-center gap-4">
//                             <label className="inter font-medium text-[15px] w-[120px]">
//                               Tags
//                             </label>

//                             <div className="flex-1 flex items-center gap-3">
//                                 <input
//                                     type="text"
//                                     className="flex-1 border border-[#A6A4A4] bg-white rounded-md px-3 py-2 text-sm"
//                                     placeholder="Sender name"
//                                 />

//                             </div>
//                         </div>



//                     </div>
//                 </div>

//                 {/* EDITOR TOP ACTIONS */}
//                 <div className="flex justify-end gap-4 mb-3">
//                     <button
//                         onClick={saveTemplate}
//                         className="flex items-center gap-1 border border-[#EDEEF4] px-4 py-2 rounded"
//                     >
//                         <RiSave2Line /> Save Template
//                     </button>

//                     <button
//                         onClick={exportHTML}
//                         className="bg-blue-600 text-white px-4 py-2 rounded"
//                     >
//                         Export HTML
//                     </button>

//                     <button className="flex items-center gap-1 border border-[#EDEEF4] px-4 py-2 rounded">
//                         <LuFullscreen /> Full screen
//                     </button>
//                 </div>

//                 {/* EMAIL EDITOR */}
//                 <div className="border border-[#EDEEF4] rounded-lg overflow-hidden">
//                     <EmailEditor
//                         ref={emailEditorRef}
//                         minHeight="700px"
//                     />
//                 </div>

//                 {/* FOOTER */}
//                 <div className="flex justify-between items-center mt-6">

//                     <button
//                         onClick={exportHTML}
//                         className="bg-blue-600 text-white px-6 py-2 rounded"
//                     >
//                         Save
//                     </button>
//                 </div>

//             </section>
//         </>
//     );
// };

// export default CreateVisualEmailTemplate;

import React, { useRef } from "react";
import Topnav from "../../../Component/Topnav";
import emailTemplate from "../../../assets/Images/emailcampaign.png";
import { RiSave2Line } from "react-icons/ri";
import { LuFullscreen } from "react-icons/lu";
import EmailEditor from "react-email-editor";
import { useNavigate } from "react-router-dom";

const CreateVisualEmailTemplate = () => {
    const navigate = useNavigate();
    const emailEditorRef = useRef(null);

    const saveTemplate = () => {
        emailEditorRef.current.editor.saveDesign((design) => {
            console.log("Template JSON:", design);
        });
    };

    // const exportHTML = () => {
    //     emailEditorRef.current.editor.exportHtml((data) => {
    //         console.log("Email HTML:", data.html);
    //     });
    // };

    return (
        <>
            <Topnav
                title="Email Template"
                subtitle="Create and manage reusable email templates for your campaigns."
                icon={emailTemplate}
            />

            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl">

                {/* FORM SECTION */}
                <div className="bg-[#F7F7F8] p-6 rounded-lg border border-[#EDEEF4] mb-5">
                    <div className="flex flex-col gap-5">

                        {/* Name */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <label className="inter font-medium text-[15px] sm:w-[120px]">
                                Name <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                className="flex-1 border border-[#A6A4A4] bg-white rounded-md px-3 py-2 text-sm"
                                placeholder="Enter subject"
                            />
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <label className="inter font-medium text-[15px] sm:w-[120px]">
                                Subject <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                className="flex-1 border border-[#A6A4A4] bg-white rounded-md px-3 py-2 text-sm"
                                placeholder="Enter subject"
                            />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <label className="inter font-medium text-[15px] sm:w-[120px]">
                                Tags
                            </label>

                            <div className="flex-1 flex items-center gap-3">
                                <input
                                    type="text"
                                    className="flex-1 border border-[#A6A4A4] bg-white rounded-md px-3 py-2 text-sm"
                                    placeholder="Sender name"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* EDITOR TOP ACTIONS */}
                <div className="flex flex-wrap justify-end gap-3 mb-3">
                    <button
                        onClick={saveTemplate}
                        className="flex items-center gap-1 border border-[#EDEEF4] px-4 py-2 rounded"
                    >
                        <RiSave2Line /> Save Template
                    </button>

                    <button
                        // onClick={exportHTML}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Export HTML
                    </button>

                    <button className="flex items-center gap-1 border border-[#EDEEF4] px-4 py-2 rounded">
                        <LuFullscreen /> Full screen
                    </button>
                </div>

                {/* EMAIL EDITOR */}
                <div className="border border-[#EDEEF4] rounded-lg overflow-hidden">
                    <EmailEditor
                        ref={emailEditorRef}
                        minHeight="700px"
                    />
                </div>

                {/* FOOTER */}
                <div className="flex justify-end sm:justify-between items-center mt-6">
                    <button
                        // onClick={exportHTML}
                        onClick={()=> navigate('/email-library')}
                        className="bg-blue-600 text-white px-6 py-2 rounded"
                    >
                        Save
                    </button>
                </div>

            </section>
        </>
    );
};

export default CreateVisualEmailTemplate;

