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
                <div className="p-4 sm:p-6 border border-[#EDEEF4] rounded-[12px] py-8 sm:py-10 flex flex-col items-center justify-center">
                    
                    <h2 className="inter font-bold text-[18px] sm:text-[20px] mb-6">
                        Widgets
                    </h2>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto justify-center">
                        <button
                            onClick={() => navigate('/create-email-campaign')}
                            className="
                                inter font-bold text-white text-[14px] sm:text-[16px]
                                rounded-[8px] px-4 sm:px-5 py-2 cursor-pointer
                                bg-[linear-gradient(180deg,#A30227_22.26%,#73001A_100%)]
                                hover:opacity-90
                                active:scale-95
                                transition-all duration-200
                                focus:outline-none focus:ring-2 focus:ring-[#A30227]/50
                                w-full sm:w-auto
                            "
                        >
                            Create Email Campaign
                        </button>

                        <button
                            onClick={() => navigate('/show-emailcampaign')}
                            className="
                                inter font-bold text-white text-[14px] sm:text-[16px]
                                rounded-[8px] px-4 sm:px-5 py-2 cursor-pointer
                                bg-[linear-gradient(180deg,#2A75FF_0%,#4FADFF_100%)]
                                w-full sm:w-auto
                            "
                        >
                            Show Email Campaign
                        </button>
                    </div>

                    {/* Image */}
                    <img
                        src={image}
                        alt="Widget preview"
                        className="border-b border-[#EDEEF4] w-full max-w-[900px] object-contain"
                    />

                    {/* Description */}
                    <p className="inter font-medium text-[14px] sm:text-[15px] text-center pt-4 max-w-[700px]">
                        Email campaign helps you automatically send targeted messages to your contacts and track their engagement in your CRM. Easily customize email templates, segments, and schedules to match your goals and boost conversions.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Websitewidget
