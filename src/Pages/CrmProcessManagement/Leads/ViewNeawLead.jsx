import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";
import newlead from "../../../assets/Images/newlead.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegPlusSquare } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { CiEraser } from "react-icons/ci";
import { LuFileInput } from "react-icons/lu";
import { TbFileExport } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const ViewNeawLead = () => {
  const navigate = useNavigate();
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const [activityDate, setactivityDate] = useState("");

  const statusClasses = {
    Processing: "bg-[#E6F9E8] text-[#1F7A24]",
    Completed: "bg-[#EFFFF0] text-[#049B1D]",
    Failed: "bg-[#FDD7D7] text-[#FF1212]",
    Pending: "bg-[#FDD7D7] text-[#FF1212]",
  };

  return (
    <>
      <Topnav
        title="My Leads"
        subtitle="View and organize every lead added to your pipeline."
        icon={newlead}
      />

      <section className="p-4 sm:p-6 bg-white rounded-bl-2xl rounded-br-2xl">
        <div className="rounded-[12px] border border-[#EDEEF4] p-3">

          {/* ================= FILTER HEADER ================= */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 py-2 border-b-2 border-[#EDEEF4]">

            <div className="flex gap-2 items-center">
              {/* <FaRegPlusSquare />
              <h2 className="inter font-medium text-[18px]">Filter</h2> */}
            </div>

            <div className="flex gap-2 items-center relative flex-wrap">

              {/* Create Lead */}
              <button
                onClick={() => {
                  setShowCreateMenu(!showCreateMenu);
                  setShowDotsMenu(false);
                }}
                className="bg-[#8693FF] text-white nunito flex items-center gap-2 font-semibold text-[15px] rounded-md py-2 px-4"
              >
                <GoPlus className="text-[18px]" />
                Create Lead
              </button>

              {/* Dots */}
              <HiOutlineDotsVertical
                onClick={() => {
                  setShowDotsMenu(!showDotsMenu);
                  setShowCreateMenu(false);
                }}
                className="cursor-pointer text-[#8693FF] border border-[#8693FF] rounded-[4px] p-1 text-3xl"
              />

              {/* Create Menu */}
              {showCreateMenu && (
                <div className="absolute top-12 left-0 bg-white shadow rounded w-40 z-30">
                  <p
                    onClick={() => navigate("/create-lead")}
                    className="py-2 px-4 hover:bg-[#EDEEF4] cursor-pointer"
                  >
                    Quick add lead
                  </p>
                  <p
                    onClick={() => navigate("/create-lead")}
                    className="py-2 px-4 hover:bg-[#EDEEF4] cursor-pointer"
                  >
                    Add new lead
                  </p>
                </div>
              )}

              {/* Dots Menu */}
              {showDotsMenu && (
                <div className="absolute top-12 right-0 bg-white shadow rounded w-44 z-30">
                  <p className="flex items-center gap-2 py-2 px-4 hover:bg-[#EDEEF4] cursor-pointer">
                    <LuFileInput /> Import Leads
                  </p>
                  <p className="flex items-center gap-2 py-2 px-4 hover:bg-[#EDEEF4] cursor-pointer">
                    <TbFileExport /> Export Leads
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ================= FILTER CONTROLS ================= */}
          <div className="flex flex-col lg:flex-row justify-between gap-4 py-4">

            {/* Left */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                className="border px-4 py-2 rounded-md text-sm"
                value={activityDate}
                onChange={(e) => setactivityDate(e.target.value)}
              >
                <option>Lead Activity Date</option>
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 Days</option>
              </select>

              <button onClick={() => setactivityDate("")}>✕</button>

              <button className="flex items-center gap-1 bg-[#FDD7D8] border border-[#FFA4AD] text-[#FF1216] px-3 py-1 rounded-md">
                <CiEraser /> Clear
              </button>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <FiSearch className="absolute left-2 top-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search here"
                  className="border-b pl-7 pb-1 text-sm outline-none w-40"
                />
              </div>

              <p className="text-sm">
                Total:
                <span className="ml-1 border px-2 rounded">2</span>
              </p>
            </div>
          </div>

          {/* ================= TABLE ================= */}
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full text-sm">
              <thead>
                <tr className="bg-[#E4F3FF]">
                  <th className="p-3"><input type="checkbox" /></th>
                  <th className="p-3 text-left">Lead Name</th>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Country</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {[
                  { name: "Carissa Kidman", company: "Oh my Goodknits", phone: "555-555-5555", email: "carissa@noemail.com", country: "India", status: "Processing" },
                  { name: "Crissa Kidman", company: "Oh my Goodknits", phone: "555-555-5555", email: "carissa@noemail.com", country: "India", status: "Pending" },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-[#EDEEF4] hover:bg-[#EDEEF4]">
                    <td className="p-3"><input type="checkbox" /></td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.company}</td>
                    <td className="p-3">{item.phone}</td>
                    <td className="p-3 break-all">{item.email}</td>
                    <td className="p-3">{item.country}</td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded ${statusClasses[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 flex gap-3">
                      <AiFillEdit className="text-blue-600 cursor-pointer" />
                      <AiFillDelete className="text-red-600 cursor-pointer" />
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

export default ViewNeawLead;
