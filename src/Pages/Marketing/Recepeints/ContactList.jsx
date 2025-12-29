import React from 'react'

const ContactList = () => {
    return (
        <>
            <div className="border border-[#CBCBCB] rounded-[3px]">
                {/* Header */}
                <h2 className="inter font-medium text-[16px] bg-[#E8F6FF] py-2 px-4">
                    Paste here
                </h2>

                <div className="p-4 border-b border-[#EDEEF4] flex justify-between">
                    <p className='inter font-[400] text-[14px] '>
                        xyz123@gmail.com
                    </p>

                    <input
                        type="checkbox"
                        className="w-4 h-4 rounded border border-gray-300 accent-blue-600 cursor-pointer"
                    />

                </div>
                <div className="p-4 border-b border-[#EDEEF4] flex justify-between">
                    <p className='inter font-[400] text-[14px] '>
                        xyz123@gmail.com
                    </p>

                    <input
                        type="checkbox"
                        className="w-4 h-4 rounded border border-gray-300 accent-blue-600 cursor-pointer"
                    />

                </div>
                <div className="p-4 border-b border-[#EDEEF4] flex justify-between">
                    <p className='inter font-[400] text-[14px] '>
                        xyz123@gmail.com
                    </p>

                    <input
                        type="checkbox"
                        className="w-4 h-4 rounded border border-gray-300 accent-blue-600 cursor-pointer"
                    />

                </div>
            </div>
        </>
    )
}

export default ContactList
