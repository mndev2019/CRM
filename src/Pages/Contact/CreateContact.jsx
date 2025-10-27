import React from 'react'
import Topnav from '../../Component/Topnav'
import PageNav from '../../Component/PageNav'
import { FaCircle } from 'react-icons/fa'

const CreateContact = () => {
    return (
        <>
            <Topnav />
            <PageNav title="Create Contact" btn="View Contact" path="/view-contact" />
            <section className="p-4">
                {/* Lead Information Heading */}
                <div className="grid grid-cols-1 mb-6">
                    <div className="col-span-1">
                        <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3'>
                            <FaCircle className='text-[#001B48] text-[10px]' />
                            Contact Information
                        </div>
                    </div>
                </div>

                {/* Lead Information Form */}
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Lead Owner */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Contact Owner</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Select Contact Owner</option>

                            </select>
                        </div>

                        {/* Organisation */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Lead Source</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            >
                                <option value="">Select Lead Source</option>

                            </select>
                        </div>

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter full name"
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
                            <label className="block text-sm font-medium mb-1">Vendor Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter vendor name"
                            />
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter title"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter email"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input
                                type="tel"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter phone number"
                            />
                        </div>

                        {/* Website */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Department</label>
                            <input
                                type="url"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter Department"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">DOB</label>
                            <input
                                type="date"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Select date of birth"
                            />
                        </div>
                    </div>

                    {/* Address Information Section */}
                    <div className="mt-8">
                        <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4'>
                            <FaCircle className='text-[#001B48] text-[10px]' />
                            Address Information
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Street */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Mailing Street </label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                    placeholder="Enter mailing street"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Other Street </label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                    placeholder="Enter other street"
                                />
                            </div>

                            {/* City */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Mailing City</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                    placeholder="Enter mailing city"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Other City</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                    placeholder="Enter other city"
                                />
                            </div>

                            {/* State */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Mailing State</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                    placeholder="Enter mailing state"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Other State</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                    placeholder="Enter other state"
                                />
                            </div>
                            {/* Zip / Postal Code */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Mailing Zip</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                    placeholder="Enter mailing zip"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Other Zip</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                    placeholder="Enter other zip"
                                />
                            </div>
                            {/* Country */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Mailing Country</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                    placeholder="Enter mailing country"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Other Country</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                    placeholder="Enter other country"
                                />
                            </div>




                        </div>
                        {/* Description Information Section */}
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

export default CreateContact
