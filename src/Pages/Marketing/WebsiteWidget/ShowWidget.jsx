import React from 'react'
import websitewidget from '../../../assets/Images/globe 1.png'
import Topnav from '../../../Component/Topnav'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import { HiOutlineCursorClick } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const ShowWidget = () => {
    const navigate = useNavigate();
    return (
        <>
            <Topnav
                title="Website Widget"
                subtitle="Lead captured via website widget. Action required to move forward in the pipeline."
                icon={websitewidget}
            />
            <section className='p-4 bg-white rounded-bl-2xl rounded-br-2xl'>
                <div className=" border border-[#EDEEF4] rounded-[12px] bg-white">

                    {/* Top Section */}
                    <div className="flex items-center justify-between mb-4 p-4">

                        {/* Search Box */}
                        <div className="relative w-[260px]">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" />
                            <input
                                type="text"
                                placeholder="Search here"
                                className="w-full pl-10 pr-3 py-2 border border-[#D0D5DD] rounded-md text-sm focus:outline-none"
                            />
                        </div>

                        {/* Button */}
                        <button onClick={()=> navigate('/create-widget')} className="text-white font-semibold px-4 py-2 rounded-md cursor-pointer
                              bg-[linear-gradient(180deg,#049B1D_22.26%,#01582C_100%)]">
                            Create New Widget
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex  gap-10 text-sm text-gray-700  border-t border-[#EDEEF4] bg-[#F8F9FB] p-4">

                        <div className="relative w-[180px] flex gap-2">
                            <label className='inter font-500 text-[16px] text-[#363636]'>Status</label>
                            <select
                                className="w-full appearance-none bg-transparent 
                                border-0 border-b border-[#D0D5DD] 
                                pb-1 pr-6 text-sm text-gray-600 
                                focus:outline-none focus:border-[#049B1D]"
                            >
                                <option value="">Search here</option>

                            </select>

                            <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>


                        <div className="relative w-[180px] flex gap-2">
                            <label className='inter font-500 text-[16px] text-[#363636]'>Type</label>
                            <select
                                className="w-full appearance-none bg-transparent 
                                border-0 border-b border-[#D0D5DD] 
                                pb-1 pr-6 text-sm text-gray-600 
                                focus:outline-none focus:border-[#049B1D]"
                            >
                                <option value="">Search here</option>

                            </select>

                            <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>

                    </div>

                    {/* Table */}
                    <div className="border border-[#EDEEF4] overflow-hidden">
                        <table className="w-full text-sm">

                            <thead className="bg-[#EAF6FF] inter *:text-[15px]">
                                <tr>
                                    <th className="px-4 py-3 text-left">Name</th>
                                    <th className="px-4 py-3 text-left">Type</th>
                                    <th className="px-4 py-3 text-left">Modified On</th>
                                    <th className="px-4 py-3 text-left">Modified By</th>
                                    <th className="px-4 py-3 text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {[1, 2, 3, 4].map((_, i) => (
                                    <tr
                                        key={i}
                                        className="border-t border-[#EAF6FF] "
                                    >
                                        <td className="px-4 py-3">Carissa Kidman</td>
                                        <td className="px-4 py-3">Topbar</td>
                                        <td className="px-4 py-3">12/13/2025 02:28 AM</td>
                                        <td className="px-4 py-3">Admin</td>
                                        <td className="px-4 py-3 text-center cursor-pointer">
                                            <HiOutlineCursorClick className="inline text-lg text-gray-600" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>

            </section>
        </>
    )
}

export default ShowWidget
