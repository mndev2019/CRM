import React from 'react'
import Topnav from '../../../Component/Topnav'
import PageNav from '../../../Component/PageNav'

const ViewKnowledgeArticle = () => {
    const articles = [
        {
            id: 1,
            title: "Solar Panel Maintenance Tips",
            category: "Maintenance",
            createdDate: "2025-09-20",
            updatedDate: "2025-10-02",
        },
        {
            id: 2,
            title: "How to Claim Warranty for Solar Equipment",
            category: "Warranty",
            createdDate: "2025-09-15",
            updatedDate: "2025-09-18",
        },
    ];

    return (
        <>
            <Topnav />
            <PageNav title="Knowledge Base" btn="Create Article" path="/create-knowledge" />

            <section className="p-4">
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-[#001B48] text-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Title</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Created Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Updated Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article, index) => (
                                <tr
                                    key={article.id}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-blue-50 transition`}
                                >
                                    <td className="px-4 py-3 text-sm text-gray-700">{article.title}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{article.category}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{article.createdDate}</td>
                                    <td className="px-4 py-3 text-sm text-gray-700">{article.updatedDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default ViewKnowledgeArticle
