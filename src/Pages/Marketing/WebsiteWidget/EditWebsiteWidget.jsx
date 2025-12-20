import React, { useState } from "react";
import Topnav from "../../../Component/Topnav";
import websitewidget from '../../../assets/Images/globe 1.png'

const EditWebsiteWidget = () => {
    const [headlineBg, setHeadlineBg] = useState("#F36A6A");
    const [headlineTextColor, setHeadlineTextColor] = useState("#FFFFFF");
    const [buttonBg, setButtonBg] = useState("#000000");
    const [buttonTextColor, setButtonTextColor] = useState("#FFFFFF");

    const skins = [
        "#6C63FF",
        "#B845DB",
        "#FF7A59",
        "#FF4D4F",
        "#FDB022",
        "#84CC16",
        "#22C55E",
        "#2DD4BF",
    ];

    return (
        <>
            <Topnav
                title="Website Widget"
                subtitle="Lead captured via website widget. Action required to move forward in the pipeline."
                icon={websitewidget}
            />
            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="border border-[#EDEEF4] rounded-[12px] bg-white">
                    {/* Preview Bar */}
                    <div
                        className="flex items-center justify-between px-6 py-3 rounded-t-lg"
                        style={{ backgroundColor: headlineBg, color: headlineTextColor }}
                    >
                        <span className="font-bold inter text-[18px]">Your headline goes here.</span>
                        <button
                            className="px-4 py-1 rounded text-sm inter font-bold"
                            style={{ backgroundColor: buttonBg, color: buttonTextColor }}
                        >
                            Click here
                        </button>
                    </div>

                    {/* Settings */}
                    <div className="p-6">
                        <h2 className="font-bold inter text-[20px] mb-4">Topbar Settings</h2>

                        <div className="border border-[#EDEEF4] rounded-lg overflow-hidden">
                            {/* Apply skins */}
                            <div className="flex items-center justify-end gap-2 px-4 py-3 border-b border-[#EDEEF4]">
                                <span className="text-sm text-gray-600 mr-2">Apply Skins</span>
                                {skins.map((color) => (
                                    <button
                                        key={color}
                                        className="w-4 h-4 rounded"
                                        style={{ backgroundColor: color }}
                                        onClick={() => setHeadlineBg(color)}
                                    />
                                ))}
                            </div>

                            {/* Headline Section */}
                            <div className="bg-gray-100 px-4 py-2 font-medium">Headline</div>
                            <div className="grid grid-cols-2 gap-6 p-4">
                                <div>
                                    <label className="block text-[18px] inter font-semibold mb-1">Text</label>
                                    <input
                                        type="text"
                                        className="w-full border border-[#A6A4A4] rounded px-3 py-2"
                                        placeholder="Your headline"
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <div>
                                        <label className="block text-[18px] inter font-semibold mb-1">Text Color</label>
                                        <div className="flex items-center gap-2 border border-[#A6A4A4] rounded px-2 py-1">
                                            <input
                                                type="color"
                                                value={headlineTextColor}
                                                onChange={(e) => setHeadlineTextColor(e.target.value)}
                                            />
                                            <span className="text-xs">{headlineTextColor}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[18px] inter font-semibold mb-1">Background</label>
                                        <div className="flex items-center gap-2 border border-[#A6A4A4] rounded px-2 py-1">
                                            <input
                                                type="color"
                                                value={headlineBg}
                                                onChange={(e) => setHeadlineBg(e.target.value)}
                                            />
                                            <span className="text-xs">{headlineBg}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Button Section */}
                            <div className="bg-gray-100 px-4 py-2 font-medium">Button</div>
                            <div className="grid grid-cols-2 gap-6 p-4">
                                <div>
                                    <label className="block text-[18px] inter font-semibold mb-1">Text</label>
                                    <input
                                        type="text"
                                        className="w-full border border-[#A6A4A4] rounded px-3 py-2"
                                        placeholder="Button text"
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <div>
                                        <label className="block text-[18px] inter font-semibold mb-1">Text Color</label>
                                        <div className="flex items-center gap-2 border border-[#A6A4A4] rounded px-2 py-1">
                                            <input
                                                type="color"
                                                value={buttonTextColor}
                                                onChange={(e) => setButtonTextColor(e.target.value)}
                                            />
                                            <span className="text-xs">{buttonTextColor}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[18px] inter font-semibold mb-1">Background</label>
                                        <div className="flex items-center gap-2 border border-[#A6A4A4] rounded px-2 py-1">
                                            <input
                                                type="color"
                                                value={buttonBg}
                                                onChange={(e) => setButtonBg(e.target.value)}
                                            />
                                            <span className="text-xs">{buttonBg}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Link */}
                            <div className="px-4 pb-6">
                                <label className="block text-[18px] inter font-semibold mb-1">Link</label>
                                <input
                                    type="text"
                                    className="w-full border border-[#A6A4A4] rounded px-3 py-2"
                                    placeholder="https://example.com"
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-3 mt-6">
                            <button className="px-4 py-2 border rounded text-blue-600">Close</button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default EditWebsiteWidget;