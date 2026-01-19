
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FiLogOut, FiSearch } from "react-icons/fi";

import analytics from "../assets/Images/analytics.png";
import crm from "../assets/Images/crmprocess.png";
import contentlibrary from "../assets/Images/contentlibrary.png";
import marketing from "../assets/Images/marketing.png";
import workflow from "../assets/Images/workflow.png";
import marketplace from "../assets/Images/marketplace.png";
import calender from "../assets/Images/calender.png";
import profile from "../assets/Images/user (2).png";
import logo from "../assets/Images/logo.png";

const menu = [
  {
    icon: analytics,
    title: "CRM Analytics",
    children: [
      {
        heading: "View Analytics",
        items: [{ name: "Dashboard", path: "/dashboard" }],
      },
    ],
  },
  {
    icon: crm,
    title: "CRM Process Management",
    children: [
      {
        heading: "Advanced Data View",
        items: [
          { name: "Leads", path: "/view-new-lead" },
          { name: "Pending Leads", path: "/pending-lead" },
          { name: "Engaged Leads", path: "/engaged-lead" },
        ],
      },
      {
        heading: "Client Leads",
        items: [{ name: "Client Leads", path: "/lead-detail" }],
      },
      {
        heading: "My To-Dos",
        items: [{ name: "Tasks", path: "/task" }],
      },
      {
        heading: "Action Board",
        items: [{ name: "Lists", path: "/view-list" }],
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
  {
    icon: contentlibrary,
    title: "Content Library",
    children: [
      {
        heading: "Email Library",
        items: [
          { name: "Email Library", path: "/email-library" },
          { name: "Images & Document", path: "/images-document" },
        ],
      },
    ],
  },
  {
    icon: marketing,
    title: "Marketing",
    children: [
      {
        heading: "Email Campaign",
        items: [{ name: "Email Campaign", path: "/email-campaign" }],
      },
      {
        heading: "Website Widgets",
        items: [{ name: "Website Widgets", path: "/website-widgets" }],
      },
    ],
  },
  {
    icon: workflow,
    title: "WorkFlow",
    children: [
      {
        heading: "Automation",
        items: [{ name: "Automation", path: "/show-automation" }],
      },
    ],
  },
  {
    icon: marketplace,
    title: "Marketplace",
    children: [
      {
        heading: "Marketplace",
        items: [{ name: "Marketplace", path: "/market-place" }],
      },
    ],
  },
  {
    icon: calender,
    title: "Calender",
    children: [
      {
        heading: "Calender",
        items: [{ name: "Calender", path: "/Calendar" }],
      },
    ],
  },
  {
    icon: profile,
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
          { name: "Advanced Setup", path: "/advanced-setup" },
        ],
      },
      {
        heading: "Billing and Usage",
        items: [
          { name: "Billing Details", path: "/billing-detail" },
          { name: "Usage Report", path: "/usage-report" },
        ],
      },
      {
        heading: "Call Preferences",
        items: [{ name: "Call Preference", path: "/call-prefrence" }],
      },
    ],
  },
];

const Sidebar = ({ closeSidebar }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openMain, setOpenMain] = useState("");
  const [openSub, setOpenSub] = useState("");
  const [search, setSearch] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // 🔍 FILTER MENU
  const filteredMenu = menu
    .map((main) => {
      const matchedChildren = main.children
        .map((sub) => {
          const matchedItems = sub.items.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          );

          if (
            sub.heading.toLowerCase().includes(search.toLowerCase()) ||
            matchedItems.length
          ) {
            return { ...sub, items: matchedItems };
          }
          return null;
        })
        .filter(Boolean);

      if (
        main.title.toLowerCase().includes(search.toLowerCase()) ||
        matchedChildren.length
      ) {
        return { ...main, children: matchedChildren };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <aside className="w-[260px] h-screen overflow-y-auto bg-[linear-gradient(180deg,#FDF4FF_55.29%,#E2F4FF_100%)] p-6">
      {/* LOGO */}
      <img src={logo} className="h-[45px] mb-6" />

      {/* SEARCH */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full border rounded-md px-10 py-2 text-sm"
        />
      </div>

      {/* MENU */}
      {filteredMenu.map((main, i) => {
        const isOpenMain = openMain === main.title || search;

        return (
          <div key={i} className="mb-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() =>
                setOpenMain(openMain === main.title ? "" : main.title)
              }
            >
              <img src={main.icon} className="h-6 w-6" />
              <span className="font-semibold text-sm">{main.title}</span>
            </div>

            {isOpenMain && (
              <div className="ml-6 mt-2 space-y-4">
                {main.children.map((sub, j) => {
                  const isOpenSub = openSub === sub.heading || search;

                  return (
                    <div key={j}>
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() =>
                          setOpenSub(
                            openSub === sub.heading ? "" : sub.heading
                          )
                        }
                      >
                        <IoIosArrowDown
                          className={`transition ${isOpenSub ? "rotate-180" : ""
                            }`}
                        />
                        <span className="text-sm">{sub.heading}</span>
                      </div>

                      {isOpenSub && (
                        <ul className="ml-6 mt-1">
                          {sub.items.map((item, k) => (
                            <Link
                              key={k}
                              to={item.path}
                              onClick={() => closeSidebar?.()}
                            >
                              <li
                                className={`px-3 py-1 rounded-md text-sm ${pathname === item.path
                                    ? "bg-[#6167A0] text-white"
                                    : "hover:bg-[#515774] hover:text-white"
                                  }`}
                              >
                                {item.name}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      <div className=" pt-3 border-t">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 py-2 rounded-md text-sm font-semibold text-red-600 hover:bg-red-600 hover:text-white transition"
        >
          <FiLogOut className="text-lg" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
