import React from 'react'
import Topnav from '../../../Component/Topnav'
import emailCampaign from '../../../assets/Images/emailcampaign.png'
import image from '../../../assets/Images/emailmarketing.png'
import { useNavigate } from 'react-router-dom'

const Websitewidget = () => {
    const navigate = useNavigate();

    return (
        <>
            <Topnav
                title="Email Campaigns"
                subtitle="Contacts here receive targeted emails to warm them up and move them closer to conversion."
                icon={emailCampaign}
            />

            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="p-4 border border-[#EDEEF4] rounded-[12px] py-10 flex flex-col items-center justify-center">
                    <h2 className="inter font-bold text-[20px] mb-6">
                        Widgets
                    </h2>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={() => navigate('/create-email-campaign')}
                            className="
                            inter font-bold text-white text-[16px]
                            rounded-[8px] px-5 py-2 cursor-pointer
                            bg-[linear-gradient(180deg,#A30227_22.26%,#73001A_100%)]
                            hover:opacity-90
                            active:scale-95
                            transition-all duration-200
                            focus:outline-none focus:ring-2 focus:ring-[#A30227]/50
                         "
                        >
                            Create Email Campaign
                        </button>


                        <button
                            onClick={() => navigate('/show-emailcampaign')}
                            className="inter font-bold text-white text-[16px] rounded-[8px] px-5 py-2 cursor-pointer
                            bg-[linear-gradient(180deg,#2A75FF_0%,#4FADFF_100%)]"
                        >
                            Show Email Campaign
                        </button>
                    </div>

                    <img src={image} className="border-b border-[#EDEEF4]" alt="Widget preview" />

                    <p className="inter font-medium text-[15px] text-center pt-4 max-w-[700px]">
                        Email campaign helps you automatically send targeted messages to your contacts and track their engagement in your CRM. Easily customize email templates, segments, and schedules to match your goals and boost conversions.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Websitewidget
