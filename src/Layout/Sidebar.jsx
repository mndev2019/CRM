// import React, { useState } from "react";
// import { BiPieChartAlt2, BiSearchAlt } from "react-icons/bi";
// import { CgNotes, CgProfile } from "react-icons/cg";
// import { CiCalendarDate } from "react-icons/ci";
// import { FaRegEnvelope, FaShoppingCart } from "react-icons/fa";
// import { FiSearch, FiSettings } from "react-icons/fi";
// import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
// import { IoCubeOutline } from "react-icons/io5";
// import { Link, useLocation } from "react-router-dom";

// // import shortlogo from "../assets/Images/shortlogo.png";
// // import shortprofile from "../assets/Svg/shortprofile.svg";
// import ProfileSidebar from "../Component/ProfileSidebar";
// import marketing from '../assets/Images/marketing.png'
// import workflow from '../assets/Images/workflow.png'
// import contentlibrary from '../assets/Images/contentlibrary.png'
// import crm from '../assets/Images/crmprocess.png'
// import profile from '../assets/Images/user (2).png'
// import analytics from '../assets/Images/analytics.png'
// import logo from '../assets/Images/logo.png'
// import marketplace from '../assets/Images/marketplace.png'
// import calender from '../assets/Images/calender.png'


// const menu = [


//   {
//     icon: analytics,
//     title: "CRM Analytics",
//     children: [
//       {
//         heading: "View Analytics",
//         items: [
//           { name: "Dashboard", path: "/dashboard" },

//         ],
//       },
//     ],
//   },


//   {
//     icon: crm,
//     title: "CRM Process Management",
//     children: [
//       {
//         heading: "Advanced Data View",
//         items: [
//           { name: " Leads", path: "/view-new-lead" },
//           { name: "Pending Leads", path: "/pending-lead" },
//           { name: "Engaged Leads", path: "/engaged-lead" },
//           // { name: "Accounts", path: "/coustomer" },
//         ],
//       },
//       {
//         heading: "Client Leads",
//         items: [
//           { name: "Client Leads", path: "/lead-detail" },

//         ],
//       },
//       {
//         heading: "My To‑Dos",
//         items: [
//           { name: "Tasks", path: "/task" },

//         ],
//       },
//       {
//         heading: "Action Board",
//         items: [
//           { name: "Lists", path: "/view-list" },

//         ],
//       },
//       {
//         heading: "Activities",
//         items: [
//           { name: "Call Activity", path: "/show-activity" },
//           { name: "Sales Activity", path: "/show-sales-activity" },
//           { name: "Document Generation", path: "/document-generation" },
//         ],
//       },
//     ],
//   },
//   {
//     icon: contentlibrary,
//     title: "Content Library",
//     children: [
//       {
//         heading: "Email Library",
//         items: [
//           { name: "Email Library", path: "/email-library" },
//           { name: "Images & Document", path: "/images-document" },

//         ],
//       },
//     ],
//   },
//   {
//     icon: marketing,
//     title: "Marketing",
//     children: [
//       {
//         heading: "Email Campaign",
//         items: [
//           { name: "Email Campaign", path: "/email-campaign" },

//         ],
//       },
//       {
//         heading: "Website Widgets",
//         items: [
//           { name: "Website Widgets", path: "/website-widgets" },

//         ],
//       },
//     ],
//   },
//   {
//     icon: workflow,
//     title: "WorkFlow",
//     children: [
//       {
//         heading: "Automation",
//         items: [
//           { name: "Automation", path: "/show-automation" },

//         ],
//       },
//     ],
//   },
//   {
//     icon: marketplace,
//     title: "Marketplace",
//     children: [
//       {
//         heading: "Marketplace",
//         items: [
//           { name: "Marketplace", path: "/market-place" },

//         ],
//       },
//     ],
//   },
//   {
//     icon: calender,
//     title: "Calender",
//     children: [
//       {
//         heading: "Calender",
//         items: [
//           { name: "Calender", path: "/Calendar" },

//         ],
//       },
//     ],
//   },

//   {
//     icon: profile,
//     title: "Profile",
//     children: [
//       {
//         heading: "Personal Settings",
//         items: [
//           { name: "My Profile", path: "/profile" },
//           { name: "My Password", path: "/password" },
//           { name: "My Email Signature", path: "/email-signature" },
//           { name: "My Report Subscriptions", path: "/my-report" },
//           { name: "My Leaves", path: "/my-leaves" },
//         ],
//       },
//       {
//         heading: "Organization Settings",
//         items: [
//           { name: "Company Profile", path: "/company-profile" },
//           { name: "Request History", path: "/request-hiostry" },
//           { name: "Advanced Setup", path: "/advanced-setup" },
//         ],
//       },
//       {
//         heading: "Billing and Usage",
//         items: [
//           { name: "Billing Details", path: "/billing-detail" },
//           { name: "Usage Report", path: "/usage-report" },
//         ],
//       },
//       {
//         heading: "Call Preferences",
//         items: [
//           { name: "Call Preference", path: "/call-prefrence" },

//         ],
//       },
//     ],
//   },

// ];

// const Sidebar = () => {
//   const { pathname } = useLocation();
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [openMain, setOpenMain] = useState("Profile");
//   const [openSub, setOpenSub] = useState("");

