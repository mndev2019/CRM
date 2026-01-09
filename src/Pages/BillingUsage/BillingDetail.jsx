import React from 'react'
import billing from '../../assets/Images/bill.png'
import Topnav from '../../Component/Topnav'

const BillingDetail = () => {
    return (
        <>
            <Topnav
                title="Billing Details"
                subtitle="See your plan, invoices, payments, and billing contact at a glance."
                icon={billing}
            />

            <section className="p-4 sm:p-6 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="md:border border-[#EDEEF4] rounded-[12px] md:p-4">

                    {/* Contact Info */}
                    <div className="border border-[#EDEEF4] rounded-[12px] p-4 sm:p-8">
                        <h2 className="inter md:text-[20px] text-[15px] font-bold pb-2 border-b border-[#EDEEF4]">
                            Contact Info
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="md:py-4 py-3">
                                <h2 className="text-[#8693FF] md:text-[18px] text-[15px] font-semibold inter">
                                    Company Name
                                </h2>
                                <p className="inter font-medium md:text-[16px] text-[15px] pt-2">
                                    Demo account_Holsol
                                </p>
                            </div>

                            <div className="md:py-4 py-3">
                                <h2 className="text-[#8693FF] md:text-[18px] text-[15px] font-semibold inter">
                                    Billing Contact
                                </h2>
                                <p className="inter font-medium md:text-[16px] text-[15px] pt-2">
                                    info@yourcompany.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Plan Details */}
                    <div className="border border-[#EDEEF4] rounded-[12px] p-4 sm:p-8 mt-4">
                        <h2 className="inter md:text-[20px] text-[15px] font-bold pb-2 border-b border-[#EDEEF4]">
                            Plan Details
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="md:py-4 py-3">
                                <h2 className="text-[#8693FF] md:text-[18px] text-[15px] font-semibold inter">
                                    Current Plan
                                </h2>
                                <p className="inter font-medium md:text-[16px] text-[15px] pt-2">
                                    Growth (Monthly) – ₹2,499 / month
                                </p>
                            </div>

                            <div className="md:py-4 py-3">
                                <h2 className="text-[#8693FF] md:text-[18px] text-[15px] font-semibold inter">
                                    Next Billing Date
                                </h2>
                                <p className="inter font-medium md:text-[16px] text-[15px] pt-2">
                                    15 Jan 2026 – Auto-renew enabled
                                </p>
                            </div>

                            <div className="md:py-4 py-3">
                                <h2 className="text-[#8693FF] md:text-[18px] text-[15px] font-semibold inter">
                                    Payment Method
                                </h2>
                                <p className="inter font-medium md:text-[16px] text-[15px] pt-2">
                                    Visa - - - - 2841 – Primary
                                </p>
                            </div>

                            <div className="md:py-4 py-3">
                                <h2 className="text-[#8693FF] md:text-[18px] text-[15px] font-semibold inter">
                                    Last Invoice
                                </h2>
                                <p className="inter font-medium md:text-[16px] text-[15px] pt-2">
                                    INV-2025-112 – Paid – ₹2,499 – 15 Dec 2025
                                </p>
                            </div>

                            <div className="md:py-4 py-3 sm:col-span-2">
                                <h2 className="text-[#8693FF] md:text-[18px] text-[15px] font-semibold inter">
                                    Pending Amount
                                </h2>
                                <p className="inter font-medium md:text-[16px] text-[15px] pt-2">
                                    ₹0 – All dues cleared
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BillingDetail
