import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import googleanalytics from '../../assets/Images/googlenalytics.png'
import Topnav from '../../Component/Topnav'
import { useNavigate } from 'react-router-dom'

const GoogleAnalytics = () => {
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
            className="flex items-center gap-2 text-[#6D28D9] text-[14px] font-medium mb-4 cursor-pointer border-b border-[#EDEEF4] pb-4 bg-[linear-gradient(90deg,rgba(235,247,255,0.35)_0%,#FDF4FF_100%)]"
          >
            <HiArrowLeft />
            Integrations
          </div>

          {/* Header */}
          <div className="rounded-[12px] p-4 flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img
                src={googleanalytics}
                alt="Google Analytics"
                className="h-[44px] w-[44px]"
              />
              <h2 className="inter font-semibold text-[16px] text-[#111827]">
                Google Analytics
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-[14px]">

            {/* Overview */}
            <div>
              <h3 className="nunito font-bold text-[18px] text-black mb-2">
                Google Analytics Integration – Overview
              </h3>
              <p className="nunito font-medium text-[#4C4646] text-[16px]">
                Google Analytics integration helps you track and analyze website traffic,
                user behavior, and conversions directly from your platform.
                It provides valuable insights into how users interact with your website
                and helps you make data-driven decisions.
              </p>
            </div>

            {/* Key Benefits */}
            <div>
              <p className="text-[#6400B0] nunito font-semibold text-[18px] mb-2">
                Key Benefits:
              </p>

              <ul className="list-disc pl-5 space-y-1 nunito font-bold text-[#4C4646] text-[16px]">
                <li>Total Traffic Insights</li>
                <p className="font-medium">
                  Track how many users visit your website and how often.
                </p>

                <li>Traffic Sources</li>
                <p className="font-medium">
                  Identify where your visitors come from, including search engines,
                  referrals, and campaigns.
                </p>

                <li>Page Performance</li>
                <p className="font-medium">
                  Monitor individual page views and user engagement.
                </p>

                <li>Conversion Tracking</li>
                <p className="font-medium">
                  Measure how many leads and goals are successfully converted.
                </p>

                <li>User Demographics</li>
                <p className="font-medium">
                  Understand visitor demographics such as location and device usage.
                </p>
              </ul>
            </div>

            {/* What You Can Do */}
            <div>
              <p className="text-[#6400B0] nunito font-semibold text-[18px] mb-2">
                What You Can Do with Google Analytics Integration
              </p>

              <ul className="list-disc pl-5 space-y-2 nunito font-medium text-[#4C4646] text-[16px]">
                <li>Monitor website traffic and performance</li>
                <li>Analyze visitor behavior and engagement</li>
                <li>Track lead conversions and goals</li>
                <li>Identify top-performing pages</li>
                <li>Make data-driven marketing decisions</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default GoogleAnalytics