//   const toggleMain = (title) => {
//     setOpenMain(openMain === title ? "" : title);
//   };

//   const toggleSub = (heading) => {
//     setOpenSub(openSub === heading ? "" : heading);
//   };

//   // const iconMenu = [
//   //   { icon: shortlogo, path: "/dashboard" },
//   //   { icon: <IoCubeOutline />, path: "/module" },
//   //   { icon: <BiPieChartAlt2 />, path: "/analytics" },
//   //   { icon: <CgNotes />, path: "/tasks" },
//   //   { icon: <FaShoppingCart />, path: "/orders" },
//   //   { icon: <BiSearchAlt />, path: "/search" },
//   //   { icon: <CiCalendarDate />, path: "/calendar" },
//   //   { icon: <FaRegEnvelope />, path: "/messages" },
//   //   { icon: <IoMdNotificationsOutline />, path: "/notifications" },
//   //   { icon: <FiSettings />, path: "/settings" },
//   //   { icon: shortprofile, onClick: () => setProfileOpen(true) },
//   // ];

//   return (
//     <>
//       <ProfileSidebar
//         isOpen={profileOpen}
//         onclose={() => setProfileOpen(false)}
//       />

//       <div className="flex h-screen select-none">

//         {/* LEFT ICON BAR */}
//         {/* <div className="w-[60px]  bg-black text-white flex flex-col items-center py-4 gap-5 border-r border-[#B6C0D4]">
//           {iconMenu.map((item, index) => {
//             if (item.icon === shortprofile) {
//               return (
//                 <div
//                   key={index}
//                   onClick={() => setProfileOpen(true)}
//                   className="text-xl p-2 rounded-md cursor-pointer flex items-center justify-center hover:bg-[#1A2539]"
//                 >
//                   <img src={shortprofile} alt="profile" className="h-10 w-10" />
//                 </div>
//               );
//             }

//             return (
//               <Link
//                 key={index}
//                 to={item.path}
//                 className={`text-xl p-2 rounded-md flex items-center justify-center ${pathname === item.path ? "bg-[#6167A0] text-black" : "hover:bg-[#1A2539]"
//                   }`}
//               >
//                 {typeof item.icon === "string" ? (
//                   <img src={item.icon} alt="logo" className="h-10 w-10" />
//                 ) : (
//                   item.icon
//                 )}
//               </Link>
//             );
//           })}
//         </div> */}

//         {/* MAIN SIDEBAR */}
//         <aside className="w-64 bg-[linear-gradient(180deg,#FDF4FF_55.29%,#E2F4FF_100%)]
//  text-black h-screen p-6">

       
//           <img src={logo} className="h-[50px] mb-4" />


//           {/* Search */}
//           <div className="relative w-full mb-6">
//             <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-transparent border border-gray-300 text-sm px-10 py-2 rounded-md w-full placeholder-gray-300 outline-none"
//             />
//           </div>

//           {/* MENU */}
//           {menu.map((main, index) => (
//             <div key={index} className="mb-5">
//               {/* MAIN TITLE */}
//               <div
//                 className="flex items-center gap-2 cursor-pointer"
//                 onClick={() => toggleMain(main.title)}
//               >
//                 <span className="h-8 w-8  rounded flex items-center justify-center">
//                   {/* <IoIosArrowDown
//                     className={`${openMain === main.title ? "rotate-180" : ""} transition-all`}
//                   /> */}
//                   <img src={main.icon} />
//                 </span>
//                 <span className="text-sm font-semibold">{main.title}</span>
//               </div>

//               {/* MAIN CONTENT */}
//               {openMain === main.title && (
//                 <div className="mt-2 ml-6 space-y-3">
//                   {main.children.map((sub, i) => (
//                     <div key={i}>
//                       {/* SUB TITLE */}
//                       <div
//                         className="flex items-center gap-2 cursor-pointer"
//                         onClick={() => toggleSub(sub.heading)}
//                       >
//                         <IoIosArrowDown
//                           className={`${openSub === sub.heading ? "rotate-180" : ""} transition-all`}
//                         />
//                         <span className="text-sm">{sub.heading}</span>
//                       </div>

//                       {/* SUB ITEMS */}
//                       {openSub === sub.heading && (
//                         <ul className="ml-6 mt-1 space-y-1">
//                           {sub.items.map((item, j) => (
//                             <Link key={j} to={item.path}>
//                               <li
//                                 className={`text-sm px-3 py-1 rounded-md ${pathname === item.path
//                                   ? "bg-[#6167A0] text-white"
//                                   : "text-black hover:bg-[#515774] hover:text-white "
//                                   }`}
//                               >
//                                 {item.name}
//                               </li>
//                             </Link>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </aside>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

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
  const { pathname } = useLocation();
  const [openMain, setOpenMain] = useState("");
  const [openSub, setOpenSub] = useState("");
  const [search, setSearch] = useState("");

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
                          className={`transition ${
                            isOpenSub ? "rotate-180" : ""
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
                                className={`px-3 py-1 rounded-md text-sm ${
                                  pathname === item.path
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
    </aside>
  );
};

export default Sidebar;
