import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'
import { FaCircle } from 'react-icons/fa'

const CreateCase = () => {
    return (
        <>
            <Topnav />
            <PageNav
                title="Create Case"
                btn="View Case"
                path="/view-case"
            />
            <section className="p-4">
                {/* Lead Capture Form Heading */}
                <div className="grid grid-cols-1 mb-6">
                    <div className="col-span-1">
                        <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3">
                            <FaCircle className="text-[#001B48] text-[10px]" />
                            Case Information

                        </div>
                    </div>
                </div>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Case Number</label>
                            <input
                                type="tel"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter case number"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Case Owner</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">Select Case Owner</option>

                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Product Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter product name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Status</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">New</option>
                                <option value="">Escalated</option>
                                <option value="">On Hold</option>
                                <option value="">Closed</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Type</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">None</option>
                                <option value="">Problem</option>
                                <option value="">Feature Request</option>
                                <option value="">Question</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Priority</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">High</option>
                                <option value="">Medium</option>
                                <option value="">On Hold</option>
                                <option value="">Closed</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Case Origin</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">None</option>
                                <option value="">Email</option>
                                <option value="">Phone</option>
                                <option value="">Web</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Case Reason</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">None</option>
                                <option value="">User did not attend any training</option>
                                <option value="">Complex functionality</option>
                                <option value="">Existing problem</option>
                                <option value="">Instructions not clear</option>
                                <option value="">New problem</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Related To</label>
                            <input
                                type="Related To"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="related to"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Subject</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter subject"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Account Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter account name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Reported By</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="reported to"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Deal Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter deal name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input
                                type="tel"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter phone number"
                            />
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="mt-8">
                        <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4">
                            <FaCircle className="text-[#001B48] text-[10px]" />
                            Description Information

                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea
                                rows="4"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48] resize-none"

                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Internal Comments</label>
                            <textarea
                                rows="4"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48] resize-none"

                            ></textarea>
                        </div>

                    </div>
                    <div className="mt-8">
                        <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4">
                            <FaCircle className="text-[#001B48] text-[10px]" />
                            Solution Information
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Solution</label>
                            <textarea
                                rows="4"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48] resize-none"

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

export default CreateCase
