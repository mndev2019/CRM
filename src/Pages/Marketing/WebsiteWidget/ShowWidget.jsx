import React from 'react'
import websitewidget from '../../../assets/Images/globe 1.png'
import Topnav from '../../../Component/Topnav'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const ShowWidget = () => {
    const navigate = useNavigate()
    const data = [
        { name: 'Carissa Kidman', type: 'Topbar', modifiedOn: '12/13/2025 02:28 AM', modifiedBy: 'Admin' },
        { name: 'John Doe', type: 'Sidebar', modifiedOn: '12/14/2025 10:15 AM', modifiedBy: 'Admin' },
        { name: 'Jane Smith', type: 'Popup', modifiedOn: '12/15/2025 08:45 AM', modifiedBy: 'Admin' },
        { name: 'Michael Brown', type: 'Topbar', modifiedOn: '12/16/2025 11:30 AM', modifiedBy: 'Admin' },
    ]

    return (
        <>
            <Topnav
                title="Website Widget"
                subtitle="Lead captured via website widget. Action required to move forward in the pipeline."
                icon={websitewidget}
            />

            <section className='p-3 sm:p-4 bg-white rounded-bl-2xl rounded-br-2xl'>
                <div className="border border-[#EDEEF4] rounded-[12px] bg-white">

                    {/* Top Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 p-4 gap-4 sm:gap-0">

                        {/* Search Box */}
                        <div className="relative w-full sm:w-[260px]">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" />
                            <input
                                type="text"
                                placeholder="Search here"
                                className="w-full pl-10 pr-3 py-2 border border-[#D0D5DD] rounded-md text-sm focus:outline-none"
                            />
                        </div>

                        {/* Button */}
                        <button
                            onClick={() => navigate('/create-widget')}
                            className="text-white font-semibold px-4 py-2 rounded-md cursor-pointer
                              bg-[linear-gradient(180deg,#049B1D_22.26%,#01582C_100%)] w-full sm:w-auto"
                        >
                            Create New Widget
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-sm text-gray-700 border-t border-[#EDEEF4] bg-[#F8F9FB] p-4">

                        <div className="relative w-full sm:w-[180px] flex flex-col">
                            <label className='inter font-500 text-[16px] text-[#363636] mb-1'>Status</label>
                            <select
                                className="w-full appearance-none bg-transparent border-0 border-b border-[#D0D5DD] pb-1 pr-6 text-sm text-gray-600 focus:outline-none focus:border-[#049B1D]"
                            >
                                <option value="">Search here</option>
                            </select>
                            <FiChevronDown className="absolute right-0 top-[28px] text-gray-500 pointer-events-none" />
                        </div>

                        <div className="relative w-full sm:w-[180px] flex flex-col">
                            <label className='inter font-500 text-[16px] text-[#363636] mb-1'>Type</label>
                            <select
                                className="w-full appearance-none bg-transparent border-0 border-b border-[#D0D5DD] pb-1 pr-6 text-sm text-gray-600 focus:outline-none focus:border-[#049B1D]"
                            >
                                <option value="">Search here</option>
                            </select>
                            <FiChevronDown className="absolute right-0 top-[28px] text-gray-500 pointer-events-none" />
                        </div>

                    </div>

                    {/* Table for Desktop */}
                    <div className="hidden sm:block border border-[#EDEEF4] overflow-x-auto">
                        <table className="w-full text-sm min-w-[600px]">
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
                                {data.map((item, i) => (
                                    <tr key={i} className="border-t border-[#EAF6FF]">
                                        <td className="px-4 py-3">{item.name}</td>
                                        <td className="px-4 py-3">{item.type}</td>
                                        <td className="px-4 py-3">{item.modifiedOn}</td>
                                        <td className="px-4 py-3">{item.modifiedBy}</td>
                                        <td className="p-3 flex justify-center gap-3 whitespace-nowrap">
                                            <AiFillEdit className="text-blue-600 cursor-pointer hover:scale-110 transition" size={20} />
                                            <AiFillDelete className="text-red-600 cursor-pointer hover:scale-110 transition" size={20} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Card view for Mobile */}
                    <div className="sm:hidden flex flex-col gap-4 p-4">
                        {data.map((item, i) => (
                            <div key={i} className="border border-[#EDEEF4] rounded-md p-4 bg-[#FAFAFA] shadow-sm">
                                <div className="flex justify-between items-start mb-2 gap-2 flex-wrap">
                                    <span className="font-semibold">{item.name}</span>
                                    <div className="flex gap-2 mt-2 sm:mt-0">
                                        <AiFillEdit className="text-blue-600 cursor-pointer hover:scale-110 transition" size={20} />
                                        <AiFillDelete className="text-red-600 cursor-pointer hover:scale-110 transition" size={20} />
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span>Type:</span>
                                    <span>{item.type}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span>Modified On:</span>
                                    <span>{item.modifiedOn}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Modified By:</span>
                                    <span>{item.modifiedBy}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default ShowWidget
