import React from 'react'
import Topnav from '../../Component/Topnav'
import PageNav from '../../Component/PageNav'
import { FaCircle } from 'react-icons/fa'

const CreateLead = () => {
  return (
    <>
      <Topnav />
      <PageNav title="Create Leads" btn="View Lead" path="/view-lead" />

      <section className="p-4">
        {/* Lead Information Heading */}
        <div className="grid grid-cols-1 mb-6">
          <div className="col-span-1">
            <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3'>
              <FaCircle className='text-[#001B48] text-[10px]' />
              Lead Information
            </div>
          </div>
        </div>

        {/* Lead Information Form */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Lead Owner */}
            <div>
              <label className="block text-sm font-medium mb-1">Lead Owner</label>
              <select
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
              >
                <option value="">Select Lead Owner</option>

              </select>
            </div>

            {/* Organisation */}
            <div>
              <label className="block text-sm font-medium mb-1">Organisation</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter organisation name"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter full name"
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter title"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter email"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter phone number"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-medium mb-1">Website</label>
              <input
                type="url"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter website URL"
              />
            </div>

            {/* Lead Source */}
            <div>
              <label className="block text-sm font-medium mb-1">Lead Source</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Source</option>
                <option value="Website">Website</option>
                <option value="Referral">Referral</option>
                <option value="Advertisement">Advertisement</option>
              </select>
            </div>

            {/* Lead Status */}
            <div>
              <label className="block text-sm font-medium mb-1">Lead Status</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Status</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Lost">Lost</option>
              </select>
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-medium mb-1">Industry</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Industry</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
              </select>
            </div>

            {/* No. of Employees */}
            <div>
              <label className="block text-sm font-medium mb-1">No. of Employees</label>
              <input
                type="number"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter number"
              />
            </div>

            {/* Yearly Revenue */}
            <div>
              <label className="block text-sm font-medium mb-1">Yearly Revenue</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter revenue"
              />
            </div>
          </div>

          {/* Address Information Section */}
          <div className="mt-8">
            <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4'>
              <FaCircle className='text-[#001B48] text-[10px]' />
              Address Information
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Street */}
              <div>
                <label className="block text-sm font-medium mb-1">Street</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                  placeholder="Enter street"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                  placeholder="Enter city"
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                  placeholder="Enter state"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-1">Country</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                  placeholder="Enter country"
                />
              </div>

              {/* Zip / Postal Code */}
              <div>
                <label className="block text-sm font-medium mb-1">Zip / Postal Code</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                  placeholder="Enter postal code"
                />
              </div>


            </div>
            {/* Description Information Section */}
            <div className="mt-8">
              <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4'>
                <FaCircle className='text-[#001B48] text-[10px]' />
                Description Information
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  rows="4"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48] resize-none"
                  placeholder="Enter additional details about the lead"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="bg-[#001B48] text-white px-6 py-2 rounded-md text-sm hover:bg-[#002f7a] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default CreateLead
