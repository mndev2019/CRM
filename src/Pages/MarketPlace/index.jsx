import React from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from '../../Component/Topnav'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { FaLock } from 'react-icons/fa'

import zoom from '../../assets/Images/zoom.png'
import whatsapp from '../../assets/Images/whatsapp.png'
import google from '../../assets/Images/googlenalytics.png'
import wordpress from '../../assets/Images/wordpress.png'
import email from '../../assets/Images/email.png'
import telegram from '../../assets/Images/telegram.png'

const apps = [
    {
        name: 'Zoom',
        desc: 'Host interactive classes with your audience right from your RAMOT',
        icon: zoom,
        action: 'Connect Zoom',
        type: 'connect',
        path: '/zoom',
    },
    {
        name: 'Whatsapp',
        desc: 'Send all Whatsapp messages from your own number',
        icon: whatsapp,
        type: 'locked',
    },
    {
        name: 'Google Analytics',
        desc: 'Collect data about your webpage visitors',
        icon: google,
        action: 'Connect Google Analytics',
        type: 'connect',
        path: '/google-analytics',
    },
    {
        name: 'Wordpress',
        desc: 'Connect your WordPress website for enriched management',
        icon: wordpress,
        action: 'Connect Wordpress',
        type: 'connect',
        path: '/wordpress',
    },
    {
        name: 'Email Sender IDs',
        desc: 'Send all Emails from your own domain specific sender IDs',
        icon: email,
        type: 'coming',
    },
    {
        name: 'Telegram',
        desc: 'Manage your Telegram communities, groups and channels easily from Exly',
        icon: telegram,
        action: 'Connect Zapier',
        type: 'connect',
        path: '/telegram',
    },
]

const MarketPlace = () => {
    const navigate = useNavigate()

    return (
        <>
            <Topnav
                title="Marketplace"
                subtitle="The marketplace provides access to multiple apps that work together to nurture leads and improve conversion performance."
            />

            <section className="p-5 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="p-4 border border-[#EDEEF4] rounded-[12px]">

                    {/* Tabs */}
                    <div className="flex gap-3 border-b border-[#EDEEF4] pb-4 mb-8">
                        <button className="inter text-white px-5 py-2 font-bold text-[13px] border border-[#2A75FF] rounded-[4px] bg-[linear-gradient(90deg,#2A75FF_0%,#4FADFF_100%)]">
                            All apps
                        </button>
                        <button className="inter px-5 py-2 font-bold text-[13px] border border-[#2A75FF] rounded-[4px] bg-white text-[#2A75FF]">
                            Installed apps
                        </button>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {apps.map((app, index) => (
                            <div key={index} className="relative">
                                {/* Gradient Border */}
                                <div className="absolute inset-0 rounded-[18px] bg-gradient-to-r from-[#EABAFF] to-[#A1DBFF]" />

                                {/* Card */}
                                <div className="relative bg-white rounded-[18px] p-6 m-[2px] h-full flex flex-col">
                                    <img
                                        src={app.icon}
                                        alt={app.name}
                                        className="h-[48px] w-[48px] mb-3"
                                    />

                                    <h3 className="inter font-semibold text-[15px] text-[#111827] mb-1">
                                        {app.name}
                                    </h3>

                                    <p className="inter text-[14px] text-[#8D8C8C] leading-[18px] mb-5 flex-grow">
                                        {app.desc}
                                    </p>

                                    {/* Actions */}
                                    {app.type === 'connect' && (
                                        <button
                                            onClick={() => navigate(app.path)}
                                            className="inter text-[14px] text-[#7416A6] font-medium flex items-center gap-1 hover:gap-2 transition-all"
                                        >
                                            {app.action}
                                            <HiOutlineArrowRight />
                                        </button>
                                    )}

                                    {app.type === 'locked' && (
                                        <button className="flex items-center gap-2 bg-[#FBBF24] text-black text-[13px] font-semibold px-4 py-2 rounded-[6px] w-fit cursor-not-allowed">
                                            <FaLock />
                                            Locked
                                        </button>
                                    )}

                                    {app.type === 'coming' && (
                                        <span className="inter text-[14px] text-[#7416A6] font-medium">
                                            Coming Soon ✨
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default MarketPlace
