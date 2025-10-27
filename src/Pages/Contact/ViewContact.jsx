import React from 'react'
import Topnav from '../../Component/Topnav'
import PageNav from '../../Component/PageNav'

const ViewContact = () => {
    const contact = [
        {
            id: 1,
            name: "Rohit Verma",
            accountname: "Daniel",
            email: "rohit.verma@example.com",
            phone: "9876543210",
            owner: "Joel",
        },
        {
            id: 2,
            name: "Anita Sharma",
            accountname: "Daniel",
            email: "anita.sharma@example.com",
            phone: "9123456780",
            owner: "John Doe",
        },
        {
            id: 3,
            name: "Amit Patel",
            accountname: "Daniel",
            email: "amit.patel@example.com",
            phone: "9988776655",
            owner: "Ravi Kumar",
        },
    ];
    return (
        <>
            <Topnav />
            <PageNav title="View Contacts" btn="Create Contact" path="/create-contact" />
            <section className="p-4">
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-[#001B48] text-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Contact Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Account Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>

                                <th className="px-4 py-3 text-left text-sm font-semibold">Contact Owner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contact.map((Contact, index) => (
                                <tr
                                    key={contact.id}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                                >
                                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{Contact.name}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{Contact.accountname}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{Contact.email}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{Contact.phone}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{Contact.owner}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default ViewContact
