
import React from 'react'
import Topnav from '../../Component/Topnav'
import profile from '../../assets/Images/profile.png'

const CreateProfile = () => {
    return (
        <>
            <Topnav
                title="My Profile"
                subtitle="Manage your personal profile"
                icon={profile}
            />

            <section className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 bg-white rounded-bl-2xl rounded-br-2xl">
                <form>
                    {/* FORM GRID */}
                    <div className="md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Date Of Birth */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Date Of Birth
                            </label>
                            <input
                                type="date"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Sales Role */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Sales Role
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Designation */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Designation
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Manager */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Manager
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Old Team */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Old Team
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Department */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Department
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Sales Regions */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Sales Regions
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Skills */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Skills
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>

                        {/* Agent Phone Number */}
                        <div className="flex flex-col">
                            <label className="text-[16px] text-gray-700 mb-1 font-bold">
                                Agent Phone Number
                            </label>
                            <input
                                type="tel"
                                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            />
                        </div>
                    </div>

                    {/* SAVE BUTTON */}
                    <div className="mt-10 flex justify-end">
                        <button className="
                            border-2 border-indigo-500 text-indigo-600
                            font-semibold py-2 px-10 rounded-md
                            hover:bg-indigo-500 hover:text-white transition
                            w-full sm:w-auto
                        ">
                            SAVE
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateProfile

