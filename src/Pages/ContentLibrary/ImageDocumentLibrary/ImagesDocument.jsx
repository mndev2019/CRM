import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";
import { FiSearch } from "react-icons/fi";
import dummyImage from '../../../assets/Images/advancedsetup.png'

const ImagesDocument = () => {
    const [active, setActive] = useState("Images Library");
    const [files, setFiles] = useState([
        {
            name: "sample-image.png",
            type: "image/png",
            preview: dummyImage,
        },
    ]);

    const handleUpload = (e) => {
        const uploadedFiles = Array.from(e.target.files);
        setFiles((prev) => [...prev, ...uploadedFiles]);
    };

    return (
        <>
            <Topnav
                title="Images and Documents"
                subtitle="Upload, manage, and organize your files in one place."
            />

            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="border border-[#EDEEF4] rounded-xl bg-white">

                    {/* Tabs */}
                    <div className="flex gap-6 p-4 border-b border-[#EDEEF4]">
                        {["Images Library", "Document Library"].map((item) => (
                            <button
                                key={item}
                                onClick={() => setActive(item)}
                                className={`font-medium text-[16px] pb-1 ${active === item
                                    ? "border-b-2 border-[#2A75FF] text-[#2A75FF]"
                                    : "text-gray-500"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between p-4">
                        {/* Search Box */}
                        <div className="relative w-[260px]">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" />
                            <input
                                type="text"
                                placeholder="Search here"
                                className="w-full pl-10 pr-3 py-2 border border-[#D0D5DD] rounded-md text-sm focus:outline-none"
                            />
                        </div>


                        <label className="bg-[#2A75FF] text-white px-4 py-2 rounded-lg cursor-pointer text-sm">
                            {active === "Images Library" ? "Upload Images" : "Upload Files"}
                            <input
                                type="file"
                                multiple
                                accept={
                                    active === "Images Library" ? "image/*" : ".pdf,.doc,.docx"
                                }
                                hidden
                                onChange={handleUpload}
                            />
                        </label>
                    </div>

                    {/* Uploaded Items */}
                    <div className="p-4">
                        {files.length === 0 ? (
                            <p className="text-gray-400 text-sm text-center">
                                No files uploaded yet
                            </p>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {files.map((file, index) => (
                                    <div
                                        key={index}
                                        className="border border-[#EDEEF4] rounded-lg p-3 text-center hover:shadow-md transition"
                                    >
                                        {file.type.startsWith("image") ? (
                                            <img
                                                src={file.preview || URL.createObjectURL(file)}
                                                alt=""
                                                className="h-24 w-full object-cover rounded"
                                            />
                                        ) : (
                                            <div className="h-24 flex items-center justify-center bg-gray-100 rounded text-sm">
                                                📄 {file.name}
                                            </div>
                                        )}
                                        <p className="text-xs mt-2 truncate">{file.name}</p>
                                    </div>
                                ))}
                            </div>

                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImagesDocument;
