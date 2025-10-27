// import React, { useState } from 'react'
// import { IoIosArrowBack } from 'react-icons/io'
// import logo from '../assets/Images/newlogocolored.png'
// import { FaUsers } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';
// import { AiOutlineLogout } from 'react-icons/ai';


// const Sidebar = () => {
//     const [open, setopen] = useState(true);
//     // const location = useLocation();
//     // const navigate = useNavigate();
//     // const handleLogout = () => {
//     //     localStorage.clear();
//     //     navigate('/login');
//     // }
//     const menus = [
//         {
//             title: "Dashboard",
//             image: <FaUsers />,
//             path: "/"
//         },


//     ]
//     return (
//         <>
//             <div className='flex h-screen'>
//                 <div className={`${open ? "w-full" : "w-20"} duration-300 p-5 pt-8  bg-[#001B48] relative`}>
//                     <div
//                         className={`h-[35px] w-[35px] bg-white rounded-full text-[20px] flex justify-center items-center border-2 border-[#001B48] absolute cursor-pointer top-[8px] right-[1px] ${!open ? "rotate-180" : ""
//                             }`}
//                         onClick={() => setopen(!open)}
//                     >
//                         <IoIosArrowBack />
//                     </div>
//                     <div className='flex gap-x-4 items-center'>
//                         <img src={logo} className={`cursor-pointer duration-500 h-[40px]  ${open && "rotate-[360deg] "}`} />
//                         {/* <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>
//                             Furr Delight
//                         </h1> */}

//                     </div>
//                     <ul className='pt-6'>

//                         {
//                             menus.map((menu, index) => (
//                                 <>
//                                     <Link to={menu.path}>
//                                         <li
//                                             key={index}
//                                             className={`text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 rounded-md 
//                                         ${menu.gap ? "mt-9" : "mt-2"} 
//                                         ${location.pathname === menu.path ? "bg-[#DEF0FF] text-[#02457A]" : "hover:bg-[#02457A]"}`}

//                                         >
//                                             <span className={`${location.pathname === menu.path ? "bg-[#DEF0FF] text-[#02457A]" : ""}`}>
//                                                 {menu.image}
//                                             </span>
//                                             <span className={`${!open && "hidden"} origin-left duration-200 ${location.pathname === menu.path ? "bg-[#DEF0FF] text-[#02457A]" : ""}`}>{menu.title}</span>
//                                         </li>
//                                     </Link>
//                                 </>
//                             ))
//                         }

//                     </ul>
//                     <div
//                         // onClick={handleLogout}
//                         className="text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2  rounded-md hover:bg-[#02457A] hover:text-white"
//                     >
//                         <span className="text-lg"><AiOutlineLogout /></span>
//                         <span className={`${!open && "hidden"} origin-left duration-200`}>Logout</span>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Sidebar
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/newlogocolored.png";
import { AiOutlineLogout } from "react-icons/ai";

