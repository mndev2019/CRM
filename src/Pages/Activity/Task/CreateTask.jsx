import React from 'react'
import PageNav from '../../../Component/PageNav'
import Topnav from '../../../Component/Topnav'
import { FaCircle } from 'react-icons/fa'

const CreateTask = () => {
    return (
        <>
            <Topnav />
            <PageNav title="Create Task" btn="View Task" path="/view-task" />
            <section className="p-4">
                {/* Lead Information Heading */}
                <div className="grid grid-cols-1 mb-6">
                    <div className="col-span-1">
                        <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3'>
                            <FaCircle className='text-[#001B48] text-[10px]' />
                            Task Information
                        </div>
                    </div>
                </div>

                {/* Lead Information Form */}
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Lead Owner */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Task Owner</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Select Contact Owner</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Subject</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter full name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Due Date</label>
                            <input
                                type="date"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Select date of birth"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Status</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Select Status</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Priority</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Select Priority</option>

                            </select>
                        </div>
                        {/* Reminder Toggle */}
                        <div className="flex items-center justify-between mt-3">
                            <label className="text-sm font-medium">Reminder</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#001B48] rounded-full peer peer-checked:bg-[#001B48] transition-colors"></div>
                                <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            <label className="text-sm font-medium">Repeat</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#001B48] rounded-full peer peer-checked:bg-[#001B48] transition-colors"></div>
                                <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
                            </label>
                        </div>








                    </div>
                    <div className="mt-8">
                        <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4'>
                            <FaCircle className='text-[#001B48] text-[10px]' />
                            Description Information
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea
                                rows="4"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48] resize-none"
                                placeholder="Enter additional details about the lead"
                            ></textarea>
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

export default CreateTask
