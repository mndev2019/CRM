import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'
import { FaCircle } from 'react-icons/fa'

const CreateSolution = () => {
    return (
        <>
            <Topnav />
            <PageNav
                title="Create Solution"
                btn="View Solution"
                path="/view-solution"
            />

            <section className="p-4">
                {/* Lead Capture Form Heading */}
                <div className="grid grid-cols-1 mb-6">
                    <div className="col-span-1">
                        <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3">
                            <FaCircle className="text-[#001B48] text-[10px]" />
                            Solution Form
                        </div>
                    </div>
                </div>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Solution Owner</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">Select Solution Owner</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Solution Number</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter solution number"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Solution Title</label>
                            <input
                                type="email"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                                placeholder="Enter title"
                            />
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
                                <option value="">Select Status</option>
                                <option value="Draft">Draft</option>
                                <option value="Reviewed">Reviewed</option>
                                <option value="Duplicate">Duplicate</option>
                            </select>
                        </div>



                    </div>

                    {/* Description Section */}
                    <div className="mt-8">
                        <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4">
                            <FaCircle className="text-[#001B48] text-[10px]" />
                            Description Information
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Question</label>
                            <textarea
                                rows="4"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48] resize-none"
                                
                            ></textarea>
                        </div>
                         <div>
                            <label className="block text-sm font-medium mb-1">Answer</label>
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

export default CreateSolution
