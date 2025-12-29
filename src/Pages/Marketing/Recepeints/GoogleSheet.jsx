import React from 'react'
import { FiSearch } from 'react-icons/fi'

const GoogleSheet = () => {
    return (
        <>
            <div className="border border-[#CBCBCB] rounded-[3px]">
                {/* Header */}
                <h2 className="inter font-medium text-[16px] bg-[#E8F6FF] py-2 px-4">
                    Add New Recipients
                </h2>

                {/* Form */}
                <div className="p-6 space-y-6">
                    {/* URL Input Field */}
                    <div className="flex items-center gap-3">
                        <label className="w-30 text-sm font-medium inter">URL Input Field</label>
                        <input
                            type="text"
                            className="flex-1 border border-[#CBCBCB] rounded-[3px] h-[38px] px-3 outline-none"
                        />
                    </div>

                    {/* Sheet Name */}
                    <div className="flex items-center gap-6">
                        <label className="w-30 text-sm font-medium inter">Sheet Name</label>
                        <input
                            type="email"
                            className="flex-1 border border-[#D1D1D1] rounded-[3px] h-[38px] px-3 outline-none"
                        />
                    </div>
                    <div className='flex justify-end'>
                        <div className="relative w-[260px] ">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" />
                            <input
                                type="text"
                                placeholder="Search here"
                                className="w-full pl-10 pr-3 py-2 border border-[#D0D5DD] rounded-md text-sm focus:outline-none"
                            />
                        </div>
                    </div>

                    <table className="w-full text-sm">

                        <thead className="bg-[#EAF6FF] inter *:text-[15px]">
                            <tr>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Type</th>
                                <th className="px-4 py-3 text-left">Modified On</th>


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


                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>
        </>
    )
}

export default GoogleSheet
