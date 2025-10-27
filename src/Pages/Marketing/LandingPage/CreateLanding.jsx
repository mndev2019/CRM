import React from "react";
import Topnav from "../../../Component/Topnav";
import PageNav from "../../../Component/PageNav";
import { FaCircle } from "react-icons/fa";

const CreateLanding = () => {
  return (
    <>
      <Topnav />
      <PageNav
        title="Create Landing Page"
        btn="View Landing Page"
        path="/view-landing"
      />

      <section className="p-4">
        {/* Lead Capture Form Heading */}
        <div className="grid grid-cols-1 mb-6">
          <div className="col-span-1">
            <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3">
              <FaCircle className="text-[#001B48] text-[10px]" />
              Lead Capture Form
            </div>
          </div>
        </div>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter city"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter state"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Interested In</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Service</option>
                <option value="Residential Solar">Residential Solar</option>
                <option value="Commercial Solar">Commercial Solar</option>
                <option value="Rooftop Installation">Rooftop Installation</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Budget Range</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Budget Range</option>
                <option value="Below 50,000">Below ₹50,000</option>
                <option value="50,000 - 1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="1,00,000 - 5,00,000">₹1,00,000 - ₹5,00,000</option>
                <option value="Above 5,00,000">Above ₹5,00,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Lead Source</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Lead Source</option>
                <option value="Website">Website</option>
                <option value="Social Media">Social Media</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Referral">Referral</option>
              </select>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-8">
            <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4">
              <FaCircle className="text-[#001B48] text-[10px]" />
              Additional Details
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message / Notes</label>
              <textarea
                rows="4"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48] resize-none"
                placeholder="Write additional details or requirements..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="bg-[#001B48] text-white px-6 py-2 rounded-md text-sm hover:bg-[#002f7a] transition"
            >
              Submit Lead
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateLanding;
