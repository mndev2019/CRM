import React, { useState } from "react";
import { FaEnvelope, FaUserEdit } from "react-icons/fa";
import userIcon from "../../assets/Images/profile.png";
import Topnav from "../../Component/Topnav";
import { RiEdit2Fill } from "react-icons/ri";
import phone from '../../assets/Svg/phone.svg'
import { MdOutlineContentCopy } from "react-icons/md";
import edit from '../../assets/Svg/edit.svg'
import camera from '../../assets/Svg/camera.svg'
import remove from '../../assets/Svg/remove.svg'
import profile from '../../assets/Images/profile.png'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const [showeditpopup, setshoweditpopup] = useState()
    return (
        <>
            <Topnav title="My Profile" subtitle="Manage your personal profile" icon={profile} />
            <section className="px-10 py-8 bg-white rounded-bl-2xl rounded-br-2xl">
                {/* Header Section */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center  gap-6">
                        <div className="relative">
                            {/* User Avatar */}
                            <img
                                src={userIcon}
                                alt="User Avatar"
                                className="w-28 h-28 rounded-full object-cover shadow"
                            />
                            {/* Edit Icon Button */}
                            <button onClick={() => setshoweditpopup(!showeditpopup)} className="absolute bottom-[-3px] right-2 bg-white shadow-md hover:shadow-lg h-6 w-6 rounded-full flex items-center justify-center">
                                <RiEdit2Fill className="text-[#6C4FFB] text-md" />
                            </button>
                            {showeditpopup &&
                                <div className="bg-white rounded-[12px] shadow p-3 absolute space-y-1 min-w-[250px] top-[3px] left-[130px]">
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



                        <div >
                            {/* Name + Role */}
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-bold text-gray-900 nunito">Shalini Gupta</h1>
                                <span className="bg-white text-[#FFAC1B] text-xs font-semibold px-3 py-1 rounded-full border border-[#FFAC1B] inter">
                                    Super Admin
                                </span>
                                <RiEdit2Fill className="text-black cursor-pointer" />
                            </div>

                            {/* User ID + Copy Icon */}
                            <span className="text-[#363636] inter flex items-center gap-2 text-sm my-1 inter">
                                User Id: 765476768 <div className="border-3 border-gray-300 rounded-[6px] p-1"><MdOutlineContentCopy className="cursor-pointer " /></div>
                            </span>

                            {/* Email + Phone */}
                            <div className="flex items-center gap-8 mt-2 text-[#363636]">
                                <span className="flex items-center gap-2 inter">
                                    <FaEnvelope /> ishaxyz@gmail.com
                                </span>
                                <span className="flex items-center gap-2 text-[#363636] inter">
                                    <img src={phone} className="h-5" /> 8342454576
                                </span>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button onClick={() => navigate('/create-profile')} className="text-white font-semibold px-4 py-2 rounded-md cursor-pointer
                              bg-[linear-gradient(180deg,#049B1D_22.26%,#01582C_100%)]">
                            Create Profile
                        </button>
                    </div>

                </div>




                {/* User Information */}
                <div className="mt-5 flex justify-between items-center">
                    <h2 className="font-semibold text-lg">User Information</h2>
                    <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
                        <span>EDIT</span>
                        <FaUserEdit />
                    </div>
                </div>

                {/* Info Table */}
                <div className="mt-6 grid grid-cols-2 gap-y-3 gap-x-20 text-sm">
                    <p className="text-gray-500 inter text-[16px]">First Name</p>
                    <p className="text-[#363636] inter text-[16px]">Shalini</p>

                    <p className="text-gray-500 inter text-[16px]">Last Name</p>
                    <p className="text-[#363636] inter text-[16px]">Gupta</p>

                    <p className="text-gray-500 inter text-[16px]">Date Of Birth</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Email Address</p>
                    <p className="text-[#363636] inter text-[16px]">ishaxyz@gmail.com</p>

                    <p className="text-gray-500 inter text-[16px]">Sales Role</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Designation</p>
                    <p className="text-[#363636] inter text-[16px]" >-</p>

                    <p className="text-gray-500 inter text-[16px]">Manager</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Old Team</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Department</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Sales Regions</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Skills</p>
                    <p className="text-[#363636] inter text-[16px]">-</p>

                    <p className="text-gray-500 inter text-[16px]">Agent Phone Number</p>
                    <p className="text-[#363636] inter text-[16px]">8342454576</p>
                </div>

              
            </section>
        </>

    );
};

export default Profile;
