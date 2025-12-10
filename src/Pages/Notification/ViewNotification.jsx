import React, { useState, useRef, useEffect } from "react";
import Topnav from "../../Component/Topnav";
import { LuCheckCheck } from "react-icons/lu";
import { MdOutlineFilterAlt } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import redcircle from "../../assets/Images/redcircle.png";
import notification from "../../assets/Images/notification.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { GrPin } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";
import { IoVolumeMuteOutline } from "react-icons/io5";

const ViewNotification = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [openMenu, setOpenMenu] = useState(null); // which 3-dot menu is open

    const filterRef = useRef();
    const menuRef = useRef();

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) {
                setShowFilter(false);
            }
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const not = [
        { shorttitle: "LL", title: "Low Lead Activity", description: "Leads with no activity for 7 days: 5 leads need attention.", bgColor: "#9CFFD7" },
        { shorttitle: "PR", title: "Payment Reminder Sent", description: "Payment reminder sent to customer MetroBuild Pvt Ltd", bgColor: "#FF9C9D" },
        { shorttitle: "LO", title: "Like on Your Post", description: "Billionaire Bouka liked your post ‘Need a logo’.", bgColor: "#9CD2FF" },
        { shorttitle: "AT", title: "Automation Triggered", description: "Workflow ‘Lead Nurture – Stage 1’ triggered for lead ‘Neha Rao’.", bgColor: "#FFCA9C" },
        { shorttitle: "MS", title: "Meeting Scheduled", description: "A meeting with ‘EcoPower Ltd’ is scheduled for tomorrow at 11 AM.", bgColor: "#E0FF9C" },
        { shorttitle: "TC", title: "Task Completed", description: "Task ‘Send proposal to SunEdge Corp’ was marked completed.", bgColor: "#9CE6FF" },
    ];

    return (
        <>
            <Topnav
                title="Notification"
                subtitle="All your notifications are displayed here."
                icon={notification}
            />

            <section className="py-6 px-10 bg-white rounded-bl-2xl rounded-br-2xl">

                {/* FILTER + MARK ALL READ */}
                <div className="flex justify-between relative">

                    {/* FILTER BUTTON */}
                    <div className="flex items-center gap-2 relative cursor-pointer"
                        ref={filterRef}
                        onClick={() => setShowFilter(!showFilter)}
                    >
                        <MdOutlineFilterAlt className="text-2xl" />
                        <p className="nunito font-semibold text-[18px]">Filter</p>

                        {showFilter && (
                            <div className="absolute top-10 left-0 bg-white p-4 min-w-[200px] shadow-lg rounded-[6px] space-y-2 z-50">
                                <p className="nunito font-semibold text-[15px]">All</p>
                                <p className="nunito font-semibold text-[15px]">Unread</p>
                                <p className="nunito font-semibold text-[15px]">Read</p>
                                <p className="nunito font-semibold text-[15px]">Hide</p>
                                <p className="nunito font-semibold text-[15px]">Muted</p>
                            </div>
                        )}
                    </div>

                    {/* MARK ALL AS READ */}
                    <button className="rounded-[6px] border-[2px] border-black flex gap-2 p-2 nunito font-semibold text-[18px] items-center">
                        <LuCheckCheck /> Mark All As Read
                    </button>
                </div>

                {/* NOTIFICATIONS LIST */}
                {not.map((itm, index) => (
                    <div key={index} className="flex justify-between py-5 border-b-2 border-[#EDEEF4] items-center relative">

                        <div className="flex items-center gap-3">
                            <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center relative"
                                style={{ backgroundColor: itm.bgColor }}
                            >
                                <img src={redcircle} className="absolute bottom-[3px] right-[7px]" />
                                <p className="text-black inter text-[20px] font-extrabold">
                                    {itm.shorttitle}
                                </p>
                            </div>

                            <div>
                                <p className="inter font-bold text-[14px]">
                                    {itm.title} - <span className="font-normal">{itm.description}</span>
                                </p>
                                <p className="text-[14px] text-gray-500">4 hours ago</p>
                            </div>
                        </div>

                        {/* 3 DOT MENU */}
                        <div
                            className="cursor-pointer"
                            onClick={() => setOpenMenu(openMenu === index ? null : index)}
                        >
                            <HiOutlineDotsVertical className="text-gray-500" />
                        </div>

                        {/* MENU POPUP */}
                        {openMenu === index && (
                            <div
                                ref={menuRef}
                                className="absolute right-5 top-14 bg-white p-3 shadow-lg rounded-lg w-[180px] z-50 space-y-3"
                            >
                                <p className="cursor-pointer text-[15px] flex items-center gap-2">
                                    <GrPin /> Pin to top
                                </p>

                                <p className="cursor-pointer text-[15px] flex items-center gap-2">
                                    <IoMdCheckmark /> Mark as read
                                </p>

                                <p className="cursor-pointer text-[15px] flex items-center gap-2">
                                    <IoVolumeMuteOutline /> Mute
                                </p>

                                <p className="cursor-pointer text-[15px] flex items-center gap-2">
                                    <FaRegEyeSlash /> Hide
                                </p>
                            </div>

                        )}

                    </div>
                ))}

            </section>
        </>
    );
};

export default ViewNotification;
