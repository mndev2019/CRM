import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'
import { FaCircle } from 'react-icons/fa'

const CreateCampaigns = () => {
    return (
        <>
            <Topnav />
            <PageNav title="Create Campaigns" btn="View Campaigns" path="/view-campaigns" />
            <section className="p-4">
                {/* Deal Information Heading */}
                <div className="grid grid-cols-1 mb-6">
                    <div className="col-span-1">
                        <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3">
                            <FaCircle className="text-[#001B48] text-[10px]" />
                            Campaign Information
                        </div>
                    </div>
                </div>


                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div>
                            <label className="block text-sm font-medium mb-1">Campaign Owner</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">Select Campaign Owner</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Type</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">None</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Campaign Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter campaign name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Status</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">None</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Start Date</label>
                            <input
                                type="date"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">End Date</label>
                            <input
                                type="date"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Expected Revenue</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter expected revenue"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Budgeted Cost</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter budgeted cost"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Actual Cost</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter actual cost"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Expected Response</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter expected response"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Numbers sent</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter numbers sent"
                            />
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

export default CreateCampaigns
