import React from "react";
import { FiX, FiLayout, FiType, FiFileText, FiCode } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const options = [
    {
        title: "Visual Designer",
        desc: "Drag & drop blocks to design emails",
        icon: <FiLayout size={32} />,
        path:'/visual-email-template'
    },
    {
        title: "Rich Text Editor",
        desc: "Create emails with formatting tools",
        icon: <FiFileText size={32} />,
        path:'/richtext-email-template'
    },
    // {
    //     title: "Plain Text",
    //     desc: "Send simple text-only emails",
    //     icon: <FiType size={32} />,
    // },
    // {
    //     title: "Paste HTML",
    //     desc: "Use your own HTML template",
    //     icon: <FiCode size={32} />,
    // },
];

const CreateEmailTemplateModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleNavigate = (path) => {
        onClose();
        navigate(path);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="w-[820px] rounded-2xl bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Create From Scratch
                    </h2>
                    <FiX
                        size={22}
                        onClick={onClose}
                        className="cursor-pointer text-gray-500 hover:text-red-500"
                    />
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                    <p className="mb-5 text-sm text-gray-600">
                        Select the email editor you want to use:
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {options.map((item, index) => (
                            <div
                                onClick={() => handleNavigate(item.path)}
                                key={index}
                                className="group cursor-pointer rounded-xl border border-gray-200 p-5 text-center
                           transition-all duration-300
                           hover:border-[#049B1D] hover:shadow-lg"
                            >
                                <div className="mb-3 flex justify-center text-[#049B1D] group-hover:scale-110 transition">
                                    {item.icon}
                                </div>

                                <h3 className="mb-1 text-sm font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-500">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t px-6 py-4">
                    <button
                        onClick={onClose}
                        className="rounded-md border px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        className="rounded-md px-5 py-2 text-sm font-semibold text-white
                       bg-[linear-gradient(180deg,#049B1D_22.26%,#01582C_100%)]"
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateEmailTemplateModal;
