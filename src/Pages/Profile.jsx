import React from "react";
import Topnav from "../Component/Topnav";
import profile from "../assets/Images/profile.png";

const Profile = () => {
  const user = {
    name: "Rahul Sharma",
    email: "rahul.sharma@holsolindia.com",
    phone: "+91 98765 43210",
    designation: "Sales Executive",
    department: "Sales & Marketing",
    location: "New Delhi, India",
    profileImg: profile,
    joinDate: "12 March 2022",
    employeeId: "HSI-045",
  };

  return (
    <>
      <Topnav />

      <div className="min-h-screen  py-10 px-6 flex flex-col items-center">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#001B48] to-[#003F88] text-white w-full max-w-3xl rounded-t-2xl p-6 shadow-md text-center">
          <h1 className="text-3xl font-bold mb-1 tracking-wide">My Profile</h1>
          <p className="text-blue-100 text-sm">
            Sales CRM Dashboard | HolSol India Pvt. Ltd.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-b-2xl p-8 w-full max-w-3xl -mt-3 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Image */}
            <div className="relative group">
              <img
                src={user.profileImg}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#001B48] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-[#001B48] text-white text-xs px-2 py-1 rounded-md">
                Active
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {user.name}
                </h2>
                <span className="bg-blue-100 text-blue-[#001B48] px-3 py-1 rounded-full text-sm font-medium">
                  {user.designation}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                <p>
                  <strong className="text-gray-900">Email:</strong> {user.email}
                </p>
                <p>
                  <strong className="text-gray-900">Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong className="text-gray-900">Department:</strong>{" "}
                  {user.department}
                </p>
                <p>
                  <strong className="text-gray-900">Location:</strong>{" "}
                  {user.location}
                </p>
                <p>
                  <strong className="text-gray-900">Employee ID:</strong>{" "}
                  {user.employeeId}
                </p>
                <p>
                  <strong className="text-gray-900">Joined:</strong>{" "}
                  {user.joinDate}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t my-6"></div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              About
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Rahul Sharma is a dedicated Sales Executive at HolSol India,
              managing key client relationships and driving strategic growth in
              the logistics and solar solutions sector. Known for his commitment
              to excellence, data-driven strategies, and result-oriented
              approach, he continues to deliver outstanding contributions to the
              Sales & Marketing department.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
