import React, { useState } from 'react'
import { AiOutlineCalendar, AiOutlineCreditCard } from 'react-icons/ai';
import { FaUniversity } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { HiUserGroup, } from 'react-icons/hi2';
import { MdOutlineAccountBalance, MdOutlineLogin, MdOutlineLogout } from 'react-icons/md';
import nodata from '../../assets/Images/nodataimage.png'
import { IoMdAlarm } from 'react-icons/io';
import BarChart from '../../Component/Chart/BarChart';
import DonutChart from '../../Component/Chart/DonutChart';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [isPunchedIn, setIsPunchedIn] = useState(
        localStorage.getItem('punchStatus') === 'IN'
    );

    const [showCalendar, setShowCalendar] = useState(false);
    const [date] = useState(new Date());

    const handlePunch = () => {
        if (isPunchedIn) {
            localStorage.setItem('punchStatus', 'OUT');
        } else {
            localStorage.setItem('punchStatus', 'IN');
        }
        setIsPunchedIn(!isPunchedIn);
    };

    /* Calendar color logic */
    const tileClassName = ({ date: tileDate, view }) => {
        if (view === 'month') {
            const today = new Date();
            const isToday =
                tileDate.getDate() === today.getDate() &&
                tileDate.getMonth() === today.getMonth() &&
                tileDate.getFullYear() === today.getFullYear();

            if (isToday) {
                return isPunchedIn ? 'punch-in' : 'punch-out';
            }
        }
        return null;
    };
    const tableData = [
        { day: "Mon", a: 4, b: 6, c: 0, d: 1, e: 4 },
        { day: "Tue", a: 3, b: 4, c: 0, d: 0, e: 3 },
        { day: "Wed", a: 4, b: 5, c: 0, d: 0, e: 3 },
        { day: "Thr", a: 0, b: 7, c: 0, d: 0, e: 0 },
        { day: "Fri", a: 1, b: 4, c: 1, d: 0, e: 3 },
    ];
    const stats = [
        {
            title: "LEADS THIS MONTH",
            value: "10",
            percent: "100%",
            subtitle: "Last Month Relative: 0",
            icon: <HiUserGroup />,
            color: "bg-[#E7F7FF] text-[#0088CC]",
            border: "bg-[#0088CC]",
        },
        {
            title: "MONTHLY REVENUE",
            value: "$135,00",
            percent: "100%",
            subtitle: "Last Month Relative: 0",
            icon: <AiOutlineCreditCard />,
            color: "bg-[#FFF6E7] text-[#FF9040]",
            border: "bg-[#FF9040]",
        },
        {
            title: "ACCOUNTS THIS MONTH",
            value: "10",
            percent: "100%",
            subtitle: "Last Month Relative: 0",
            icon: <MdOutlineAccountBalance />,
            color: "bg-[#F6EBFF] text-[#D642FF]",
            border: "bg-[#D642FF]",
        },
    ];
    return (
        <>

            <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
                <div>
                    <h2 className="text-[#083560] nunito font-bold text-[18px] sm:text-[20px]">
                        Hi Tannu, Welcome Back To RAMOT CRM!
                    </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                    {/* 🔹 CALENDAR ICON */}
                    <div className="relative">
                        <button
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="text-white bg-[#083560] p-2 rounded-md hover:scale-105 transition"
                        >
                            <AiOutlineCalendar size={18} />
                        </button>

                        {showCalendar && (
                            <div className="absolute right-0 mt-2 z-50 bg-white p-2 rounded-lg shadow-lg">
                                <Calendar value={date} tileClassName={tileClassName} />
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => navigate('/profile')}
                        className="text-white inter font-bold text-[14px]
      bg-[linear-gradient(90deg,#2A75FF_0%,#4FADFF_100%)]
      border border-[#2A75FF] rounded-[4px] px-4 py-2"
                    >
                        View Profile
                    </button>

                    <button
                        onClick={handlePunch}
                        className="flex items-center gap-2
      text-white inter font-bold text-[14px]
      bg-[linear-gradient(90deg,#AB05F2_0.96%,#9A28FE_100%)]
      border border-[#7F0CC2]
      rounded-[4px]
      px-4 py-2
      transition-all duration-300
      hover:scale-105 hover:shadow-lg"
                    >
                        {isPunchedIn ? (
                            <>
                                <MdOutlineLogout size={18} />
                                Punch Out
                            </>
                        ) : (
                            <>
                                <MdOutlineLogin size={18} />
                                Punch In
                            </>
                        )}
                    </button>

                </div>
            </div>

            <div
                className="relative overflow-hidden 
  bg-[linear-gradient(91.26deg,#00B1E3_7.78%,#19BDEB_27.61%,#77E1FF_44.14%,#19BDEB_68.53%,#00B1E3_87.12%)]
  p-5 sm:p-8 mt-3 rounded-[12px]
  flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between"
            >

                {/* Ribbon */}
                <span
                    className="absolute top-[14px] left-[-33px]
      nunito font-bold text-[11px] text-black
      bg-[linear-gradient(90deg,#FFFF18_0%,#FF9F68_100%)]
      border border-[#F4A200]
      px-10 py-[2px]
      rotate-[-45deg]"
                >
                    NEW
                </span>

                <div>
                    <h2 className="text-white nunito font-bold text-[16px] sm:text-[18px]">
                        Boost Setups to CRM Funnels Instantly!
                    </h2>
                    <p className="nunito font-semibold text-[14px] sm:text-[16px] mt-1 text-white">
                        Unlock pre-built sales pipelines that convert leads to revenue in seconds – no coding, just deploy and dominate.
                    </p>
                </div>

                <button
                    className="bg-[linear-gradient(90deg,#FFFFFF_0%,#DFF0FF_100%)]
      text-[#006BAE] inter font-semibold text-[14px] sm:text-[18px]
      px-4 py-2 rounded-[8px]
      shadow-[-5px_6px_4px_0px_#0092BB]
      w-full sm:w-auto"
                >
                    Explore More
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[6px] p-4 shadow-[2px_2px_6px_0px_#A1C1FF40] flex gap-4"
                    >
                        {/* Custom Left Indicator */}
                        <div className={`w-[4px] rounded-full ${item.border}`}></div>

                        {/* Content + Icon */}
                        <div className="flex justify-between items-start w-full">
                            {/* Left */}
                            <div>
                                <p className="text-[#4C4646] nunito font-bold text-[16px] uppercase">
                                    {item.title}
                                </p>

                                <div className="flex items-center gap-2 mt-1">
                                    <h2 className="font-bold text-[22px] inter">
                                        {item.value}
                                    </h2>
                                    <span className="text-[#5AD608] nunito text-[14px] font-medium">
                                        ▲ {item.percent}
                                    </span>
                                </div>

                                <p className="text-[#808080] nunito font-medium text-[14px] mt-1">
                                    {item.subtitle}
                                </p>
                            </div>

                            {/* Icon */}
                            <div className={`p-3 rounded-[4px] text-[20px] ${item.color}`}>
                                {item.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-white rounded-[10px] py-5  mt-6 shadow-[2px_2px_6px_0px_#A1C1FF40]">
                <div className="flex justify-between items-center mb-4 px-5">
                    <h2 className="text-[#0095B6] nunito font-bold text-[16px] uppercase ">
                        Leads By Sources
                    </h2>


                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                    {/* LEFT TABLE */}
                    <div className="lg:col-span-2 px-5">
                        <table className="w-full text-center">
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-dashed border-[#D9D9D9] *:text-[#4C4646]"
                                    >
                                        <td className="py-3 text-left  nunito font-medium text-[16px]">
                                            {row.day}
                                        </td>
                                        <td className="py-3">{row.a}</td>
                                        <td className="py-3">{row.b}</td>
                                        <td className="py-3">{row.c}</td>
                                        <td className="py-3">{row.d}</td>
                                        <td className="py-3">{row.e}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* RIGHT EMPTY STATE */}
                    <div className="rounded-bl-[25px] border border-[#EABAFF]  bg-[linear-gradient(25.99deg,#FDF4FF_2.45%,#E2F4FF_100%)]
 flex flex-col items-center justify-center p-6 dashbox">
                        <h3 className="text-[#8B2CF5] nunito font-semibold text-[14px] mb-4 uppercase">
                            Insights On Views
                        </h3>

                        <img
                            src={nodata}
                            alt="No Data"
                            className="w-[120px] mb-4"
                        />

                        <p className="text-[#7416A6] font-[600] text-[16px] nunito">
                            No Data Found
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-3">

                {/* RENEWALS DUE */}
                <div className="col-span-12 md:col-span-3 bg-white rounded-[8px] shadow-[2px_2px_6px_0px_#A1C1FF40] p-4 mt-3">
                    <h2 className='nunito font-[700] text-[16px] text-[#4C4646] mb-4'>
                        RENEWALS DUE
                    </h2>

                    <div className="bg-[#F2FBFF] rounded-[6px] p-3 shadow-sm flex gap-4">
                        {/* Left Indicator */}
                        <div className='flex items-center'>
                            <div className={`w-[3px] rounded-full border border-[#F8CB36] bg-[#F8CB36] h-7`}></div>
                        </div>

                        {/* Content + Icon */}
                        <div className="flex justify-between items-start w-full">
                            <div>
                                <p className="text-[#808080] nunito font-medium text-[12px] uppercase">
                                    Due Soon
                                </p>
                                <h2 className="font-bold text-[18px] inter">10</h2>
                            </div>

                            <div className={`p-3 rounded-[4px] text-[20px] bg-[#E6F4FF] text-[#0084FF]`}>
                                <IoMdAlarm />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F2FBFF] rounded-[6px] p-3 shadow-sm flex gap-4 mt-3">
                        {/* Left Indicator */}
                        <div className='flex items-center'>
                            <div className={`w-[3px] rounded-full border border-[#FF9C9D] bg-[#FF9C9D] h-7`}></div>
                        </div>

                        {/* Content + Icon */}
                        <div className="flex justify-between items-start w-full">
                            <div>
                                <p className="text-[#808080] nunito font-medium text-[12px] uppercase">
                                    Likely to Renew
                                </p>
                                <h2 className="font-bold text-[18px] inter">10</h2>
                            </div>

                            <div className={`p-3 rounded-[4px] text-[20px] bg-[#E6F4FF] text-[#0084FF]`}>
                                <IoMdAlarm />
                            </div>
                        </div>
                    </div>
                </div>

                {/* SUBSCRIPTIONS */}
                <div className="col-span-12 md:col-span-9 bg-white rounded-[8px] shadow-[2px_2px_6px_0px_#A1C1FF40] p-4 mt-3">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
                        <h2 className="nunito font-[700] text-[16px] text-[#4C4646]">
                            SUBSCRIPTIONS
                        </h2>
                        <select className="text-[12px] border rounded-md px-2 py-1 text-[#4C4646]">
                            <option>Last 30 Days</option>
                        </select>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-12 gap-4">

                        {/* Left Cards */}
                        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[{
                                title: "Renewals Attempted", value: 10, bar: "bg-[#90D779]"
                            }, {
                                title: "Renewals Successful", value: 10, bar: "bg-[#D27FFF]"
                            }, {
                                title: "Renewals Overdue", value: 0, bar: "bg-[#F0696B]"
                            }, {
                                title: "Revenue from Renewals", value: 10, bar: "bg-[#FF9F68]"
                            }].map((item, index) => (
                                <div key={index} className={`rounded-[6px] p-3 flex gap-3 bg-[#F2FBFF] shadow-sm`}>
                                    <div className="flex items-center">
                                        <div className={`w-[3px] h-8 rounded-full ${item.bar}`} />
                                    </div>

                                    <div className="flex justify-between w-full">
                                        <div>
                                            <p className="text-[#808080] nunito font-medium text-[12px] uppercase">{item.title}</p>
                                            <h3 className="font-bold text-[18px] inter">{item.value}</h3>
                                        </div>
                                        <div className={`p-3 rounded-[4px] text-[20px] bg-[#E6F4FF] text-[#0084FF]`}>
                                            <IoMdAlarm />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Card */}
                        <div className="col-span-12 lg:col-span-4 bg-[linear-gradient(257.18deg,#F3FBFF_4.53%,#F6E9FF_100%)]
        flex flex-col items-center justify-center text-center p-4 border border-[#EABAFF] rounded-[6px]">
                            <div className="w-10 h-10 bg-[#F0DBFF] rounded-full flex items-center justify-center mb-2">🔄</div>
                            <p className="text-[15px] nunito font-bold">Renewals Successful Rate</p>
                            <h2 className="font-extrabold text-[18px] inter mt-1">0.00%</h2>
                        </div>

                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Bar Chart */}
                <div className="bg-white rounded-[8px] shadow-[2px_2px_6px_0px_#A1C1FF40] p-4 mt-3">
                    <BarChart />
                </div>

                {/* Donut Chart */}
                <div className="bg-white rounded-[8px] shadow-[2px_2px_6px_0px_#A1C1FF40] p-4 mt-3">
                    <DonutChart />
                </div>
            </div>

        </>
    )
}

export default Dashboard



