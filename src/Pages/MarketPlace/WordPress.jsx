import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import wordpress from '../../assets/Images/wordpress.png'
import Topnav from '../../Component/Topnav'
import { useNavigate } from 'react-router-dom'

const WordPress = () => {
  const navigate = useNavigate()

  return (
    <>
      <Topnav
        title="Marketplace"
        subtitle="The marketplace provides access to multiple apps that work together to nurture leads and improve conversion performance."
      />

      <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl">
        <div className="border border-[#EDEEF4] rounded-[12px] p-4">

          {/* Back */}
          <div
            onClick={() => navigate('/market-place')}
            className="flex items-center gap-2 text-[#6D28D9] text-[14px] font-medium mb-4 cursor-pointer border-b border-[#EDEEF4] pb-4"
          >
            <HiArrowLeft />
            Integrations
          </div>

          {/* Header */}
          {/* Header */}
          <div className="bg-[linear-gradient(90deg,rgba(235,247,255,0.35)_0%,#FDF4FF_100%)] rounded-[12px] p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

            {/* Left */}
            <div className="flex items-center gap-3">
              <img
                src={wordpress}
                alt="WordPress"
                className="h-[44px] w-[44px]"
              />
              <h2 className="inter font-semibold text-[16px] text-[#111827]">
                WordPress
              </h2>
            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Website URL"
                className="border border-[#6A0065] px-3 py-2 text-[13px] text-[#111827] bg-white w-full sm:w-[180px]"
              />

              <input
                type="text"
                placeholder="API Key"
                className="border border-[#6A0065] px-3 py-2 text-[13px] text-[#111827] bg-white w-full sm:w-[160px]"
              />

              <button
                className="bg-[linear-gradient(90deg,#870081_0%,#F205E8_100%)]
      text-white text-[13px] font-semibold px-4 py-2 rounded-[4px] border border-[#6A0065]
      w-full sm:w-auto"
              >
                Save
              </button>
            </div>
          </div>


          {/* Content */}
          <div className="space-y-6 text-[14px]">

            {/* Overview */}
            <div>
              <h3 className="nunito font-bold text-[18px] text-black mb-2">
                WordPress Integration – Overview
              </h3>
              <p className="nunito font-medium text-[#4C4646] text-[16px]">
                WordPress is a widely used content management system (CMS) that allows
                users to build, customize, and manage websites with ease. It supports
                blogs, business websites, portfolios, and eCommerce platforms through
                themes and plugins.
              </p>
            </div>

            {/* After Integrating */}
            <div>
              <p className="text-[#6400B0] nunito font-semibold text-[18px] mb-2">
                After integrating WordPress, you can:
              </p>

              <ul className="list-disc pl-5 space-y-2 nunito font-medium text-[#4C4646] text-[16px]">
                <li>
                  Publish and manage website content efficiently
                </li>
                <li>
                  Customize website design using themes and plugins
                </li>
                <li>
                  Improve website functionality without coding
                </li>
              </ul>
            </div>

            {/* Installation */}
            <div>
              <h3 className="nunito font-bold text-[18px] text-black mb-2">
                Installation
              </h3>

              <p className="text-[#6400B0] nunito font-semibold text-[18px] mb-2">
                How do you integrate WordPress?
              </p>

              <ul className="list-disc pl-5 space-y-2 nunito font-medium text-[#4C4646] text-[16px]">
                <li>
                  Install WordPress on your hosting server.
                </li>
                <li>
                  Choose and install a theme that suits your website needs.
                </li>
                <li>
                  Add required plugins to extend functionality.
                </li>
                <li>
                  Configure website settings and permissions.
                </li>
                <li>
                  Your WordPress website will be ready to use.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default WordPress
