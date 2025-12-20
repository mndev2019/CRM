import React from "react";
import Topnav from "../../../Component/Topnav";
import emailCampaign from "../../../assets/Images/emailcampaign.png";
import { FiSave, FiMaximize2, FiChevronUp } from "react-icons/fi";
import { RiSave2Line } from "react-icons/ri";
import { LuFullscreen } from "react-icons/lu";

const RichTextEditor = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topnav
        title="Email Campaigns"
        subtitle="Contacts here receive targeted emails to warm them up and move them closer to conversion."
        icon={emailCampaign}
      />

      <div className="p-6">
        {/* Editor Container */}
        <div className="bg-white border-[0.5px] border-[#EDEEF4] rounded-lg">
          {/* Tabs */}
          <div className="flex items-center border-b border-[#EDEEF4] px-4 py-2 gap-2">
            <button className="px-3 py-1 text-sm bg-[#006BAE] text-white rounded border border-[#4C4646]">Rich-Text Editor</button>
            <button className="px-3 py-1 text-sm bg-[#006BAE] text-white rounded border border-[#4C4646]">Text Message</button>
          </div>

          <div className="flex">
            {/* Left Panel */}
            <div className="w-[320px] border-r border-[#CBCBCB] p-4 text-sm bg-[#F7F7F8]">
              <h3 className="font-medium mb-3 inter text-[14px]">Copy from HTML Message</h3>

              <p className="inter font-medium text-[14px] mb-2">Email Personalization</p>
              <p className="text-xs inter font-400 text-[#4C4646] mb-3">
                Insert mail-merge fields in subject and mail body to personalize the message
              </p>

              <select className="w-full border border-[#CBCBCB] text-[#4C4646] px-2 py-1 mb-2">
                <option>Lead Fields</option>
              </select>

              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full border border-[#CBCBCB] px-2 py-1"
                />
              </div>

              <div className="space-y-2">
                {['Lead Fields', 'First Name', 'Last Name', 'Email'].map((item) => (
                  <div
                    key={item}
                    className="bg-[#8FD4FF] text-white inter font-500 text-[12px] px-2 py-1 cursor-pointer border border-[#6A9EFF]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button className="text-blue-600 text-xs mt-2">View all</button>

              <div className="mt-6">
                <label className="block inter text-[14px] font-medium mb-1">
                  Send Test Emails <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full inter font-400 text-[#4C4646] border border-[#CBCBCB] p-2 text-sm"
                  rows="3"
                  defaultValue="tshakshi50@gmail.com"
                />
                <p className="text-[14px] text-[#CBCBCB] inter font-400 mt-1">Example: abc@xyz.com, abc@b2c.com...</p>
                <button className="mt-2 px-4 py-1 border border-[#4C4646] rounded-[2px] text-sm">Send</button>
              </div>
            </div>

            {/* Right Editor Area */}
            <div className="flex-1 p-4">
              {/* Editor Header */}
              <div className="flex items-center justify-end gap-4 text-sm text-black mb-2">
                <button className="flex items-center gap-1"><FiChevronUp size={14} /> Collapse menu</button>
                <button className="flex items-center gap-1"><RiSave2Line  size={14} /> Save</button>
                <button className="flex items-center gap-1"><LuFullscreen size={14} /> Full screen</button>
              </div>

              {/* Text Area */}
              <textarea
                className="w-full h-[420px] border border-[#CBCBCB] p-3 focus:outline-none"
                placeholder="Start typing your email content here..."
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-6 text-gray-600">
            <button>Cancel</button>
            <button>Save and Exit</button>
            <button>Save</button>
            <button>Back</button>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
