import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import zoom from '../../assets/Images/zoom.png'
import Topnav from '../../Component/Topnav'
import { useNavigate } from 'react-router-dom'

const ZoomMeeting = () => {
    const navigate = useNavigate();
    return (
        <>
            <Topnav title="Marketplace" subtitle="The marketplace provides access to multiple apps that work together to nurture leads and improve conversion performance." />
            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl ">
                <div className='border border-[#EDEEF4] rounded-[12px] p-4'>
                    {/* Back */}
                    <div onClick={() => navigate('/market-place')} className="flex items-center gap-2 text-[#6D28D9] text-[14px] font-medium mb-4 cursor-pointer border-b border-[#EDEEF4] pb-4 bg-[linear-gradient(90deg,rgba(235,247,255,0.35)_0%,#FDF4FF_100%)]">
                        <HiArrowLeft />
                        Integrations
                    </div>

                    {/* Header Card */}
                    <div className=" rounded-[12px] p-4 flex items-center justify-between mb-6">

                        <div className="flex items-center gap-3">
                            <img
                                src={zoom}
                                alt="Zoom"
                                className="h-[44px] w-[44px]"
                            />
                            <h2 className="inter font-semibold text-[16px] text-[#111827]">
                                Zoom
                            </h2>
                        </div>

                        {/* <div className="flex items-center gap-3">
                            <input
                                type="text"
                                value=""
                                placeholder='xyz@gmail.com'
                                className="border border-[#6A0065] px-3 py-1 text-[13px] text-[#111827] bg-white"
                            />

                            <input
                                type="text"
                                value=""
                                placeholder='6a5cd2bb-bc42-41fd-b'
                                className="border border-[#6A0065] px-3 py-1 text-[13px] text-[#111827] bg-white"
                            />

                            <button className="bg-[linear-gradient(90deg,#870081_0%,#F205E8_100%)]
  text-white text-[13px] font-semibold px-4 py-1.5 rounded-[4px] border border-[#6A0065]">
                                Save
                            </button>
                        </div> */}
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-[14px]">

                        {/* Overview */}
                        <div>
                            <h3 className="nunito font-bold text-[18px] text-black mb-2">
                                Zoom Integration – Overview
                            </h3>
                            <p className='nunito font-medium text-[#4C4646] text-[16px]'>
                                The Zoom Integration allows you to schedule, manage, and track Zoom meetings directly from your CRM—without switching between apps.
                                It helps sales, support, and internal teams conduct meetings more efficiently while keeping all meeting details linked to CRM records.
                            </p>
                        </div>

                        {/* After Integrating */}
                        <div>
                            <p className="text-[#6400B0] nunito font-semibold text-[18px] mb-2">
                                Key Benefits:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 nunito font-bold  text-[#4C4646] text-[16px]">
                                <li>
                                    Schedule Meetings Instantly
                                </li>
                                <p className='font-medium'>
                                    Create Zoom meetings directly from Leads, Contacts, or Deals.
                                </p>
                                <li>
                                    Automatic Meeting Links
                                </li>
                                <p className='font-medium'>
                                    Meeting links are automatically attached to CRM records.
                                </p>
                                <li>
                                    Meeting History Tracking
                                </li>
                                <p className='font-medium'>
                                    View past and upcoming meetings in the activity timeline.
                                </p>
                                <li>
                                    Improved Team Collaboration
                                </li>
                                <p className='font-medium'>
                                    Teams can easily plan, join, and manage meetings together.
                                </p>
                            </ul>
                        </div>

                        {/* Installation */}
                        <div>
                            {/* <h3 className="nunito font-bold text-[18px] text-black mb-2">
                                Installation
                            </h3> */}

                            <p className="text-[#6400B0] nunito font-semibold text-[18px]  mb-2">
                               What You Can Do with Zoom Integration
                            </p>

                            <ul className="list-disc pl-5 space-y-2 nunito font-medium text-[#4C4646] text-[16px]">
                                <li>
                                   Create, update, and cancel Zoom meetings
                                </li>
                                <li>
                                   Join meetings with one click from CRM
                                </li>
                                <li>
                                   Track meeting details and outcomes
                                </li>
                                <li>
                                   Manage reminders and follow-ups efficiently
                                </li>
                             
                            </ul>
                        </div>

                    </div>
                </div>


            </section>
        </>

    )
}

export default ZoomMeeting
