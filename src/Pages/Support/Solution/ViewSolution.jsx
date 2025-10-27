import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'

const ViewSolution = () => {
  // Example static data (you can later replace it with API data)
  const solutions = [
    {
      id: 1,
      owner: "Joel",
      number: "SOL-001",
      title: "Login Issue Resolution",
      product: "CRM Web App",
      status: "Reviewed",
    },
    {
      id: 2,
      owner: "Daniel",
      number: "SOL-002",
      title: "Email Integration Fix",
      product: "Email Module",
      status: "Draft",
    },
  ];

  return (
    <>
      <Topnav />
      <PageNav
        title="Solutions"
        btn="Create Solution"
        path="/create-solution"
      />

      <section className="p-4">
        <div className="bg-gray-200 p-2 text-[14px] rounded-md border-l-2 border-[#001B48] mb-4">
          Solution List
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md text-sm">
            <thead className="bg-[#001B48] text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">#</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Solution Owner</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Solution Number</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Title</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Product Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {solutions.map((solution, index) => (
                <tr
                  key={solution.id}
                  className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                >
                  <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{solution.owner}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{solution.number}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{solution.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{solution.product}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{solution.status}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    <button className="text-blue-600 hover:underline mr-2">Edit</button>
                    <button className="text-red-600 hover:underline">Delete</button>
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

export default ViewSolution;
