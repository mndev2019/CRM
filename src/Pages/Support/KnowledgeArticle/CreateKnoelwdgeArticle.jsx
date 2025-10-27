import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'
import { FaCircle } from 'react-icons/fa'

const CreateKnoelwdgeArticle = () => {
    return (
        <>
            <Topnav />
            <PageNav title="Create Knowledge Article" btn="View Articles" path="/view-knowledge" />

            <section className="p-4">
                <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-6">
                    <FaCircle className="text-[#001B48] text-[10px]" />
                    Article Information
                </div>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Article Title</label>
                            <input
                                type="text"
                                placeholder="Enter article title"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Category</label>
                            <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                                <option value="">Select Category</option>
                                <option value="Installation">Installation</option>
                                <option value="Billing">Billing</option>
                                <option value="Maintenance">Maintenance</option>
                                <option value="Warranty">Warranty</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Related Ticket (Optional)</label>
                            <input
                                type="text"
                                placeholder="Enter ticket ID or name"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4">
                            <FaCircle className="text-[#001B48] text-[10px]" />
                            Article Content
                        </div>

                        <textarea
                            rows="6"
                            placeholder="Write detailed explanation, steps, or solution here..."
                            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48] resize-none"
                        ></textarea>
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            className="bg-[#001B48] text-white px-6 py-2 rounded-md text-sm hover:bg-[#002f7a] transition"
                        >
                            Submit Article
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateKnoelwdgeArticle
