import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";
import newlead from "../../../assets/Images/video-call.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegPlusSquare } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { TbFileImport } from "react-icons/tb";
import { TbFileExport } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const ShowActivity = () => {
  const navigate = useNavigate();
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const [showcallMenu, setShowcallMenu] = useState(false);
  const [selectedCallType, setSelectedCallType] = useState("Outbound"); // default

const statusClasses = {
   "Answered": "bg-[#EFFFF0] text-[#049B1D]", // Green (same as Completed)
  "Notanswered": "bg-[#FDD7D7] text-[#FF1212]", // Red (same as Failed)
  "Rejected": "bg-[#FDD7D7] text-[#FF1212]", // Same as Failed
  "Voice Mail": "bg-[#E6E6FA] text-[#4B0082]", // Light purple
  "Call Failure": "bg-[#FDD7D7] text-[#FF1212]", // Same as Failed
  "Not Set": "bg-[#E0E0E0] text-[#666666]" // Gray
};

  return (
    <>
      <Topnav
        title="Inbound/Outbound Call Activity"
        subtitle="Track and organize all lead calls in your pipeline for better follow-up and conversion."
        icon={newlead}
      />

      <section className="p-6 bg-white rounded-bl-2xl rounded-br-2xl">
        <div className="rounded-[12px] border border-[#EDEEF4] p-3">
          {/* ---------- Filter Row ---------- */}
          <div className="flex justify-between py-2 border-b-2 border-[#EDEEF4]">
            <div className="flex gap-3 items-center relative">
              <div className="flex gap-1 items-center">
                <FaRegPlusSquare />
                <h2 className="inter font-mediun text-[18px]">Filter</h2>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="inter text-[16px]">Select All</label>
              </div>
            </div>
            <div className="flex gap-1 items-center relative">
              {/* Call Button */}
              <button
                onClick={() => {
                  setShowcallMenu(!showcallMenu);
                  // setShowCreateMenu(false);
                }}
                className="relative border-[#8693FF] border-[1px] hover:bg-[#7785f5] hover:text-white transition text-[#8693FF] nunito flex items-center gap-2 font-semibold text-[15px] rounded-md py-2 px-4 shadow-sm"
              >
                Call Activity
                {/* ---------------- call type ---------------- */}
                {showcallMenu && (
                  <div className="bg-white absolute top-12 right-0 rounded-[4px] shadow z-20 w-48 text-[#363636]">
                    <p   onClick={() => setSelectedCallType('Inbound')} className="nunito flex items-center text-left gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                      Inbound Call Activity
                    </p>
                    <div className="w-full h-[1px] bg-[#363636]" />
                    <p onClick={() => setSelectedCallType('Outbound')} className="nunito flex items-center  text-left gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                      Outbound Call Activity
                    </p>
                  </div>
                )}
              </button>

              {/* Create Lead Button */}
              <button
                onClick={() => navigate("/create-lead")}
                className="bg-[#8693FF] hover:bg-[#7785f5] transition text-white nunito flex items-center gap-2 font-semibold text-[15px] rounded-md py-2 px-4 shadow-sm"
              >
                <GoPlus className="text-[18px]" />
                Add New Lead
              </button>

              {/* 3 Dots Button */}
              <div className="border border-[#8693FF] rounded-md py-[3px]">
                <HiOutlineDotsVertical
                  onClick={() => {
                    setShowDotsMenu(!showDotsMenu);
                    // setShowCreateMenu(false);
                  }}
                  className="cursor-pointer text-[#8693FF] px-1 text-3xl"
                />
              </div>

              {/* ---------------- 3 DOTS IMPORT / EXPORT MENU ---------------- */}
              {showDotsMenu && (
                <div className="bg-white absolute top-12 right-0 rounded-[4px] shadow z-20 w-48">
                  <p className="nunito flex items-center gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                    <TbFileImport size={18} /> Import Activities
                  </p>
                  <div className="w-full h-[1px] bg-[#363636]" />
                  <p className="nunito flex flex-nowrap items-center text-left gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                    <TbFileExport size={25} /> Export {selectedCallType} Call Activity
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end py-3">
            {/* ---------------- RIGHT SECTION ---------------- */}
            <div className="flex items-center gap-6">
              {/* Search Input */}
              <div className="relative">
                <FiSearch
                  className="absolute left-2 top-1.5 text-[#898484]"
                  size={15}
                />

                <input
                  type="text"
                  placeholder="Search here"
                  className="border-b border-[#4C4646] pl-7 pb-1 text-sm w-44 outline-none placeholder-[#898484] inter "
                />
              </div>
            </div>
          </div>

          {/* ---------- Table ---------- */}
          <div className=" overflow-hidden">
            <table className="w-full text-sm">
  <thead>
    <tr className="bg-[#F9EBFF] border-b border-[#EDEEF4] inter font-semibold">
      <th className="p-3 w-10">
        <input type="checkbox" />
      </th>

      <th className="p-3 text-left border-r border-[#363636]">
        Associated To
      </th>

      <th className="p-3 text-left border-r border-[#363636]">
        Status
      </th>

      <th className="p-3 text-left border-r border-[#363636]">
        Start Time
      </th>

      <th className="p-3 text-left border-r border-[#363636]">
        Activity Date
      </th>

      <th className="p-3 text-left border-r border-[#363636]">
        Created By
      </th>

      <th className="p-3 text-left border-r border-[#363636]">
        Task Owner
      </th>

      <th className="p-3 text-left border-r border-[#363636]">
        Action
      </th>
    </tr>
  </thead>

  <tbody>
    {[
      {
        AssociatedTo: "Kamal Kishore",
        Status: "Answered",
        StartTime: "Today",
        ActivityDate: "12/10/25 05:30 AM",
        CreatedBy: "Admin",
        TaskOwner: "Admin"
      }
    ].map((item, i) => (
      <tr
        key={i}
        className="border-b border-[#EDEEF4] transition inter text-[16px] hover:bg-[#EDEEF4]"
      >
        <td className="p-3 w-10">
          <input type="checkbox" />
        </td>

        <td className="p-3">{item.AssociatedTo}</td>

        <td className="py-4 px-3 border-b-2 border-[#EDEEF4]">
          <span
            className={`px-3 py-1 rounded-[6px] text-[14px] font-semibold nunito ${
              statusClasses[item.Status]
            }`}
          >
            {item.Status}
          </span>
        </td>

        <td className="p-3">{item.StartTime}</td>

        <td className="p-3 break-all">{item.ActivityDate}</td>

        <td className="p-3">{item.CreatedBy}</td>

        <td className="p-3">{item.TaskOwner}</td>

        <td className="p-3 flex items-center gap-3">
          <AiFillEdit
            className="text-blue-600 cursor-pointer hover:scale-110 transition"
            size={20}
          />
          <AiFillDelete
            className="text-red-600 cursor-pointer hover:scale-110 transition"
            size={20}
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>

          </div>
        </div>
      </section>
    </>
  );
};

export default ShowActivity;
