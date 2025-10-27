// import React from 'react'
// import Topnav from '../../Component/Topnav'
// import PageNav from '../../Component/PageNav'
// import { FaCircle } from 'react-icons/fa'

// const CreateDeal = () => {
//     return (
//         <>
//             <Topnav />
//             <PageNav title="Create Deal" btn="View Deal" path="/view-deal" />
//             <section className="p-4">
//                 {/* Lead Information Heading */}
//                 <div className="grid grid-cols-1 mb-6">
//                     <div className="col-span-1">
//                         <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3'>
//                             <FaCircle className='text-[#001B48] text-[10px]' />
//                             Deal Information
//                         </div>
//                     </div>
//                 </div>

//                 {/* Lead Information Form */}
//                 <form>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Deal Owner</label>
//                             <select
//                                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
//                             >
//                                 <option value="">Select Deal Owner</option>

//                             </select>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Amount</label>
//                             <input
//                                 type="text"
//                                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
//                                 placeholder="Enter amount"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Deal Name</label>
//                             <input
//                                 type="text"
//                                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
//                                 placeholder="Enter deal name"
//                             />
//                         </div>
                       
                      
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Closing Date</label>
//                             <input
//                                 type="date"
//                                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
//                                 placeholder="Select date of birth"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Call Owner</label>
//                             <select
//                                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
//                             >
//                                 <option value="">Select Call Owner</option>

//                             </select>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Reminder</label>
//                             <select
//                                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
//                             >
//                                 <option value="">None</option>

//                             </select>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Subject</label>
//                             <input
//                                 type="text"
//                                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
//                                 placeholder="Enter subject"
//                             />
//                         </div>
//                     </div>
//                     <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <div className='bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3 mb-4 md:col-span-3 col-span-1'>
//                             <FaCircle className='text-[#001B48] text-[10px]' />

//                             Purpose Of Outgoing Call
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Call Agenda</label>
//                             <input
//                                 type="text"
//                                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
//                                 placeholder="Enter call agenda"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Call Purpose</label>
//                             <select
//                                 className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
//                             >
//                                 <option value="">None</option>

//                             </select>
//                         </div>
//                     </div>


//                     {/* Submit Button */}
//                     <div className="mt-8">
//                         <button
//                             type="submit"
//                             className="bg-[#001B48] text-white px-6 py-2 rounded-md text-sm hover:bg-[#002f7a] transition"
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </section>
//         </>
//     )
// }

// export default CreateDeal
import React from "react";
import Topnav from "../../Component/Topnav";
import PageNav from "../../Component/PageNav";
import { FaCircle } from "react-icons/fa";

const CreateDeal = () => {
  return (
    <>
      <Topnav />
      <PageNav title="Create Deal" btn="View Deal" path="/view-deal" />
      <section className="p-4">
        {/* Deal Information Heading */}
        <div className="grid grid-cols-1 mb-6">
          <div className="col-span-1">
            <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] flex items-center gap-3">
              <FaCircle className="text-[#001B48] text-[10px]" />
              Deal Information
            </div>
          </div>
        </div>

        {/* Deal Information Form */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Deal Owner */}
            <div>
              <label className="block text-sm font-medium mb-1">Deal Owner</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Deal Owner</option>
              </select>
            </div>

            {/* Deal Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Deal Name</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter deal name"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium mb-1">Amount</label>
              <input
                type="number"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter amount"
              />
            </div>

            {/* Account / Company */}
            <div>
              <label className="block text-sm font-medium mb-1">Account / Company</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Company</option>
              </select>
            </div>

            {/* Contact Person */}
            <div>
              <label className="block text-sm font-medium mb-1">Contact Person</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Contact</option>
              </select>
            </div>

            {/* Deal Source */}
            <div>
              <label className="block text-sm font-medium mb-1">Deal Source</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Source</option>
                <option value="Referral">Referral</option>
                <option value="Website">Website</option>
                <option value="Email">Email</option>
                <option value="Social Media">Social Media</option>
              </select>
            </div>

            {/* Deal Stage */}
            <div>
              <label className="block text-sm font-medium mb-1">Deal Stage</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Stage</option>
                <option>Prospecting</option>
                <option>Proposal Sent</option>
                <option>Negotiation</option>
                <option>Closed Won</option>
                <option>Closed Lost</option>
              </select>
            </div>

            {/* Probability */}
            <div>
              <label className="block text-sm font-medium mb-1">Probability (%)</label>
              <input
                type="number"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter probability %"
              />
            </div>

            {/* Expected Close Date */}
            <div>
              <label className="block text-sm font-medium mb-1">Expected Close Date</label>
              <input
                type="date"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
              />
            </div>

            {/* Forecast Category */}
            <div>
              <label className="block text-sm font-medium mb-1">Forecast Category</label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]">
                <option value="">Select Forecast</option>
                <option>Pipeline</option>
                <option>Best Case</option>
                <option>Commit</option>
              </select>
            </div>

            {/* Attach Quotation */}
            <div>
              <label className="block text-sm font-medium mb-1">Attach Quotation</label>
              <input
                type="file"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001B48]"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium mb-1">Description / Notes</label>
              <textarea
                className="w-full border rounded-md px-3 py-2 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-[#001B48]"
                placeholder="Enter deal details or notes"
              ></textarea>
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
  );
};

export default CreateDeal;

