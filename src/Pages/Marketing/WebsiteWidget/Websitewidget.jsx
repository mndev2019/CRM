import React from 'react'
import Topnav from '../../../Component/Topnav'
import websitewidget from '../../../assets/Images/globe 1.png'
import image from '../../../assets/Images/widgetimage.png'
import { useNavigate } from 'react-router-dom'

const Websitewidget = () => {
    const navigate = useNavigate();

    return (
        <>
            <Topnav
                title="Website Widget"
                subtitle="Lead captured via website widget. Action required to move forward in the pipeline."
                icon={websitewidget}
            />

            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="p-4 border border-[#EDEEF4] rounded-[12px] py-10 flex flex-col items-center justify-center">
                    <h2 className="inter font-bold text-[20px] mb-6">
                        Widgets
                    </h2>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={() => navigate('/create-widget')}
                            className="inter font-bold text-white text-[16px] rounded-[8px] px-5 py-2 cursor-pointer
                            bg-[linear-gradient(180deg,#049B1D_22.26%,#01582C_100%)]"
                        >
                            Create New Widget
                        </button>

                        <button
                            onClick={() => navigate('/show-widget')}
                            className="inter font-bold text-white text-[16px] rounded-[8px] px-5 py-2 cursor-pointer
                            bg-[linear-gradient(180deg,#2A75FF_0%,#4FADFF_100%)]"
                        >
                            Show Widget
                        </button>
                    </div>

                    <img src={image} className="border-b border-[#EDEEF4]" alt="Widget preview" />

                    <p className="inter font-medium text-[15px] text-center pt-4 max-w-[700px]">
                        Website widget helps capture visitor information seamlessly from your website and automatically stores it in your CRM. Easily customize the widget's appearance, fields, and placement to match your brand and boost lead generation.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Websitewidget
