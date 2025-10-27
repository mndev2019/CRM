import React from 'react'
import Topnav from '../../Component/Topnav'
import PageNav from '../../Component/PageNav'

const ViewAccount = () => {
    const account = [
        {
            id: 1,
            accountname: "Rohit Verma",
            phone: "9876543210",
            website: "xyz.com",
            owner: "Joel",
        },

    ];
    return (
        <>
            <Topnav />
            <PageNav title="View Account" btn="Create Account" path="/create-account" />
            <section className="p-4">
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-[#001B48] text-white">
                            <tr>

                                <th className="px-4 py-3 text-left text-sm font-semibold">Account Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Website</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Account Owner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {account.map((account, index) => (
                                <tr
                                    key={account.id}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                                >

                                    <td className="px-4 py-3 text-sm text-gray-700">{account.accountname}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{account.phone}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{account.website}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{account.owner}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default ViewAccount
