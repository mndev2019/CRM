import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaUserEdit, FaRegCopy } from "react-icons/fa";
import userIcon from "../../assets/Images/logoremovebg.png";
import Topnav from "../../Component/Topnav";
import { RiEdit2Fill } from "react-icons/ri";
import edit from '../../assets/Svg/edit.svg'
import camera from '../../assets/Svg/camera.svg'
import remove from '../../assets/Svg/remove.svg'
import newlead from '../../assets/Images/profile.png'

const CompanyProfile = () => {
    const [showeditpopup, setshoweditpopup] = useState()
    return (
        <>
            <Topnav title="Company Profile" subtitle="Manage your personal profile" icon={newlead} />
            <section className="px-10 py-8 bg-white rounded-bl-2xl rounded-br-2xl">
                {/* Header Section */}
                <div className="flex gap-6 items-center">
                    {/* User Avatar */}
                    <div className="relative inline-block border border-[#EDEEF4] rounded p-5">
                        <img
                            src={userIcon}
                            alt="User Avatar"
                            className="h-20 w-60"
                        />

                        {/* Edit Icon Button */}
                        <button onClick={() => setshoweditpopup(!showeditpopup)} className="absolute bottom-[-12px] right-2 bg-white shadow-md hover:shadow-lg h-8 w-8 rounded-full flex items-center justify-center">
                            <RiEdit2Fill className="text-[#6C4FFB] text-lg" />
                        </button>
                        {showeditpopup &&
                            <div className="bg-white rounded-[12px] shadow p-3 absolute space-y-1 min-w-[250px] top-[3px] left-[297px]">
                                <div className="flex items-center gap-2">
                                    <img src={edit} className="h-5" />
                                    <p className="inter text-[#363636] text-[14px] font-medium">
                                        Change profile picture
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={camera} className="h-5" />
                                    <p className="inter text-[#363636] text-[14px] font-medium">
                                        Take profile picture
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={remove} className="h-5" />
                                    <p className="inter text-[#363636] text-[14px] font-medium">
                                        Remove profile picture
                                    </p>
                                </div>


                            </div>

                        }
                    </div>



                    <div>
                        {/* Name + Role */}
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold text-gray-900 nunito">Custom Logo</h1>

                        </div>

                        {/* User ID + Copy Icon */}
                        <span className="text-[#363636] inter flex items-center gap-2 text-sm my-1 inter">
                            Upload your company’s logo for personalization
                        </span>


                    </div>
                </div>

                {/* Hide Details */}
                {/* <div className="flex items-center gap-1 cursor-pointer mt-6 text-gray-600 font-medium">
          <span>Hide Details</span>
          <IoMdArrowDropdown />
        </div> */}

                {/* User Information */}
                <div className="mt-5 flex justify-between items-center">
                    <h2 className="font-semibold text-lg">Company Information</h2>
                    <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
                        <span>Edit</span>
                        <FaUserEdit />
                    </div>
                </div>

                {/* Info Table */}
                <div className="mt-6 grid grid-cols-2 gap-y-3 gap-x-20 text-sm">
                    <p className="text-gray-500 inter text-[16px]">Company Name</p>
                    <p className="text-[#363636] inter text-[16px]">Ramote IT Services|</p>

                    <p className="text-gray-500 inter text-[16px]">Date Format</p>
                    <p className="text-[#363636] inter text-[16px]">mm/dd/yy</p>

                    <p className="text-gray-500 inter text-[16px]">Phone No. Format</p>
                    <p className="text-[#363636] inter text-[16px]">+CountryCode-1234567890</p>

                    <p className="text-gray-500 inter text-[16px]">Default Country Code</p>
                    <p className="text-[#363636] inter text-[16px]">ishaxyz@gmail.com</p>

                    <p className="text-gray-500 inter text-[16px]">Default Currency</p>
                    <p className="text-[#363636] inter text-[16px]">Symbol: $     Abbreviation: USD    Name: US Dollars       Format: </p>

                    <p className="text-gray-500 inter text-[16px]">Time Zone</p>
                    <p className="text-[#363636] inter text-[16px]" >(GMT-05:00) Eastern Time (Us and Canada)</p>

                    <p className="text-gray-500 inter text-[16px]">Website</p>
                    <p className="text-[#363636] inter text-[16px]">ramotit.www.com</p>

                    <p className="text-gray-500 inter text-[16px]">Street1</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Street2</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">City</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">State</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Country</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Zip</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Fax</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Phone</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Allowed User Email Domains</p>
                    <p className="text-[#363636] inter text-[16px]">ramotit services.ramot.com</p>
                </div>


            </section>
        </>

    );
};

export default CompanyProfile;
