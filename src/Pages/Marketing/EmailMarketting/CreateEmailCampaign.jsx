import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";
import emailCampaign from "../../../assets/Images/emailcampaign.png";
import plaintext from '../../../assets/Images/plain-text.png'
import layer from '../../../assets/Images/layers.png'
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import EmailStepper from "./EmailStepper";

// const steps = [
//     { name: "Template", active: true },
//     { name: "Compose", active: false },
//     { name: "Recipients", active: false },
//     { name: "Review", active: false },
//     { name: "Schedule", active: false },
// ];

const templates = [
    { title: "Blank" },
    { title: "Ebook Download" },
    { title: "Festival Discount Coupon" },
    { title: "Free Counseling Session" },
];

const CreateEmailCampaign = () => {
    const navigate = useNavigate();
    const [selectedTemplate, setSelectedTemplate] = useState(0);
    const [emailType, setEmailType] = useState("Use Email Template");



    return (
        <>
            <Topnav
                title="Email Campaigns"
                subtitle="Contacts here receive targeted emails to warm them up and move them closer to conversion."
                icon={emailCampaign}
            />

            <div className="p-6 bg-gray-50 min-h-screen">
                 <EmailStepper currentStep={0} /> {/* Template active */}
                
              

                {/* Form */}
                <div className="bg-[#F7F7F8] p-6 rounded-lg border border-[#EDEEF4] mb-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <label className="inter font-medium text-[15px] w-[220px]">
                                Email Campaign Name
                            </label>
                            <input
                                type="text"
                                className="flex-1 border border-[#A6A4A4] rounded-[6px] px-3 py-2 text-sm"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="inter font-medium text-[15px] w-[220px]">
                                Email Category
                            </label>
                            <select className="flex-1 border border-[#A6A4A4] rounded-md px-3 py-2 text-sm">
                                <option>Select category</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="inter font-medium text-[15px] w-[220px]">
                                How would you like to create Email?
                            </label>
                            <select value={emailType} onChange={(e) => setEmailType(e.target.value)} className="flex-1 border border-[#A6A4A4] rounded-md px-3 py-2 text-sm">
                                <option value="Use Email Template">Use Email Template</option>
                                <option value="Use HTML">Use HTML</option>
                                <option value="Copy From Sent Emails">Copy From Sent Emails</option>
                            </select>
                        </div>
                    </div>
                </div>
                {emailType === "Use Email Template" && (
                    <>

                        < h3 className="text-[20px] mb-4 nunito font-bold">
                            Use Email Template
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {templates.map((template, index) => (
                                <>
                                    <div
                                        key={index}
                                        onClick={() => setSelectedTemplate(index)}
                                        className={`border h-[255px] flex items-end justify-center cursor-pointer relative transition-all
                                            ${selectedTemplate === index
                                                ? "border-[6px] border-[#FFCF87]"
                                                : "border-[6px] border-[#F2F2F2]"
                                            }`}
                                    >
                                        {selectedTemplate === index && (
                                            <span className="absolute top-2 left-2 w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                                                ✓
                                            </span>
                                        )}

                                        <p className="nunito font-bold text-[15px] mb-3">
                                            {template.title}
                                        </p>
                                       
                                    </div>

                                </>

                            ))}
                        </div>
                    </>
                )
                }
                {emailType === "Use HTML" && (
                    <>
                        <h3 className="text-[20px] mb-6 nunito font-bold">
                            Use HTML
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                            {/* Rich Text */}
                            <div
                              
                                className="cursor-pointer border-[6px] border-[#9BC6FF] h-[260px] flex flex-col items-center justify-center relative"
                                onClick={()=> navigate('/rich-texteditor')}
                               
                            >
                               

                                <div className="text-blue-600 text-5xl mb-4"></div>
                                <p className="nunito font-semibold text-[16px] mb-4">
                                    Use Rich-Text editor
                                </p>
                                <div className="border-2 border-[#2A75FF] rounded-[8px] p-3">
                                    <img src={layer} className="h-[50px]" />

                                </div>
                            </div>

                            {/* Paste HTML */}
                            <div
                              
                                className="cursor-pointer border-[6px] border-[#9EC5FF] h-[260px] flex flex-col items-center justify-center"
                               
                            >
                              


                                <p className="nunito font-semibold text-[16px] mb-4">
                                    Paste your HTML
                                </p>
                                <div className="border-2 border-[#2A75FF] rounded-[8px] p-3">
                                    <img src={layer} className="h-[50px]" />

                                </div>
                            </div>

                            {/* Plain Text */}
                            <div
                               
                                className="cursor-pointer border-[6px] border-[#9EC5FF] h-[260px] flex flex-col items-center justify-center"
                                 onClick={()=> navigate('/plain-texteditor')}
                                
                            >
                               


                                <p className="nunito font-semibold text-[16px] mb-4">
                                    Use Plain-Text editor
                                </p>
                                <div className="border-2 border-[#2A75FF] rounded-[8px] p-3">
                                    <img src={plaintext} className="h-[50px]" />

                                </div>
                            </div>
                        </div>
                    </>
                )}
                {emailType === "Copy From Sent Emails" && (
                    <>
                        <h3 className="text-[20px] mb-4 nunito font-bold">
                            Copy From Sent Emails
                        </h3>
                        <div className="relative w-[260px]">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" />
                            <input
                                type="text"
                                placeholder="Search here"
                                className="w-full pl-10 pr-3 py-2 border border-[#D0D5DD] rounded-md text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex  gap-10 text-sm text-gray-700 bg-[#F8F9FB] p-4">

                            <div className="relative w-[180px] flex gap-2">
                                <label className='inter font-500 text-[16px] text-[#363636]'>Status</label>
                                <select
                                    className="w-full appearance-none bg-transparent 
                                                        border-0 border-b border-[#D0D5DD] 
                                                        pb-1 pr-6 text-sm text-gray-600 
                                                        focus:outline-none focus:border-[#049B1D]"
                                >
                                    <option value="">Search here</option>

                                </select>

                                <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                            </div>


                            <div className="relative w-[180px] flex gap-2">
                                <label className='inter font-500 text-[16px] text-[#363636]'>Type</label>
                                <select
                                    className="w-full appearance-none bg-transparent 
                                                        border-0 border-b border-[#D0D5DD] 
                                                        pb-1 pr-6 text-sm text-gray-600 
                                                        focus:outline-none focus:border-[#049B1D]"
                                >
                                    <option value="">Search here</option>

                                </select>

                                <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                            </div>

                        </div>

                        {/* Table */}
                        <div className="border border-[#EDEEF4] overflow-hidden">
                            <table className="w-full text-sm">

                                <thead className="bg-[#EAF6FF] inter *:text-[15px]">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Name</th>
                                        <th className="px-4 py-3 text-left">Type</th>
                                        <th className="px-4 py-3 text-left">Modified On</th>
                                        <th className="px-4 py-3 text-left">Modified By</th>
                                        <th className="px-4 py-3 text-center">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[1, 2, 3, 4].map((_, i) => (
                                        <tr
                                            key={i}
                                            className="border-t border-[#EAF6FF] "
                                        >
                                            <td className="px-4 py-3">Carissa Kidman</td>
                                            <td className="px-4 py-3">Topbar</td>
                                            <td className="px-4 py-3">12/13/2025 02:28 AM</td>
                                            <td className="px-4 py-3">Admin</td>
                                            <td className="px-4 py-3 text-center cursor-pointer">
                                                <HiOutlineCursorClick className="inline text-lg text-gray-600" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </>
                )}




                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-4 mt-10 pt-4 border-t border-[#EDEEF4] bg-[#F7F7F8]">
                    <button className="nunito text-[18px] text-gray-600 hover:underline">
                        Cancel
                    </button>

                    <button className="nunito text-[18px] text-[#676767] hover:underline">
                        Save and Exit
                    </button>

                    <button className="nunito text-[18px] text-[#676767]  hover:underline">
                        Save
                    </button>

                    <button className="nunito text-[18px] text-[#676767]  hover:underline">
                        Back
                    </button>

                    <button onClick={()=> navigate('/compose-emailcampaign')} className="bg-blue-600 hover:bg-blue-700 text-white nunito text-[15px] px-6 py-2 rounded-md">
                        Next
                    </button>
                </div>

            </div >
        </>
    );
};

export default CreateEmailCampaign;
