import React, { useState } from 'react'
import Topnav from '../../../Component/Topnav'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import CreateEmailTemplateModal from './CreateEmailTemplateModal'

const ShowEmailLibrary = () => {
    const [openModal, setOpenModal] = useState(false)

    const data = [
        {
            name: 'Carissa Kidman',
            type: 'HTML',
            status: 'Draft',
            accessibleTo: 'Everyone',
            modifiedOn: '12/13/2025 02:28 AM',
            modifiedBy: 'Admin',
        },
        {
            name: 'Welcome Email',
            type: 'Visual Designer',
            status: 'Published',
            accessibleTo: 'Admin',
            modifiedOn: '12/10/2025 10:15 AM',
            modifiedBy: 'System',
        },
    ]

    return (
        <>
            <Topnav
                title="Email Library"
                subtitle="Create and manage email templates..."
            />

            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="md:border border-[#EDEEF4] rounded-[12px] bg-white">

                    {/* ================= TOP SECTION ================= */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 p-4">

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
                            onClick={() => setOpenModal(true)}
                            className="text-white font-semibold px-4 py-2 rounded-md
                            bg-[linear-gradient(180deg,#049B1D_22.26%,#01582C_100%)]"
                        >
                            Add Email Template
                        </button>
                    </div>

                    {/* ================= FILTERS ================= */}
                    <div className="flex flex-wrap gap-6 text-sm text-gray-700 border-t border-[#EDEEF4] bg-[#F8F9FB] p-4">

                        <div className="relative w-full sm:w-[180px] flex gap-2">
                            <label className="inter font-500 text-[16px] text-[#363636]">
                                CreatedBy
                            </label>
                            <select
                                className="w-full appearance-none bg-transparent 
                                border-0 border-b border-[#D0D5DD] 
                                pb-1 pr-6 text-sm text-gray-600 
                                focus:outline-none focus:border-[#049B1D]"
                            >
                                <option value="">Any</option>
                                <option value="">Admin</option>
                                <option value="">System</option>
                            </select>
                            <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>

                        <div className="relative w-full sm:w-[180px] flex gap-2">
                            <label className="inter font-500 text-[16px] text-[#363636]">
                                Status
                            </label>
                            <select
                                className="w-full appearance-none bg-transparent 
                                border-0 border-b border-[#D0D5DD] 
                                pb-1 pr-6 text-sm text-gray-600 
                                focus:outline-none focus:border-[#049B1D]"
                            >
                                <option value="">All</option>
                                <option value="">Draft</option>
                                <option value="">Published</option>
                            </select>
                            <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>

                        <div className="relative w-full sm:w-[180px] flex gap-2">
                            <label className="inter font-500 text-[16px] text-[#363636]">
                                Type
                            </label>
                            <select
                                className="w-full appearance-none bg-transparent 
                                border-0 border-b border-[#D0D5DD] 
                                pb-1 pr-6 text-sm text-gray-600 
                                focus:outline-none focus:border-[#049B1D]"
                            >
                                <option value="">Any</option>
                                <option value="">Visual Designer</option>
                                <option value="">HTML</option>
                                <option value="">Text</option>
                            </select>
                            <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>
                    </div>

                    {/* ================= TABLE (DESKTOP) ================= */}
                    <div className="border border-[#EDEEF4] overflow-x-auto hidden md:block">
                        <table className="w-full text-sm">
                            <thead className="bg-[#EAF6FF] inter *:text-[15px]">
                                <tr>
                                    <th className="px-4 py-3 text-left">Name</th>
                                    <th className="px-4 py-3 text-left">Type</th>
                                    <th className="px-4 py-3 text-left">Status</th>
                                    <th className="px-4 py-3 text-left">Accessible To</th>
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
                                        <td className="px-4 py-3">{item.status}</td>
                                        <td className="px-4 py-3">{item.accessibleTo}</td>
                                        <td className="px-4 py-3">{item.modifiedOn}</td>
                                        <td className="px-4 py-3">{item.modifiedBy}</td>
                                        <td className="px-4 py-3 flex gap-3 justify-center">
                                            <AiFillEdit className="text-blue-600 cursor-pointer" size={20} />
                                            <AiFillDelete className="text-red-600 cursor-pointer" size={20} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* ================= MOBILE CARDS ================= */}
                    <div className="md:hidden space-y-4 p-4">
                        {data.map((item, i) => (
                            <div
                                key={i}
                                className="border border-[#EDEEF4] rounded-xl p-4 shadow-sm"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-[16px]">
                                        {item.name}
                                    </h3>
                                    <span className="text-xs px-3 py-1 rounded-full bg-gray-200">
                                        {item.status}
                                    </span>
                                </div>

                                <div className="text-sm text-gray-600 space-y-1">
                                    <p><b>Type:</b> {item.type}</p>
                                    <p><b>Accessible To:</b> {item.accessibleTo}</p>
                                    <p><b>Modified On:</b> {item.modifiedOn}</p>
                                    <p><b>Modified By:</b> {item.modifiedBy}</p>
                                </div>

                                <div className="flex justify-end gap-4 mt-3">
                                    <AiFillEdit className="text-blue-600 text-xl cursor-pointer" />
                                    <AiFillDelete className="text-red-600 text-xl cursor-pointer" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CreateEmailTemplateModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}

export default ShowEmailLibrary
