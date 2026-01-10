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

            <section className="p-3 sm:p-4 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="p-4 sm:p-6 border border-[#EDEEF4] rounded-[12px] py-8 sm:py-10 flex flex-col items-center justify-center">
                    
                    <h2 className="inter font-bold text-[18px] sm:text-[20px] mb-6">
                        Widgets
                    </h2>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto items-center">
                        <button
                            onClick={() => navigate('/create-widget')}
                            className="inter font-bold text-white text-[15px] sm:text-[16px]
                            rounded-[8px] px-5 py-2 cursor-pointer w-full sm:w-auto
                            bg-[linear-gradient(180deg,#049B1D_22.26%,#01582C_100%)]"
                        >
                            Create New Widget
                        </button>

                        <button
                            onClick={() => navigate('/show-widget')}
                            className="inter font-bold text-white text-[15px] sm:text-[16px]
                            rounded-[8px] px-5 py-2 cursor-pointer w-full sm:w-auto
                            bg-[linear-gradient(180deg,#2A75FF_0%,#4FADFF_100%)]"
                        >
                            Show Widget
                        </button>
                    </div>

                    <img
                        src={image}
                        alt="Widget preview"
                        className="border-b border-[#EDEEF4] w-full max-w-[900px] object-contain"
                    />

                    <p className="inter font-medium text-[14px] sm:text-[15px] text-center pt-4 max-w-[700px] px-2">
                        Website widget helps capture visitor information seamlessly from your website and automatically stores it in your CRM. Easily customize the widget's appearance, fields, and placement to match your brand and boost lead generation.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Websitewidget
