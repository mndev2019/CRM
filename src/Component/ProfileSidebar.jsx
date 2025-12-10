import React from "react";
import profile from '../assets/Images/profile.png'
import { MdOutlineContentCopy, MdPermPhoneMsg } from "react-icons/md";
import { FaRegEnvelope} from "react-icons/fa";
import check from '../assets/Svg/check.svg'
import { BsBuildings } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const ProfileSidebar = ({ isOpen, onclose }) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-90 bg-[#444A60] shadow-xl p-4 transition-transform duration-300 z-50
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >

            {/* CLOSE BUTTON */}
            <div
                className="bg-white rounded-full p-1 h-[30px] w-[30px] flex items-center justify-center absolute right-3 cursor-pointer"
                onClick={onclose}
            >
                <RxCross2 className="font-bold" />
            </div>

            <div className="flex items-center gap-3 mt-8">
                <img src={profile} className="h-20" />
                <div>
                    <h1 className="text-white nunito font-bold text-[25px]">
                        Shalini Gupta
                    </h1>
                    <span className="text-white inter flex items-center gap-2 text-sm">
                        User Id: 765476768 
                        <div className="border-2 border-gray-300 rounded-[6px] p-1">
                            <MdOutlineContentCopy className="cursor-pointer " />
                        </div>
                    </span>
                </div>
            </div>

            {/* SUBSCRIPTION CARD */}
            <div className="bg-[#F9F1E6] rounded-xl p-4 mt-6 shadow-lg">
                <div className="flex items-center gap-2 text-sm font-medium mb-4">
                    <img src={check} />
                    <span className="nunito text-[#363636]/70">
                        You’re subscribed to Enterprise Edition
                    </span>
                </div>

                <div className="flex justify-between text-[#D3B184] nunito font-semibold text-[16px] mb-3">
                    <span>Current plan</span>
                    <span>Try Other Editions</span>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#EEB700] p-3 rounded-full text-white text-lg">
                            <BsBuildings />
                        </div>
                        <div className="font-semibold">Enterprise Edition</div>
                    </div>

                    <button className="bg-yellow-500 text-white px-4 py-1 rounded-md text-sm font-medium">
                        Manage
                    </button>
                </div>
            </div>

            {/* HELP CARD */}
            <div className="bg-[#F7F7F7] rounded-xl p-4 mt-6 shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-[#D3B184] nunito">Need Helps?</h2>
                    <span className="text-blue-500 text-sm cursor-pointer underline">
                        24×7 Priority Assistance
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                        <IoChatbubblesOutline />
                        <span className="text-sm">Chat with us</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                        <HiOutlineChatBubbleLeftRight />
                        <span className="text-sm">Community</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                        <FaRegEnvelope />
                        <span className="text-sm">Write to us</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                        <MdPermPhoneMsg />
                        <span className="text-sm">Talk with us</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;
