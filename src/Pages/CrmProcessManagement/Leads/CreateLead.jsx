import React, { useState } from 'react'
import Topnav from '../../../Component/Topnav'
import lead from '../../../assets/Images/newlead.png'
import CRMChatbot from '../../../Component/CRMChatbot'

const CreateLead = () => {
  const [active, setActive] = useState("Lead Details")

  return (
    <>
      <Topnav
        title="Create Leads"
        subtitle="View and organize every new lead added to your pipeline."
        icon={lead}
      />

      <section className="p-4 sm:p-6 bg-white rounded-bl-2xl rounded-br-2xl">

        {/* Tabs */}
        <div className="flex gap-5 overflow-x-auto whitespace-nowrap">
          {["Lead Details", "Additional Details"].map((itm, index) => (
            <button
              key={index}
              onClick={() => setActive(itm)}
              className={`inter font-medium text-[18px] pb-1 ${
                active === itm ? "border-b-3 border-[#2A75FF]" : ""
              }`}
            >
              {itm}
            </button>
          ))}
        </div>

        {/* ================= LEAD DETAILS ================= */}
        {active === "Lead Details" && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "First Name","Last Name","Email","Phone Number",
              "Company","Website","Source Medium","Source Content",
              "Job Title","Quality Score","Owner","Address 1",
              "Address 2","City","State","Country","Zip","Lead Origin"
            ].map((label, i) => (
              <div key={i} className="flex flex-col">
                <label className="text-[16px] text-gray-700 mb-1 font-bold">
                  {label}
                </label>
                <input
                  type="text"
                  className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                />
              </div>
            ))}

            {/* Lead Source */}
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">Lead Source</label>
              <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
                <option>Select Lead Source</option>
                <option>Facebook</option>
                <option>Google Ads</option>
                <option>LinkedIn</option>
                <option>Referral</option>
              </select>
            </div>

            {/* Lead Stage */}
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

            {/* Checkboxes */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              {["Do Not SMS", "Do Not Track", "Do Not Email", "Do Not Call"].map((label, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[16px] text-gray-700 font-bold">{label}</span>
                </label>
              ))}
            </div>

            {/* Notes */}
            <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-3">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">Notes</label>
              <textarea
                rows="3"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>

          </div>
        )}

        {/* ================= ADDITIONAL DETAILS ================= */}
        {active === "Additional Details" && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Mailing Preferences
              </label>
              <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
                <option>Select Mailing Preferences</option>
              </select>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-6">
          <button className="
            bg-[#2A75FF] text-white 
            w-full sm:w-auto 
            px-6 py-2 
            rounded-md 
            text-[15px] font-medium 
            hover:bg-blue-700
          ">
            Save
          </button>
        </div>

      </section>

      <CRMChatbot />
    </>
  )
}

export default CreateLead
