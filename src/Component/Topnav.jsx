import React from 'react'

const Topnav = ({ title, subtitle, icon }) => {
  return (
    <nav className="
      w-full bg-white border-b py-2 shadow border-[#CBD5E1]
      rounded-tl-xl rounded-tr-xl
    ">
      <div className="container mx-auto">
        <div className="
          flex flex-col sm:flex-row
          justify-between items-start sm:items-center
        ">

          {/* Left Content */}
          <div className="px-4 sm:px-5 mb-2 sm:mb-0">
            <p className="inter font-extrabold text-[18px] sm:text-[20px] text-black">
              {title}
            </p>
            <h4 className="text-[13px] sm:text-[14px] font-[400] inter text-gray-700">
              {subtitle}
            </h4>
          </div>

          {/* Right Icon */}
          <div className="px-4 sm:px-5">
            <img
              src={icon}
              alt=""
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
            />
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Topnav
