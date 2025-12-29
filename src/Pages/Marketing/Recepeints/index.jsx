import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";
import emailCampaign from "../../../assets/Images/emailcampaign.png";
import EmailStepper from "../EmailMarketting/EmailStepper";
import AddRecepeints from "./AddRecepeints";
import CopyPaste from "./CopyPaste";
import ContactList from "./ContactList";
import GoogleSheet from "./GoogleSheet";
import ImportCSV from "./ImportCSV";
import { useNavigate } from "react-router-dom";

const Recepeints = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("add");

    return (
        <>
            <Topnav
                title="Email Campaigns"
                subtitle="Contacts here receive targeted emails to warm them up and move them closer to conversion."
                icon={emailCampaign}
            />

            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl">
                <EmailStepper currentStep={2} />

                <div className="flex mt-6 border border-[#EDEEF4] rounded-lg overflow-hidden">
                    {/* LEFT SIDE */}
                    <div className="w-1/4 bg-gray-50 p-4 border-r border-[#EDEEF4] space-y-3">
                        <h2 className="inter font-medium text-[14px]">
                            Select Recipients
                        </h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Insert mail-merge fields in subject and mail body to personalize the message
                        </p>

                        <div className="space-y-4">
                            {[
                                { key: "add", label: "Add New Recipients" },
                                { key: "copy", label: "Copy/Paste" },
                                { key: "csv", label: "Import a CSV" },
                                { key: "list", label: "Contact List" },
                                { key: "sheet", label: "Google Sheets" },
                            ].map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => setActiveTab(item.key)}
                                    className={`w-full py-1 text-sm  text-white transition border border-[#6A9EFF]
                    ${activeTab === item.key
                                            ? "bg-[#40ACFF] "
                                            : "bg-[#8FD4FF]  hover:bg-blue-200"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-3/4 p-3">
                        {activeTab === "add" && <AddRecepeints />}
                        {activeTab === "copy" && <CopyPaste/>}
                        {activeTab === "csv" && <ImportCSV />}
                        {activeTab === "list" && <ContactList />}
                        {activeTab === "sheet" && <GoogleSheet />}
                    </div>
                </div>
                <div className="flex justify-end items-center mt-6 gap-5">

                    <button

                        className="bg-blue-600 text-white px-6 py-2 rounded"
                    >
                        Save
                    </button>
                       <button
                       onClick={()=> navigate('/schedule')}

                        className="bg-blue-600 text-white px-6 py-2 rounded"
                    >
                        Next
                    </button>
                </div>
            </section>
        </>
    );
};

export default Recepeints;
