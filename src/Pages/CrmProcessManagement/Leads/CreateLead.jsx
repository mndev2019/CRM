import React, { useState } from 'react'
import Topnav from '../../../Component/Topnav'
import lead from '../../../assets/Images/newlead.png'

const CreateLead = () => {
    const [active, setActive] = useState("Lead Details")
    return (
        <>
            <Topnav
                title="Create Leads"
                subtitle="View and organize every new lead added to your pipeline."
                icon={lead}
            />
            <section className='p-6 bg-white rounded-bl-2xl rounded-br-2xl'>
                <div className='flex gap-5'>
                    {["Lead Details", "Additional Details"].map((itm, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(itm)}
                            className={`inter font-medium text-[18px] cursor-pointer pb-1 ${active === itm ? "border-b-3 border-[#2A75FF] " : ""
                                }`}
                        >
                            {itm}
                        </button>
                    ))}



                </div>
                {active === "Lead Details" && (
                    <div className="mt-6 grid grid-cols-3 gap-6">

                        {/* ---------- First Row ----------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">First Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700  font-bold mb-1">Last Name</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Email</label>
                            <input
                                type="email"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Phone Number ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Phone Number</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Company ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Company</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Website ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Website</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Checkboxes ---------- */}
                        <div className="col-span-3 grid grid-cols-4 gap-4 mt-2">

                            {["Do Not SMS", "Do Not Track", "Do Not Email", "Do Not Call"].map((label, i) => (
                                <label key={i} className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span className="text-[16px] text-gray-700 font-bold">{label}</span>
                                </label>
                            ))}

                        </div>

                        {/* ---------- Lead Source Select Box ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Lead Source</label>
                            <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
                                <option value="">Select Lead Source</option>
                                <option>Facebook</option>
                                <option>Google Ads</option>
                                <option>LinkedIn</option>
                                <option>Referral</option>
                            </select>
                        </div>

                        {/* ---------- Source Medium ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Source Medium</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Source Content ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Source Content</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Job Title ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Job Title</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Notes ---------- */}
                        <div className="flex flex-col col-span-3">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Notes</label>
                            <textarea
                                rows="3"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            ></textarea>
                        </div>

                        {/* ---------- Quality Score ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Quality Score</label>
                            <input
                                type="number"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Lead Stage ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Lead Stage</label>
                            <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
                                <option>Select Stage</option>
                                <option>New</option>
                                <option>Contacted</option>
                                <option>Qualified</option>
                                <option>Disqualified</option>
                            </select>
                        </div>

                        {/* ---------- Owner ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Owner</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Address 1 ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Address 1</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Address 2 ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Address 2</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- City ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">City</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- State ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">State</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Country ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Country</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Zip ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Zip</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* ---------- Lead Origin ---------- */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Lead Origin</label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                    </div>

                )}
                {active === "Additional Details" && (
                    <div className='mt-6 grid grid-cols-3 '> 
                          <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">Mailing Preferences</label>
                            <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
                                <option value="">Select Mailing Preferences</option>
                               
                            </select>
                        </div>
                    </div>
                )}
                  <div className="mt-5">
                    <button className="bg-[#2A75FF] text-white px-6 py-2 rounded-md text-[15px] font-medium hover:bg-blue-700">
                        Save
                    </button>
                </div>
            </section>
        </>
    )
}

export default CreateLead
