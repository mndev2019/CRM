import React from 'react'

// import { useNavigate } from 'react-router-dom'


const Topnav = ({title , subtitle , icon}) => {
    // const navigate = useNavigate();
    return (
        <>
            <nav className="w-full topbarNav bg-nav  bg-white  border-b-1 py-1 shadow border-[#CBD5E1] rounded-tl-xl rounded-tr-xl">
                <div className="container mx-auto">
                    <div className="flex w-full navcontent  justify-between items-center">
                        <div className="px-5">
                            <div className="">
                                <p className="inter font-extrabold text-[20px] text-black">{title}</p>
                                <h4 className="text-[14px] font-[400] inter text-gray-700">{subtitle}</h4>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="">
                                <img src={icon} style={{ height: "50px", width: "50px" }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Topnav
