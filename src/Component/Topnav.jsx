import React from 'react'

const Topnav = ({ title, subtitle, icon }) => {
  return (
    <nav className="
      w-full bg-white border-b py-2 shadow border-[#CBD5E1]
      md:rounded-tl-xl md:rounded-tr-xl
    ">
      <div className="container mx-auto">
        <div className="
          flex flex-row
          justify-between items-center
        ">

          {/* Left Content */}
          <div className="px-2 sm:px-5">
            <p className="inter font-extrabold text-[18px] sm:text-[20px] text-black">
              {title}
            </p>
            <h4 className="text-[13px] sm:text-[14px] font-[400] inter text-gray-700">
              {subtitle}
            </h4>
          </div>

          {/* Right Icon */}
          <div className="px-2 sm:px-5">
            <img
              src={icon}
              alt=""
              className="w-[50px] h-[50px]"
            />
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Topnav
