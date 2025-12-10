import React, { useState } from "react";
import { BiPieChartAlt2, BiSearchAlt } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegEnvelope, FaShoppingCart } from "react-icons/fa";
import { FiSearch, FiSettings } from "react-icons/fi";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { IoCubeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

import shortlogo from "../assets/Images/shortlogo.png";
import shortprofile from "../assets/Svg/shortprofile.svg";
import ProfileSidebar from "../Component/ProfileSidebar";

// ------------------------------------------------------------
// FINAL MENU STRUCTURE (AS YOU WANT)
// ------------------------------------------------------------
const menu = [
  {
    title: "Profile",
    children: [
      {
        heading: "Personal Settings",
        items: [
          { name: "My Profile", path: "/profile" },
          { name: "My Password", path: "/password" },
          { name: "My Email Signature", path: "/email-signature" },
          { name: "My Report Subscriptions", path: "/my-report" },
          { name: "My Leaves", path: "/my-leaves" },
        ],
      },
      {
        heading: "Organization Settings",
        items: [
          { name: "Company Profile", path: "/company-profile" },
          { name: "Request History", path: "/request-hiostry" },
          // { name: "Advanced Configuration", path: "/advanced-configuration" },
        ],
      },
      {
        heading: "Billing and Usage",
        items: [
          { name: "Billing and Usage", path: "/billing-usage" },
        ],
      },
    ],
  },

  {
    title: "CRM Process Management",
    children: [
      {
        heading: "Advanced Data View",
        items: [
          { name: " Leads", path: "/view-new-lead" },
          // { name: "Pending Leads", path: "/pending-lead" },
          // { name: "Engaged Leads", path: "/engaged-lead" },
          { name: "Accounts", path: "/coustomer" },
        ],
      },
      {
        heading: "Client Leads",
        items: [
          { name: "Client Leads", path: "/lead-detail" },

        ],
      },
      {
        heading: "My To‑Dos",
        items: [
          { name: "Tasks", path: "/task" },

        ],
      },
      {
        heading: "Action Board",
        items: [
          { name: "Lists", path: "/view-list" },

        ],
      },
      {
        heading: "Activities",
        items: [
          { name: "Call Activity", path: "/show-activity" },
          { name: "Sales Activity", path: "/show-sales-activity" },
          { name: "Document Generation", path: "/document-generation" },
        ],
      },
    ],
  },

];

const Sidebar = () => {
  const { pathname } = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);
  const [openMain, setOpenMain] = useState("Profile");
  const [openSub, setOpenSub] = useState("");

  const toggleMain = (title) => {
    setOpenMain(openMain === title ? "" : title);
  };

  const toggleSub = (heading) => {
    setOpenSub(openSub === heading ? "" : heading);
  };

  const iconMenu = [
    { icon: shortlogo, path: "/dashboard" },
    { icon: <IoCubeOutline />, path: "/module" },
    { icon: <BiPieChartAlt2 />, path: "/analytics" },
    { icon: <CgNotes />, path: "/tasks" },
    { icon: <FaShoppingCart />, path: "/orders" },
    { icon: <BiSearchAlt />, path: "/search" },
    { icon: <CiCalendarDate />, path: "/calendar" },
    { icon: <FaRegEnvelope />, path: "/messages" },
    { icon: <IoMdNotificationsOutline />, path: "/notifications" },
    { icon: <FiSettings />, path: "/settings" },
    { icon: shortprofile, onClick: () => setProfileOpen(true) },
  ];

  return (
    <>
      <ProfileSidebar
        isOpen={profileOpen}
        onclose={() => setProfileOpen(false)}
      />

      <div className="flex h-screen select-none">

        {/* LEFT ICON BAR */}
        <div className="w-[60px] bg-[#0D1424] text-white flex flex-col items-center py-4 gap-5">
          {iconMenu.map((item, index) => {
            if (item.icon === shortprofile) {
              return (
                <div
                  key={index}
                  onClick={() => setProfileOpen(true)}
                  className="text-xl p-2 rounded-md cursor-pointer flex items-center justify-center hover:bg-[#1A2539]"
                >
                  <img src={shortprofile} alt="profile" className="h-10 w-10" />
                </div>
              );
            }

            return (
              <Link
                key={index}
                to={item.path}
                className={`text-xl p-2 rounded-md flex items-center justify-center ${pathname === item.path ? "bg-white text-black" : "hover:bg-[#1A2539]"
                  }`}
              >
                {typeof item.icon === "string" ? (
                  <img src={item.icon} alt="logo" className="h-10 w-10" />
                ) : (
                  item.icon
                )}
              </Link>
            );
          })}
        </div>

        {/* MAIN SIDEBAR */}
        <aside className="w-64 bg-[#3D4458] text-white h-screen p-6">

          <h2 className="text-xl font-semibold mb-6">Setup</h2>

          {/* Search */}
          <div className="relative w-full mb-6">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border border-gray-300 text-sm px-10 py-2 rounded-md w-full placeholder-gray-300 outline-none"
            />
          </div>

          {/* MENU */}
          {menu.map((main, index) => (
            <div key={index} className="mb-5">
              {/* MAIN TITLE */}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleMain(main.title)}
              >
                <span className="h-5 w-5 border border-white rounded flex items-center justify-center">
                  <IoIosArrowDown
                    className={`${openMain === main.title ? "rotate-180" : ""} transition-all`}
                  />
                </span>
                <span className="text-sm font-semibold">{main.title}</span>
              </div>

              {/* MAIN CONTENT */}
              {openMain === main.title && (
                <div className="mt-2 ml-6 space-y-3">
                  {main.children.map((sub, i) => (
                    <div key={i}>
                      {/* SUB TITLE */}
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => toggleSub(sub.heading)}
                      >
                        <IoIosArrowDown
                          className={`${openSub === sub.heading ? "rotate-180" : ""} transition-all`}
                        />
                        <span className="text-sm">{sub.heading}</span>
                      </div>

                      {/* SUB ITEMS */}
                      {openSub === sub.heading && (
                        <ul className="ml-6 mt-1 space-y-1">
                          {sub.items.map((item, j) => (
                            <Link key={j} to={item.path}>
                              <li
                                className={`text-sm px-3 py-1 rounded-md ${pathname === item.path
                                  ? "bg-[#6167A0]"
                                  : "text-gray-300 hover:bg-[#515774]"
                                  }`}
                              >
                                {item.name}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
