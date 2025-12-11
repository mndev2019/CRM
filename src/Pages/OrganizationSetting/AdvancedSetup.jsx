import React from 'react'
import Topnav from '../../Component/Topnav'
import advancedsetup from '../../assets/Images/advancedsetup.png'
import { FiSearch } from 'react-icons/fi'

const AdvancedSetup = () => {
    const data = [
        {
            title: "Enable App Tabs",
            para: "Enabling this feature will open entity details pages (lead/opportunity/ticket/account, etc.) in a application tab within the same browser. Recommended if you have softphone setup for calling."
        },
        {
            title: "Allow users to save dynamic forms as Drafts",
            para: "Allow users to temporarily save unfinished dynamic forms and complete them later."
        },
        {
            title: "Avoid edit conflicts on Email Campaign Page",
            para: "Enable restriction on multiple users editing the same email campaign page at the same time by showing a notification to the user indicating someone else is editing the template in Email Campaign Page Editor."
        },
        {
            title: "Configure telephony ignore rules",
            para: "Enables whether to ignore calls coming from unknown phone numbers and vice versa."
        },
        {
            title: "Configure User Deactivation rules",
            para: "Enable additional levels of check before User Deactivation."
        },
        {
            title: "Disable 'Delete all Leads' static List Action",
            para: "Disable 'Delete all Leads' action in Manage Lists > List Details > List Action Dropdown."
        },
        {
            title: "Disable Lead Notes Feature",
            para: "Disables add notes feature for lead."
        },
    ]
    return (
        <>
            <Topnav
                title="Advanced Setup"
                subtitle="Monitor and control all advanced CRM settings and behaviors from a single place."
                icon={advancedsetup}
            />
            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl ">
                <div className='border border-[#EDEEF4] rounded-[12px] p-4'>
                    {/* Header */}
                    <div className='flex justify-between items-center pb-6 border-b border-[#EDEEF4] '>

                        {/* Search Box */}
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input
                                type="text"
                                placeholder="Search here"
                                className="bg-transparent border-2 border-gray-300 text-md px-10 py-2 rounded-md  placeholder-[#898484] outline-none w-100"
                            />
                        </div>

                        {/* Notify Me */}
                        <div className="flex items-center gap-2 ">
                            <input
                                type="checkbox"
                                id="notifyMe"
                                className="w-4 h-4 accent-blue-600 cursor-pointer"
                            />
                            <label htmlFor="notifyMe" className="text-[16px] inter cursor-pointer">
                                Notify me
                            </label>
                        </div>
                    </div>
                    {
                        data.map((itm) => (
                            <>
                                <div className='flex items-center gap-20 border-b border-[#EDEEF4] py-4 justify-between'>
                                    <div>
                                        <h2 className='inter text-[18px] font-medium'>
                                            {itm.title}
                                        </h2>
                                        <p className='inter text-[14px] text-[#4C4646] font-400'>
                                            {itm.para}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-6 transition-all"></div>
                                        </label>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>



            </section>
        </>
    )
}

export default AdvancedSetup
