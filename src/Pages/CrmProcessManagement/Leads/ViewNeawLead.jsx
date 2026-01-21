import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { BASE_URL } from "../../../Api/Base_Url";
import { toast } from "react-toastify";

const ViewNeawLead = () => {
  const navigate = useNavigate();
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const [activityDate, setactivityDate] = useState("");
  const [data, setdata] = useState([])
  const [search, setSearch] = useState("");
  const handleget = async () => {
    try {
      const resp = await axios.get(`${BASE_URL}api/leads`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(resp.data);
      setdata(resp.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleget();
  }, [])

  /* ================= SEARCH FILTER ================= */
  const filteredData = data.filter((item) =>
    `${item.firstName} ${item.lastName} ${item.email} ${item.company}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handledelete = async (id) => {
    if (confirm('Are you sure you want to delete?')) {
      try {
        const resp = await axios.delete(`${BASE_URL}api/leads/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("deleted successfully", resp.data);

        if (resp.data.success === true) {
          toast.success(resp.data.message);
          handleget();
        } else {
          toast.error(resp.data.message || "Something went wrong");
        }
      } catch (error) {
        console.error(error);
        toast.error("Server error");
      }
    }
  };


  // const leads = [
  //   {
  //     name: "Carissa Kidman",
  //     company: "Oh my Goodknits",
  //     phone: "555-555-5555",
  //     email: "carissa@noemail.com",
  //     country: "India",
  //     status: "Processing",
  //   },
  //   {
  //     name: "Crissa Kidman",
  //     company: "Oh my Goodknits",
  //     phone: "555-555-5555",
  //     email: "carissa@noemail.com",
  //     country: "India",
  //     status: "Pending",
  //   },
  // ];

  const statusClasses = {
    "processing": "bg-[#E6F9E8] text-[#1F7A24]",
    "completed": "bg-[#EFFFF0] text-[#049B1D]",
    "failed": "bg-[#FDD7D7] text-[#FF1212]",
    "pending": "bg-[#FDD7D7] text-[#FF1212]",
  };

  return (
    <>
      <Topnav
        title="My Leads"
        subtitle="View and organize every lead added to your pipeline."
        icon={newlead}
      />

      <section className="p-4 sm:p-6 bg-white rounded-bl-2xl rounded-br-2xl">
        <div className="rounded-[12px] md:border border-[#EDEEF4] md:p-3">

          {/* ================= FILTER HEADER ================= */}
          <div className="flex flex-col sm:flex-row justify-between md:gap-4 py-2 border-b-2 border-[#EDEEF4]">

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

              {/* <button className="flex items-center gap-1 bg-[#FDD7D8] border border-[#FFA4AD] text-[#FF1216] px-3 py-1 rounded-md">
                <CiEraser /> Clear
              </button> */}
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <FiSearch className="absolute left-2 top-2 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search here"
                  className="border-b pl-7 pb-1 text-sm outline-none w-40"
                />
              </div>

              <p className="text-sm">
                Total:
                <span className="ml-1 border px-2 rounded">  {filteredData.length}</span>
              </p>
            </div>
          </div>

          {/* ================= TABLE ================= */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-[900px] w-full text-sm">
              {/* <thead>
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
              </thead> */}
              <thead>
                <tr className="bg-[#E4F3FF]">
                  <th className="p-3 text-left">Lead Name</th>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Country</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>

              {/* <tbody>
                {data.map((item, i) => (
                  <tr key={i} className="border-b border-[#EDEEF4] hover:bg-[#EDEEF4]">
                    <td className="p-3"><input type="checkbox" /></td>
                    <td className="p-3">{item.firstName} - {item.lastName}</td>
                    <td className="p-3">{item.company}</td>
                    <td className="p-3">{item.phoneNumber}</td>
                    <td className="p-3 break-all">{item.email}</td>
                    <td className="p-3">{item.country}</td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded ${statusClasses[item.leadStage]}`}>
                        {item.leadStage}
                      </span>
                    </td>
                    <td className="p-3 flex gap-3">
                      <AiFillEdit onClick={() => navigate('/create-lead', { state: { ...item } })} className="text-blue-600 cursor-pointer text-xl" />
                      <AiFillDelete onClick={() => handledelete(item._id)} className="text-red-600 cursor-pointer text-xl" />
                    </td>
                  </tr>
                ))}
              </tbody> */}
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <tr key={item._id} className="border-b border-[#EDEEF4] hover:bg-[#EDEEF4]">
                      <td className="p-3">{item.firstName} {item.lastName}</td>
                      <td className="p-3">{item.company}</td>
                      <td className="p-3">{item.phoneNumber}</td>
                      <td className="p-3 break-all">{item.email}</td>
                      <td className="p-3">{item.country}</td>
                      <td className="p-3">
                        <span className={`px-3 py-1 rounded ${statusClasses[item.leadStage]}`}>
                          {item.leadStage}
                        </span>
                      </td>
                      <td className="p-3 flex gap-3">
                        <AiFillEdit
                          onClick={() => navigate("/create-lead", { state: item })}
                          className="text-blue-600 cursor-pointer text-xl"
                        />
                        <AiFillDelete
                          onClick={() => handledelete(item._id)}
                          className="text-red-600 cursor-pointer text-xl"
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-6 text-gray-500">
                      No leads found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* ================= MOBILE CARD VIEW ================= */}
          <div className="md:hidden space-y-4">
            {data?.map((item, i) => (
              <div key={i} className="border border-[#EDEEF4] rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-[16px]">{item.firstName} - {item.lastName}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${statusClasses[item.leadStage]}`}>
                    {item.leadStage}
                  </span>
                </div>

                <div className="text-sm text-gray-600 space-y-1">
                  <p><b>Company:</b> {item.company}</p>
                  <p><b>Phone:</b> {item.phoneNumber}</p>
                  <p className="break-all"><b>Email:</b> {item.email}</p>
                  <p><b>Country:</b> {item.country}</p>
                </div>

                <div className="flex justify-end gap-4 mt-3">
                  <AiFillEdit onClick={() => navigate('/create-lead', { state: { ...item } })} className="text-blue-600 text-xl cursor-pointer" />
                  <AiFillDelete onClick={() => handledelete(item._id)} className="text-red-600 text-xl cursor-pointer" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ViewNeawLead;

