import React from "react";
import Topnav from "../../Component/Topnav";
import PageNav from "../../Component/PageNav";
import { FaWhatsapp } from "react-icons/fa";

const ViewLead = () => {

  // 📝 Sample Data
  const leads = [
    {
      id: 1,
      name: "Rohit Verma",
      organisation: "TechCorp",
      email: "rohit.verma@example.com",
      phone: "9335829697",
      source: "Website",
      owner: "Muskan",
    },
    {
      id: 2,
      name: "Anita Sharma",
      organisation: "Creative Minds",
      email: "anita.sharma@example.com",
      phone: "9123456780",
      source: "Referral",
      owner: "John Doe",
    },
    {
      id: 3,
      name: "Amit Patel",
      organisation: "Smart Solutions",
      email: "amit.patel@example.com",
      phone: "9988776655",
      source: "Advertisement",
      owner: "Ravi Kumar",
    },
  ];

  return (
    <>
      <Topnav />
      <PageNav title="View Leads" btn="Create Leads" path="/create-lead" />

      <section className="p-4">
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
          <table className="min-w-full border-collapse">
            <thead className="bg-[#001B48] text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Lead Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Organisation</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Lead Source</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Lead Owner</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">WhatsApp</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Contact</th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead, index) => (
                <tr
                  key={lead.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">{lead.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{lead.organisation}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{lead.email}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{lead.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{lead.source}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{lead.owner}</td>

                  {/* ✅ WhatsApp & Call Buttons Separated */}
                  <td className="px-4 py-3 text-sm">

                    {/* ✅ WhatsApp Button */}
                    <a
                      href={`https://wa.me/91${lead.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 font-semibold hover:underline"
                    >
                      <FaWhatsapp className="text-xl" /> WhatsApp
                    </a>

                   

                  </td>
                     <td className="px-4 py-3 text-sm">

                  
                  

                    {/* ✅ Call Button */}
                    <a
                      href={`tel:${lead.phone}`}
                      className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                    >
                      📞 Call
                    </a>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </section>
    </>
  );
};

export default ViewLead;
