import React, { useState } from 'react'
import Topnav from '../../../Component/Topnav'
import emailCampaign from "../../../assets/Images/emailcampaign.png";
import { FiChevronUp } from 'react-icons/fi';
import { RiSave2Line } from 'react-icons/ri';
import { LuFullscreen } from 'react-icons/lu';
import ContentTab from './ContentTab';
import SettingsTab from './SettingsTab';
import RowsTab from './RowsTab';
import EmailStepper from './EmailStepper';

const Compose = () => {
    const [activeTab, setActiveTab] = useState("Content");
    return (
        <>
            <Topnav
                title="Email Campaigns"
                subtitle="Contacts here receive targeted emails to warm them up and move them closer to conversion."
                icon={emailCampaign}
            />
            <section className='p-4 bg-white rounded-bl-2xl rounded-br-2xl'>
                 <EmailStepper currentStep={1} />
                <div className="bg-[#F7F7F8] p-6 rounded-lg border border-[#EDEEF4] mb-5">
                    <div className="flex flex-col gap-5">

                        {/* From */}
                        <div className="flex items-center gap-4">
                            <label className="inter font-medium text-[15px] w-[120px]">
                                From
                            </label>

                            <select className="flex-1 border border-[#A6A4A4] rounded-md px-3 py-2 text-sm bg-white">
                                <option>Select sender name</option>
                            </select>

                            {/* <button className="bg-[linear-gradient(173.61deg,_#8693FF_7.28%,_#2A75FF_97.25%)] text-white text-sm px-4 py-2 rounded-md inter font-500 text-[16px]">
                                Change sender name
                            </button> */}
                        </div>

                        {/* Subject */}
                        <div className="flex items-center gap-4">
                            <label className="inter font-medium text-[15px] w-[120px]">
                                Subject <span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                className="flex-1 border border-[#A6A4A4] bg-white rounded-md px-3 py-2 text-sm"
                                placeholder="Enter subject"
                            />
                        </div>

                        {/* Sender Name */}
                        <div className="flex items-center gap-4">
                            <label className="inter font-medium text-[15px] w-[120px]">
                                Sender Name
                            </label>

                            <div className="flex-1 flex items-center gap-3">
                                <input
                                    type="text"
                                    className="flex-1 border border-[#A6A4A4] bg-white rounded-md px-3 py-2 text-sm"
                                    placeholder="Sender name"
                                />

                                <button className="border border-[#2A75FF] text-[#2A75FF] text-[16px] px-4 py-2 rounded-md inter font-medium">
                                    Cancel
                                </button>

                                <button className="bg-[#2A75FF] text-white  px-4 py-2 rounded-md inter font-medium text-[16px]">
                                    Save
                                </button>
                            </div>
                        </div>

                        {/* Reset */}
                        <div className="ml-[120px] text-sm text-gray-400 cursor-pointer flex items-center gap-1">
                            <span className="text-base">↻</span>
                            Reset to default sender name
                        </div>

                    </div>
                </div>

                <div className="">
                    {/* Editor Container */}
                    <div className="bg-white border-[0.5px] border-[#EDEEF4] rounded-lg">
                        {/* Tabs */}
                        <div className="flex items-center border-b border-[#EDEEF4] px-4 py-2 gap-2">
                            <button className="px-3 py-1 text-sm bg-[#006BAE] text-white rounded border border-[#4C4646]">Use Template</button>
                            <button className="px-3 py-1 text-sm bg-[#006BAE] text-white rounded border border-[#4C4646]">Save as Template</button>
                            <button className="px-3 py-1 text-sm bg-[#006BAE] text-white rounded border border-[#4C4646]">Load Template</button>
                            <button className="px-3 py-1 text-sm bg-[#006BAE] text-white rounded border border-[#4C4646]">Download Template</button>
                            <button className="px-3 py-1 text-sm bg-[#006BAE] text-white rounded border border-[#4C4646]">Test Content </button>
                            <button className="px-3 py-1 text-sm bg-[#006BAE] text-white rounded border border-[#4C4646]">Preview</button>
                        </div>

                        <div className="flex">
                            {/* Left Panel */}
                            {/* Left Panel */}
                            <div className="w-[320px] border-r border-[#CBCBCB] bg-[#F7F7F8]">

                                {/* Tabs */}
                                <div className="flex border-b border-[#CBCBCB]">
                                    {["Content", "Rows", "Settings"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`flex-1 py-2 text-sm inter font-medium
                                             ${activeTab === tab
                                                    ? "bg-white border-b-2 border-[#006BAE] text-[#006BAE]"
                                                    : "text-[#4C4646]"
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="p-4 text-sm bg-[#F7F7F8]">
                                    {activeTab === "Content" && <ContentTab />}
                                    {activeTab === "Rows" && <RowsTab/>}
                                    {activeTab === "Settings" && <SettingsTab />}
                                </div>
                            </div>


                            {/* Right Editor Area */}
                            <div className="flex-1 p-4">
                                {/* Editor Header */}
                                <div className="flex items-center justify-end gap-8 text-sm text-black mb-2">
                                    <button className="flex items-center gap-1 "><FiChevronUp size={16} /> Collapse menu</button>
                                    <button className="flex items-center gap-1"><RiSave2Line size={16} /> Save</button>
                                    <button className="flex items-center gap-1"><LuFullscreen size={16} /> Full screen</button>
                                </div>

                                {/* Text Area */}
                                <textarea
                                    className="w-full h-[420px] border border-[#CBCBCB] p-3 focus:outline-none"

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

            </section>
        </>
    )
}

export default Compose
