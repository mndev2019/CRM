import React from 'react'
import Topnav from '../../Component/Topnav'
import callprefrence from '../../assets/Images/call.png'

const CallPrefrence = () => {
    return (
        <>
            <Topnav
                title="Call Preferences"
                subtitle="Choose your preferred time, method, and virtual number for calling leads."
                icon={callprefrence}
            />

            <section className="p-4 sm:p-6 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="p-4 border border-[#EDEEF4] rounded-[12px]">
                    <h2 className="inter font-bold md:text-[20px] text-[15px] border-b border-[#EDEEF4] pb-2">
                        Select Provider and Virtual Number
                    </h2>

                    <div className="border border-[#EDEEF4] p-4 mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            {/* Info Text */}
                            <div className="col-span-1 sm:col-span-2">
                                <p className="text-sm text-gray-800 mb-3">
                                    You can select one of the virtual numbers from the list, for making outbound calls. You can choose any provider from the list and all the virtual numbers associated with that provider can be selected. Please make sure you're choosing the expected virtual number before starting any calls to the leads as the leads will see this number while responding
                                </p>
                            </div>

                            {/* Form */}
                            <div className="col-span-1">
                                <label className="block md:text-[20px] text-[15px] inter font-semibold mb-3">
                                    Set Virtual Number
                                </label>

                                <select
                                    className="w-full border-2 border-[#EDEEF4] rounded-[6px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="browser">Select Virtual Number</option>
                                </select>

                                {/* Checkbox */}
                                <div className="flex items-start gap-2 mt-4">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 mt-1"
                                    />
                                    <label className="text-sm text-gray-700">
                                        Skip confirmation of virtual number and provider before placing a call
                                    </label>
                                </div>

                                {/* Button */}
                                <button
                                    className="mt-4 w-full sm:w-auto bg-[#4A6CF7] text-white px-4 py-2 rounded-md font-medium hover:bg-[#3a56c7] transition"
                                >
                                    Save Details
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallPrefrence
