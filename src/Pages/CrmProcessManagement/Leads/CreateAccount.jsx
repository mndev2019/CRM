import React from "react";
import Topnav from "../../../Component/Topnav";
import lead from "../../../assets/Images/profile.png";

const CreateAccount = () => {
    return (
        <>
            <Topnav
                title="Create Account"
                subtitle="Add and manage customer accounts in the CRM."
                icon={lead}
            />

            <section className="p-6 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="flex gap-5">
                    <button className="inter font-medium text-[18px] cursor-pointer pb-1 border-b-3 border-[#2A75FF]">
                        Account Details
                    </button>
                </div>

                {/* GRID FORM */}
                <div className="mt-6 grid grid-cols-3 gap-6">

                    {/* ---------- Account Name ---------- */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Account Name</label>
                        <input
                            type="text"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* ---------- Email ---------- */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Email</label>
                        <input
                            type="email"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* ---------- Phone Number ---------- */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Phone Number</label>
                        <input
                            type="text"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* ---------- Website ---------- */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Website</label>
                        <input
                            type="text"
                            placeholder="https://example.com"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* ---------- Account Owner ---------- */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Account Owner</label>
                        <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none bg-white">
                            <option value="">Select Owner</option>

                            <option>Admin</option>
                            <option>Team Member</option>
                        </select>
                    </div>

                    {/* ---------- Industry ---------- */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Industry</label>
                        <input
                            type="text"
                            placeholder="IT, Finance, Retail etc."
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* ---------- Account Type ---------- */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Account Type</label>
                        <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none bg-white">
                            <option value="">Select Type</option>
                            <option>Customer</option>
                            <option>Vendor</option>
                            <option>Partner</option>
                        </select>
                    </div>

                    {/* ---------- Lead Source ---------- */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Lead Source</label>
                        <input
                            type="text"
                            placeholder="Website, Referral, Ads etc."
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* ---------- GST / Tax ID ---------- */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">GST / Tax ID</label>
                        <input
                            type="text"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* ---------- ADDRESS SECTION ---------- */}

                    {/* Street */}
                    <div className="flex flex-col col-span-3">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Street</label>
                        <input
                            type="text"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* City */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">City</label>
                        <input
                            type="text"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* State */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">State</label>
                        <input
                            type="text"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Country</label>
                        <input
                            type="text"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* Postal Code */}
                    <div className="flex flex-col">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Postal Code</label>
                        <input
                            type="text"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                        />
                    </div>

                    {/* ---------- Notes ---------- */}
                    <div className="flex flex-col col-span-3">
                        <label className="text-[16px] text-gray-700 mb-1 font-bold">Notes</label>
                        <textarea
                            rows="3"
                            className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
                            placeholder="Enter additional details..."
                        ></textarea>
                    </div>

                </div>

                {/* SAVE BUTTON */}
                <div className="mt-5">
                    <button className="bg-[#2A75FF] text-white px-6 py-2 rounded-md text-[15px] font-medium hover:bg-blue-700">
                        Create Account
                    </button>
                </div>

            </section>
        </>
    );
};

export default CreateAccount;
