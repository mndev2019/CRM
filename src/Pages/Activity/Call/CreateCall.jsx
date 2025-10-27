import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'
import { FaCircle } from 'react-icons/fa'

const CreateCall = () => {
    return (
        <>
            <Topnav />
            <PageNav title="Create Call" btn="View Call" path="/view-call" />
            <section className="p-4">
                {/* Lead Information Heading */}
                <div className="grid grid-cols-1 mb-6">
                    <div className="col-span-1">
                        <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3'>
                            <FaCircle className='text-[#001B48] text-[10px]' />
                            Call Information
                        </div>
                    </div>
                </div>

                {/* Lead Information Form */}
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div>
                            <label className="block text-sm font-medium mb-1">Call For</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Call for"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Related To</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Related to"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Call Type</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Select Call Type</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Call Status</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Select Status</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Call Start Time</label>
                            <input
                                type="datetime-local"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Select date of birth"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Call Owner</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Select Call Owner</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Reminder</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">None</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Subject</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter subject"
                            />
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4 md:col-span-3 col-span-1'>
                            <FaCircle className='text-[#001B48] text-[10px]' />

                            Purpose Of Outgoing Call
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Call Agenda</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter call agenda"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Call Purpose</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">None</option>

                            </select>
                        </div>
                    </div>


                    {/* Submit Button */}
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="bg-[#001B48] text-white px-6 py-2 rounded-md text-sm hover:bg-[#002f7a] transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateCall
