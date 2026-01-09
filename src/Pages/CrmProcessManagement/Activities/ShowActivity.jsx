import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";
import newlead from "../../../assets/Images/video-call.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegPlusSquare } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { TbFileImport, TbFileExport } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const ShowActivity = () => {
  const navigate = useNavigate();
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  // const [showcallMenu, setShowcallMenu] = useState(false);
  // const [selectedCallType, setSelectedCallType] = useState("Outbound");

  const statusClasses = {
    Answered: "bg-[#EFFFF0] text-[#049B1D]",
    Notanswered: "bg-[#FDD7D7] text-[#FF1212]",
    Rejected: "bg-[#FDD7D7] text-[#FF1212]",
    "Voice Mail": "bg-[#E6E6FA] text-[#4B0082]",
    "Call Failure": "bg-[#FDD7D7] text-[#FF1212]",
    "Not Set": "bg-[#E0E0E0] text-[#666666]",
  };

  const activitydata = [{
    AssociatedTo: "Kamal Kishore",
    Status: "Answered",
    StartTime: "Today",
    ActivityDate: "12/10/25 05:30 AM",
    CreatedBy: "Admin",
    TaskOwner: "Admin"
  }]

  return (
    <>
      <Topnav
        title="Inbound/Outbound Call Activity"
        subtitle="Track and organize all lead calls in your pipeline for better follow-up and conversion."
        icon={newlead}
      />

      <section className="p-3 sm:p-6 bg-white rounded-bl-2xl rounded-br-2xl">
        <div className="rounded-[12px] md:border border-[#EDEEF4] p-3">

          {/* ---------- FILTER ROW ---------- */}
          <div className="flex flex-wrap justify-between py-2 border-b-2 border-[#EDEEF4] gap-3">
            <div className="flex flex-wrap gap-3 items-center">
              {/* <div className="flex gap-1 items-center">
                <FaRegPlusSquare />
                <h2 className="inter font-mediun text-[18px]">Filter</h2>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="inter text-[16px]">Select All</label>
              </div> */}
            </div>

            <div className="flex flex-wrap gap-2 items-center relative">
              {/* Call Activity Button */}
              {/* <button
                onClick={() => setShowcallMenu(!showcallMenu)}
                className="relative border-[#8693FF] border hover:bg-[#7785f5] hover:text-white transition text-[#8693FF] nunito flex items-center gap-2 font-semibold text-[15px] rounded-md py-2 px-4 shadow-sm"
              >
                Call Activity

                {showcallMenu && (
                  <div className="bg-white absolute top-12 right-0 rounded shadow z-20 w-48 text-[#363636]">
                    <p
                      onClick={() => setSelectedCallType("Inbound")}
                      className="nunito font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer"
                    >
                      Inbound Call Activity
                    </p>
                    <div className="h-[1px] bg-[#363636]" />
                    <p
                      onClick={() => setSelectedCallType("Outbound")}
                      className="nunito font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer"
                    >
                      Outbound Call Activity
                    </p>
                  </div>
                )}
              </button> */}

              {/* Add Lead */}
              <button
                onClick={() => navigate("/create-lead")}
                className="bg-[#8693FF] hover:bg-[#7785f5] transition text-white nunito flex items-center gap-2 font-semibold text-[15px] rounded-md py-2 px-4 shadow-sm"
              >
                <GoPlus className="text-[18px]" />
                Add New Lead
              </button>

              {/* Dots */}
              <div className="border border-[#8693FF] rounded-md py-[3px]">
                <HiOutlineDotsVertical
                  onClick={() => setShowDotsMenu(!showDotsMenu)}
                  className="cursor-pointer text-[#8693FF] px-1 text-3xl"
                />
              </div>

              {showDotsMenu && (
                <div className="bg-white absolute top-12 right-0 rounded shadow z-20 w-48">
                  <p className="nunito flex items-center gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                    <TbFileImport size={18} /> Import Activities
                  </p>
                  <div className="h-[1px] bg-[#363636]" />
                  <p className="nunito flex items-center gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                    <TbFileExport size={22} /> Export  Call Activity
                    {/* <TbFileExport size={22} /> Export {selectedCallType} Call Activity */}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ---------- SEARCH ROW ---------- */}
          <div className="flex justify-end py-3">
            <div className="relative w-full sm:w-44">
              <FiSearch className="absolute left-2 top-1.5 text-[#898484]" size={15} />
              <input
                type="text"
                placeholder="Search here"
                className="border-b border-[#4C4646] pl-7 pb-1 text-sm w-full outline-none placeholder-[#898484] inter"
              />
            </div>
          </div>

          {/* ---------- TABLE ---------- */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="bg-[#F9EBFF] border-b border-[#EDEEF4] inter font-semibold">
                  <th className="p-3 w-10"><input type="checkbox" /></th>
                  <th className="p-3 text-left border-r border-[#363636]">Associated To</th>
                  <th className="p-3 text-left border-r border-[#363636]">Status</th>
                  <th className="p-3 text-left border-r border-[#363636]">Start Time</th>
                  <th className="p-3 text-left border-r border-[#363636]">Activity Date</th>
                  <th className="p-3 text-left border-r border-[#363636]">Created By</th>
                  <th className="p-3 text-left border-r border-[#363636]">Task Owner</th>
                  <th className="p-3 text-left border-r border-[#363636]">Action</th>
                </tr>
              </thead>

              <tbody>
                {activitydata.map((item, i) => (
                  <tr key={i} className="border-b border-[#EDEEF4] hover:bg-[#EDEEF4]">
                    <td className="p-3"><input type="checkbox" /></td>
                    <td className="p-3">{item.AssociatedTo}</td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded text-[14px] font-semibold ${statusClasses[item.Status]}`}>
                        {item.Status}
                      </span>
                    </td>
                    <td className="p-3">{item.StartTime}</td>
                    <td className="p-3">{item.ActivityDate}</td>
                    <td className="p-3">{item.CreatedBy}</td>
                    <td className="p-3">{item.TaskOwner}</td>
                    <td className="p-3 flex gap-3">
                      <AiFillEdit className="text-blue-600 cursor-pointer" size={20} />
                      <AiFillDelete className="text-red-600 cursor-pointer" size={20} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* ================= MOBILE CARD VIEW ================= */}
          <div className="md:hidden space-y-4">
            {activitydata.map((item, i) => (
              <div key={i} className="border border-[#EDEEF4] rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-[16px]">{item.AssociatedTo}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${statusClasses[item.Status]}`}>
                    {item.Status}
                  </span>
                </div>

                <div className="text-sm text-gray-600 space-y-1">
                  <p><b>Start Time:</b> {item.StartTime}</p>
                
                  <p className="break-all"><b>ActivityDate:</b> {item.ActivityDate}</p>
                  <p><b>CreatedBy:</b> {item.CreatedBy}</p>
                  <p><b>TaskOwner:</b> {item.TaskOwner}</p>
                </div>

                <div className="flex justify-end gap-4 mt-3">
                  <AiFillEdit className="text-blue-600 text-xl cursor-pointer" />
                  <AiFillDelete className="text-red-600 text-xl cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowActivity;
