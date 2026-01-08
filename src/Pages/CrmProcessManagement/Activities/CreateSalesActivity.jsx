import React from "react";
import Topnav from "../../../Component/Topnav";

const CreateSalesActivity = () => {
  return (
    <>
      <Topnav
        title="Sales Activity"
        subtitle="Track, manage, and monitor all sales interactions for better performance and follow-ups."
      />

      <section className="p-4 md:p-6 bg-white rounded-bl-2xl rounded-br-2xl">
        <div className="flex gap-5">
          <button className="inter font-medium text-[18px] cursor-pointer pb-1 border-b-3 border-[#2A75FF]">
            Sales Activity Details
          </button>
        </div>

        {/* GRID START */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          
          {/* Associated Lead */}
          <div className="flex flex-col">
            <label className="text-[16px] text-gray-700 mb-1 font-bold">
              Associated Lead
            </label>
            <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
              <option value="">Select Associated Lead</option>
              <option>Kamal Kishore</option>
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="text-[16px] text-gray-700 mb-1 font-bold">
              Status
            </label>
            <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
              <option value="">Select Status</option>
              <option>Open</option>
              <option>Won</option>
              <option>Lost</option>
            </select>
          </div>

          {/* Product */}
          <div className="flex flex-col">
            <label className="text-[16px] text-gray-700 mb-1 font-bold">
              Product
            </label>
            <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
              <option value="">Select Product</option>
            </select>
          </div>

          {/* Order Value */}
          <div className="flex flex-col">
            <label className="text-[16px] text-gray-700 mb-1 font-bold">
              Order Value
            </label>
            <input
              type="number"
              placeholder="Enter Order Value"
              className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
            />
          </div>

          {/* Sales Date & Time */}
          <div className="flex flex-col">
            <label className="text-[16px] text-gray-700 mb-1 font-bold">
              Sales Date & Time
            </label>
            <input
              type="datetime-local"
              className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
            />
          </div>

          {/* Sales Owner */}
          <div className="flex flex-col">
            <label className="text-[16px] text-gray-700 mb-1 font-bold">
              Sales Owner
            </label>
            <select className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none">
              <option value="">Select Sales Owner</option>
              <option>Admin</option>
              <option>Sales Team</option>
            </select>
          </div>

        </div>

        {/* Save Button */}
        <div className="flex justify-center sm:justify-end mt-10">
          <button className="bg-[#2A75FF] hover:bg-[#1f5ed6] transition text-white px-6 py-2 rounded-md font-semibold">
            Save
          </button>
        </div>
      </section>
    </>
  );
};

export default CreateSalesActivity;