// ✅ Sections array with Dashboard path added
const sections = [
  {
    title: "Dashboard",
    icon: "🧭",
    path: "/", // 👈 path for direct navigation
  },
  {
    title: "Sales",
    icon: "🤝",
    subMenu: [
      { title: "Leads", path: "/view-lead" },
      { title: "Contact", path: "/view-contact" },
      { title: "Account", path: "/view-account" },
      { title: "Deals", path: "/view-deal" },
      { title: "Sales Analytics", path: "/sales-analytics" }
    ],
  },
  {
    title: "Activities",
    icon: "📋",
    subMenu: [
      { title: "Tasks", path: "/view-task" },
      { title: "Meetings", path: "/view-meeting" },
      { title: "Calls", path: "/view-call" },
    ],
  },
  {
    title: "Marketing",
    icon: "📢",
    subMenu: [
      { title: "Campaigns", path: "/view-campaigns" },
      { title: "Landing Page", path: "/view-landing" },
      { title: "Market Analytics", path: "/market-analytics" },

    ],
  },
  {
    title: "Support",
    icon: "💬",
    subMenu: [
      { title: "Ticket", path: "/view-ticket" },
      { title: "Knowledge Base", path: "/view-knowledge" },
      { title: "Support Analytics", path: "/support-analytics" },
      { title: "Solution", path: "/view-solution" },
      { title: "Cases", path: "/view-case" },

    ],
  },
  {
    title: "Automation",
    icon: "⚙️",
    subMenu: [
      { title: "Automation Module", path: "/automation" },
    ],
  },
  {
    title: "Field Sales",
    icon: "💼",
    subMenu: [
      { title: "Field Sales Module", path: "/field-sales" },
    ],
  },
  {
    title: "Work Flow",
    icon: "🔁",
    subMenu: [
      { title: "Work Flow Module", path: "/work-flow" },
    ],
  },
];
// const sections = [
//   { title: "Dashboard", icon: "🧭", path: "/dashboard" },
//   {
//     title: "Sales", icon: "🤝", subMenu: [
//       { title: "Leads", path: "/sales/leads" },
//       { title: "Contacts", path: "/sales/contacts" },
//       { title: "Sales Analytics", path: "/sales/analytics/dashboard" },
//     ],
//   },
//   {
//     title: "Marketing", icon: "📈", subMenu: [
//       { title: "Campaigns", path: "/marketing/campaigns" },
//       { title: "Email Marketing", path: "/marketing/email" },
//       { title: "Landing Pages", path: "/marketing/landing-pages" },
//     ],
//   },
//   {
//     title: "Automation", icon: "⚙️", subMenu: [
//       { title: "Workflow Builder", path: "/automation/workflow-builder" },
//       { title: "Triggers", path: "/automation/triggers" },
//       { title: "Actions", path: "/automation/actions" },
//     ],
//   },
//   {
//     title: "Support", icon: "💬", subMenu: [
//       { title: "Tickets", path: "/support/tickets" },
//       { title: "Create Ticket", path: "/support/tickets/add" },
//       { title: "Integrations", path: "/support/integrations" },
//     ],
//   },
//   {
//     title: "Field Sales", icon: "🚗", subMenu: [
//       { title: "Nearby Leads", path: "/field-sales/nearby" },
//       { title: "Check-in / Check-out", path: "/field-sales/checkin" },
//       { title: "Quick Add Lead", path: "/field-sales/add-lead" },
//     ],
//   },
//   {
//     title: "Integrations", icon: "🔗", subMenu: [
//       { title: "Email Marketing", path: "/integrations/email" },
//       { title: "Voice / Messages", path: "/integrations/voice" },
//     ],
//   },
// ];


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  const toggleSubMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`${open ? "w-64" : "w-20"} duration-300 p-5 pt-8 bg-[#001B48] relative overflow-y-auto`}
      >
        {/* Toggle Button */}
        <div
          className={`h-[35px] w-[35px] bg-white rounded-full text-[20px] flex justify-center items-center border-2 border-[#001B48] absolute cursor-pointer top-[8px] right-[1px] ${!open ? "rotate-180" : ""
            }`}
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowBack />
        </div>

        {/* Logo */}
        <div className="flex gap-x-4 items-center mb-6">
          <img
            src={logo}
            alt="Logo"
            className={`cursor-pointer duration-500 h-[40px] ${open && "rotate-[360deg]"}`}
          />
        </div>

        {/* Menu List */}
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={index}>
              {section.subMenu ? (
                <>
                  {/* Section with submenu */}
                  <div
                    onClick={() => toggleSubMenu(index)}
                    className={`flex items-center justify-between cursor-pointer text-gray-300 p-2 rounded-md hover:bg-[#02457A] ${activeMenu === index ? "bg-[#02457A]" : ""
                      }`}
                  >
                    <div className="flex items-center gap-x-3">
                      <span>{section.icon}</span>
                      {open && <span className="text-sm font-medium">{section.title}</span>}
                    </div>
                    {open && (
                      <IoIosArrowDown
                        className={`transition-transform duration-300 ${activeMenu === index ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </div>

                  {/* Submenu */}
                  {activeMenu === index && open && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {section.subMenu.map((sub, subIndex) => (
                        <Link key={subIndex} to={sub.path}>
                          <li
                            className={`text-gray-300 text-sm p-2 rounded-md cursor-pointer hover:bg-[#035397] ${location.pathname === sub.path ? "bg-[#035397] text-[#02457A]" : ""
                              }`}
                          >
                            {sub.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                /* ✅ Direct link (like Dashboard) */
                <Link to={section.path}>
                  <div
                    className={`flex items-center gap-x-3 text-gray-300 p-2 rounded-md cursor-pointer hover:bg-[#02457A] ${location.pathname === section.path ? "bg-[#035397] text-[#02457A]" : ""
                      }`}
                  >
                    <span>{section.icon}</span>
                    {open && <span className="text-sm font-medium">{section.title}</span>}
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="mt-6 text-gray-300 flex items-center gap-x-3 cursor-pointer p-2 rounded-md hover:bg-[#02457A]">
          <AiOutlineLogout />
          {open && <span>Logout</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
