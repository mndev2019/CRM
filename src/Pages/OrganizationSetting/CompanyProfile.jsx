import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import Topnav from "../../Component/Topnav";
import userIcon from "../../assets/Images/logo.png";
import edit from '../../assets/Svg/edit.svg';
import camera from '../../assets/Svg/camera.svg';
import remove from '../../assets/Svg/remove.svg';
import newlead from '../../assets/Images/profile.png';

const CompanyProfile = () => {
    const [showeditpopup, setShowEditPopup] = useState(false);

    return (
        <>
            <Topnav title="Company Profile" subtitle="Manage your personal profile" icon={newlead} />

            <section className="px-5 sm:px-10 py-8 bg-white rounded-bl-2xl rounded-br-2xl">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    {/* User Avatar */}
                    <div className="relative inline-block border border-[#EDEEF4] rounded p-4 sm:p-5">
                        <img
                            src={userIcon}
                            alt="User Avatar"
                            className="h-24 w-24 sm:w-60 md:object-cover object-contain rounded"
                        />

                        {/* Edit Icon Button */}
                        <button
                            onClick={() => setShowEditPopup(!showeditpopup)}
                            className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-white shadow-md hover:shadow-lg h-8 w-8 rounded-full flex items-center justify-center"
                        >
                            <RiEdit2Fill className="text-[#6C4FFB] text-lg" />
                        </button>

                        {/* Edit Popup */}
                        {showeditpopup && (
                            <div className="bg-white rounded-xl shadow p-3 absolute top-0 left-full ml-2 space-y-2 min-w-[200px] sm:min-w-[250px] z-10">
                                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded">
                                    <img src={edit} className="h-5" />
                                    <p className="text-[#363636] text-[14px] font-medium">Change profile picture</p>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded">
                                    <img src={camera} className="h-5" />
                                    <p className="text-[#363636] text-[14px] font-medium">Take profile picture</p>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1 rounded">
                                    <img src={remove} className="h-5" />
                                    <p className="text-[#363636] text-[14px] font-medium">Remove profile picture</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Company Name + Info */}
                    <div className="flex-1">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Custom Logo</h1>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Upload your company’s logo for personalization
                        </p>
                    </div>
                </div>

                {/* Company Information Header */}
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h2 className="font-semibold text-lg">Company Information</h2>
                    <div className="flex items-center gap-2 text-gray-600 cursor-pointer mt-2 sm:mt-0">
                        <span>Edit</span>
                        <FaUserEdit />
                    </div>
                </div>

                {/* Info Table */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-md">
                    <p className="text-gray-500">Company Name</p>
                    <p className="text-[#363636]">Ramote IT Services</p>

                    <p className="text-gray-500">Date Format</p>
                    <p className="text-[#363636]">mm/dd/yy</p>

                    <p className="text-gray-500">Phone No. Format</p>
                    <p className="text-[#363636]">+CountryCode-1234567890</p>

                    <p className="text-gray-500">Default Country Code</p>
                    <p className="text-[#363636]">ishaxyz@gmail.com</p>

                    <p className="text-gray-500">Default Currency</p>
                    <p className="text-[#363636]">Symbol: $ | Abbreviation: USD | Name: US Dollars | Format: </p>

                    <p className="text-gray-500">Time Zone</p>
                    <p className="text-[#363636]">(GMT-05:00) Eastern Time (US and Canada)</p>

                    <p className="text-gray-500">Website</p>
                    <p className="text-[#363636]">ramotit.www.com</p>

                    <p className="text-gray-500">Street1</p>
                    <p className="text-[#363636]">-</p>

                    <p className="text-gray-500">Street2</p>
                    <p className="text-[#363636]">-</p>

                    <p className="text-gray-500">City</p>
                    <p className="text-[#363636]">-</p>

                    <p className="text-gray-500">State</p>
                    <p className="text-[#363636]">-</p>

                    <p className="text-gray-500">Country</p>
                    <p className="text-[#363636]">-</p>

                    <p className="text-gray-500">Zip</p>
                    <p className="text-[#363636]">-</p>

                    <p className="text-gray-500">Fax</p>
                    <p className="text-[#363636]">-</p>

                    <p className="text-gray-500">Phone</p>
                    <p className="text-[#363636]">-</p>

                    <p className="text-gray-500">Allowed User Email Domains</p>
                    <p className="text-[#363636]">ramotit services.ramot.com</p>
                </div>
            </section>
        </>
    );
};

export default CompanyProfile;
