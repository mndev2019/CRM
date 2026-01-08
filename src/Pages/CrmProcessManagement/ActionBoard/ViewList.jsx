import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";
import newlead from "../../../assets/Images/list.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegPlusSquare } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { LuFileInput } from "react-icons/lu";

import CreateListPopup from "../ClientLeads/CreateListPopup";
import CreateEmptyListPopup from "../ClientLeads/CreateEmptyListPopup";

/* ------------------------ CREATED BY DROPDOWN ------------------------ */
const CreatedByDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const users = [
    { name: "Admin", email: "Admin@Ramot.com" },
    { name: "System", email: "System@Ramot.com" },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-[170px] sm:w-full">
      {/* SELECT BOX */}
      <div
        onClick={() => setOpen(!open)}
        className="bg-white border border-[#EDEEF4] px-4 py-2 rounded-[6px] text-sm text-gray-700 cursor-pointer flex justify-between items-center"
      >
        <span>{value || "Created By"}</span>
        <span className={`transition ${open ? "rotate-180" : ""}`}>▼</span>
      </div>

      {open && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-md rounded-[6px] z-50 p-3">
          {/* SEARCH BOX */}
          <div className="flex items-center border rounded-md px-2 mb-2">
            <input
              type="text"
              placeholder="Search here"
              className="w-full py-1 text-sm outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="cursor-pointer text-gray-600" onClick={() => setSearch("")}>
              ✕
            </span>
          </div>

          {/* OPTIONS */}
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                onClick={() => {
                  onChange(user.name);
                  setOpen(false);
                }}
                className="cursor-pointer hover:bg-gray-100 p-2 rounded"
              >
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-gray-500">({user.email})</p>
              </div>
            ))}

            {filteredUsers.length === 0 && (
              <p className="text-center text-sm text-gray-400 py-2">No results</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

/* ------------------------------ MAIN PAGE ------------------------------ */
const ViewList = () => {
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const [showEmptyPopup, setShowEmptyPopup] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false);

  /* FILTER STATES */
  const [listType, setListType] = useState("All");
  const [createdBy, setCreatedBy] = useState("");
  const [searchText, setSearchText] = useState("");

  /* TABLE DATA */
  const tableData = [
    {
      listName: "Lead Group A",
      memberCount: 21,
      listType: "Static",
      modifiedBy: "Admin",
      modifiedOn: "2024-11-10",
      createdBy: "System",
      createdOn: "2024-10-28",
    },
    {
      listName: "New Users Batch",
      memberCount: 54,
      listType: "Dynamic",
      modifiedBy: "Admin",
      modifiedOn: "2024-11-15",
      createdBy: "Admin",
      createdOn: "2024-10-15",
    },
  ];

  /* APPLY FILTERS */
  const filteredData = tableData.filter((item) => {
    return (
      (listType === "All" || item.listType === listType) &&
      (!createdBy || item.createdBy === createdBy) &&
      item.listName.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <>
      <Topnav
        title="Manage Lists"
        subtitle="Review, prioritize, and complete lead tasks directly from your pipeline view."
        icon={newlead}
      />

      <section className="p-3 sm:p-6 bg-white rounded-bl-2xl rounded-br-2xl">
        <div className="rounded-[12px] border border-[#EDEEF4] p-3">

          {/* FILTER ROW */}
          <div className="flex flex-wrap justify-between py-2 border-b-2 border-[#EDEEF4] gap-3">
            <div className="flex flex-wrap gap-3 items-center">
              {/* <div className="flex gap-1 items-center">
                <FaRegPlusSquare />
                <h2 className="inter font-medium text-[18px]">Filter</h2>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="inter text-[16px]">Select All</label>
              </div> */}
            </div>

            {/* CREATE LIST BUTTON */}
            <div className="flex flex-wrap gap-1 items-center relative">
              <button
                onClick={() => {
                  setShowCreateMenu(!showCreateMenu);
                  setShowDotsMenu(false);
                }}
                className="bg-[#8693FF] hover:bg-[#7785f5] transition text-white nunito flex items-center gap-2 font-semibold text-[15px] rounded-md py-2 px-4 shadow-sm"
              >
                <GoPlus className="text-[18px]" />
                Create List
              </button>

              <HiOutlineDotsVertical
                onClick={() => {
                  setShowDotsMenu(!showDotsMenu);
                  setShowCreateMenu(false);
                }}
                className="cursor-pointer text-[#8693FF] border border-[#8693FF] rounded-[4px] p-1 text-3xl"
              />

              {/* CREATE MENU */}
              {showCreateMenu && (
                <div className="bg-white absolute top-12 left-0 rounded-[4px] shadow z-20 w-40">
                  <p
                    onClick={() => {
                      setShowEmptyPopup(true);
                      setShowCreateMenu(false);
                    }}
                    className="nunito font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-5 cursor-pointer"
                  >
                    Add Empty List
                  </p>

                  <p
                    onClick={() => {
                      setShowCreatePopup(true);
                      setShowCreateMenu(false);
                    }}
                    className="nunito font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-5 cursor-pointer"
                  >
                    Add List
                  </p>
                </div>
              )}

              {/* 3 DOTS MENU */}
              {showDotsMenu && (
                <div className="bg-white absolute top-12 right-0 rounded-[4px] shadow z-20 w-44">
                  <p className="nunito flex items-center gap-2 font-semibold text-[14px] hover:bg-[#EDEEF4] py-2 px-4 cursor-pointer">
                    <LuFileInput size={18} /> Import Leads
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="flex flex-wrap justify-between py-3 gap-3">
            <div className="flex flex-wrap gap-3 items-center w-full sm:w-auto">

              {/* LIST TYPE FILTER */}
              <select
                className="bg-white border border-[#EDEEF4] px-4 py-2 rounded-[6px] text-sm text-gray-700 cursor-pointer outline-none"
                value={listType}
                onChange={(e) => setListType(e.target.value)}
              >
                <option value="All">List Type</option>
                <option value="Static">Static</option>
                <option value="Dynamic">Dynamic</option>
              </select>

              <button
                onClick={() => setListType("All")}
                className="text-gray-700 text-[16px] font-light"
              >
                ✕
              </button>

              {/* CREATED BY FILTER */}
              <CreatedByDropdown value={createdBy} onChange={setCreatedBy} />
              <button
                onClick={() => setCreatedBy("")}
                className="text-gray-700 text-[16px] font-light"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 w-full sm:w-auto">
              {/* SEARCH */}
              <div className="relative w-full sm:w-44">
                <FiSearch className="absolute left-2 top-1.5 text-[#898484]" size={15} />
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="border-b border-[#4C4646] pl-7 pb-1 text-sm w-full outline-none placeholder-[#898484] inter"
                />
              </div>

              {/* COUNT */}
              <p className="text-[#706D6D] text-[16px] flex items-center gap-1 inter font-medium">
                Total:
                <span className="border border-[#858585] px-2 rounded-[4px] text-[15px]">
                  {filteredData.length}
                </span>
              </p>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm min-w-[800px]">
              <thead>
                <tr className="bg-[#F9EBFF] border-b border-[#EDEEF4] inter font-semibold">
                  <th className="p-3 w-10"><input type="checkbox" /></th>
                  <th className="p-3 text-left border-r border-[#363636]">List Name</th>
                  <th className="p-3 text-left border-r border-[#363636]">Member Count</th>
                  <th className="p-3 text-left border-r border-[#363636]">List Type</th>
                  <th className="p-3 text-left border-r border-[#363636]">Modified By</th>
                  <th className="p-3 text-left border-r border-[#363636]">Modified On</th>
                  <th className="p-3 text-left border-r border-[#363636]">Created By</th>
                  <th className="p-3 text-left border-r border-[#363636]">Created On</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#EDEEF4] transition inter text-[16px] hover:bg-[#EDEEF4]"
                  >
                    <td className="p-3 w-10"><input type="checkbox" /></td>
                    <td className="p-3">{item.listName}</td>
                    <td className="p-3">{item.memberCount}</td>
                    <td className="p-3">{item.listType}</td>
                    <td className="p-3">{item.modifiedBy}</td>
                    <td className="p-3">{item.modifiedOn}</td>
                    <td className="p-3">{item.createdBy}</td>
                    <td className="p-3">{item.createdOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* POPUPS */}
      {showEmptyPopup && <CreateEmptyListPopup onClose={() => setShowEmptyPopup(false)} />}
      {showCreatePopup && <CreateListPopup onClose={() => setShowCreatePopup(false)} />}
    </>
  );
};

export default ViewList;
