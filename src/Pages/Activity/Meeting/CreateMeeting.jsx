import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'
import { FaCircle } from 'react-icons/fa'

const CreateMeeting = () => {
    return (
        <>
            <Topnav />
            <PageNav title="Create Meeting" btn="View Meeting" path="/view-meeting" />
            <section className="p-4">
                {/* Lead Information Heading */}
                <div className="grid grid-cols-1 mb-6">
                    <div className="col-span-1">
                        <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3'>
                            <FaCircle className='text-[#001B48] text-[10px]' />
                            Meeting Information
                        </div>
                    </div>
                </div>

                {/* Lead Information Form */}
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter title"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Meeting Venue</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Select meeting venue</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Location</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter location"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">From</label>
                            <input
                                type="datetime-local"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Select date of birth"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">To</label>
                            <input
                                type="datetime-local"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Select date of birth"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Host</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Select host</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Participants</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter participants"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Realted To</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Lead</option>
                                <option value="">Contact</option>
                                <option value="">Other</option>

                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Participants Remainder</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">None</option>


                            </select>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            <label className="text-sm font-medium">Repeat</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#001B48] rounded-full peer peer-checked:bg-[#001B48] transition-colors"></div>
                                <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            <label className="text-sm font-medium">All Day</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#001B48] rounded-full peer peer-checked:bg-[#001B48] transition-colors"></div>
                                <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
                            </label>
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

export default CreateMeeting
