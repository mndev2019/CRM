import React from 'react'
import { BiImages } from 'react-icons/bi';
import { IoMenu } from 'react-icons/io5';
import { MdEditNote, MdHtml, MdInsertEmoticon, MdOutlineAddModerator, MdOutlineOndemandVideo, MdOutlineSmartButton, MdOutlineSmartScreen, MdOutlineTextSnippet } from 'react-icons/md';

const ContentTab = () => {
    const items = [
        { label: "Title", icon: <MdEditNote size={18} /> },
        { label: "Image", icon: <BiImages size={18} /> },
        { label: "Button", icon: <MdOutlineSmartButton size={18} /> },
        { label: "Divider", icon: <MdOutlineSmartScreen size={18} /> },
        { label: "Social", icon: <MdOutlineAddModerator size={18} /> },
        { label: "HTML", icon: <MdHtml size={18} /> },
        { label: "Video", icon: <MdOutlineOndemandVideo size={18} /> },
        { label: "Icons", icon: <MdInsertEmoticon size={18} /> },
        { label: "Menu", icon: <IoMenu size={18} /> },
        { label: "Text", icon: <MdOutlineTextSnippet size={18} /> },
    ];
    return (
        <>
            <div className="grid grid-cols-2 gap-3">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="bg-white border border-[#CBCBCB] p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#EAF4FF]"
                    >
                        <div className="text-[#006BAE]">{item.icon}</div>
                        <span className="text-[13px] inter font-medium">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ContentTab

