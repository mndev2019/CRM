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
            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl ">
                <div className='border border-[#EDEEF4] rounded-[12px] p-4'>
                    <div className='border border-[#EDEEF4] rounded-[12px] p-8'>
                        <h2 className='inter text-[20px] font-bold pb-2 border-b border-[#EDEEF4]'>
                            Contact Info
                        </h2>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 py-4">
                                <h2 className='text-[#8693FF] text-[18px] font-semibold inter'>
                                    Company Name
                                </h2>
                                <p className='inter font-medium text-[16px] pt-2'>
                                    Demo account_Holsol
                                </p>
                            </div>
                            <div className="col-span-1 py-4">
                                <h2 className='text-[#8693FF] text-[18px] font-semibold inter'>
                                    Billing Contact
                                </h2>
                                <p className='inter font-medium text-[16px] pt-2'>
                                    info@yourcompany.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#EDEEF4] rounded-[12px] p-8 mt-4'>
                        <h2 className='inter text-[20px] font-bold pb-2 border-b border-[#EDEEF4]'>
                            Plan Details
                        </h2>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 py-4">
                                <h2 className='text-[#8693FF] text-[18px] font-semibold inter'>
                                   Current Plan
                                </h2>
                                <p className='inter font-medium text-[16px] pt-2'>
                                  Growth (Monthly) – ₹2,499 / month
                                </p>
                            </div>
                            <div className="col-span-1 py-4">
                                <h2 className='text-[#8693FF] text-[18px] font-semibold inter'>
                                    Next Billing Date
                                </h2>
                                <p className='inter font-medium text-[16px] pt-2'>
                                    15 Jan 2026 – Auto‑renew enabled
                                </p>
                            </div>
                            <div className="col-span-1 py-4">
                                <h2 className='text-[#8693FF] text-[18px] font-semibold inter'>
                                 Payment Method
                                </h2>
                                <p className='inter font-medium text-[16px] pt-2'>
                                   Visa - - - - 2841 – Primary
                                </p>
                            </div>
                            <div className="col-span-1 py-4">
                                <h2 className='text-[#8693FF] text-[18px] font-semibold inter'>
                                    Last Invoice
                                </h2>
                                <p className='inter font-medium text-[16px] pt-2'>
                                   INV‑2025‑112 – Paid – ₹2,499 – 15 Dec 2025
                                </p>
                            </div>
                            <div className="col-span-1 py-4">
                                <h2 className='text-[#8693FF] text-[18px] font-semibold inter'>
                                    Pending Amount
                                </h2>
                                <p className='inter font-medium text-[16px] pt-2'>
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
