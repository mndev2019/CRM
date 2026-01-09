import React from 'react'
import billing from '../../assets/Images/bill.png'
import Topnav from '../../Component/Topnav'

const UsageReport = () => {
    return (
        <>
            <Topnav
                title="Usage Report "
                subtitle="See your product usage trends, key features used, and activity levels at a glance."
                icon={billing}
            />

            <section className="p-4 sm:p-6 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="md:p-4 p-1 border border-[#EDEEF4] rounded-[12px]">
                    <h2 className="inter font-bold md:text-[22px] text-[18px] py-3 border-b border-[#EDEEF4]">
                        Product Usage Report
                    </h2>

                    {/* Item Block */}
                    <div className="space-y-8">

                        {/* Lead Management */}
                        <div>
                            <h3 className="font-bold inter text-[18px] py-4">
                                Lead Management
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[#A4A7C0] inter font-600 text-[18px]">
                                        Limit
                                    </p>
                                    <p className="font-medium inter text-[16px]">
                                        5,000 contacts
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#A4A7C0] inter font-600 text-[18px]">
                                        Usage
                                    </p>
                                    <p className="font-medium inter text-[16px]">
                                        5
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Monthly Email Credits */}
                        <div>
                            <h3 className="font-bold inter text-[18px] py-4">
                                Monthly Email Credits
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[#A4A7C0] inter font-600 text-[18px]">
                                        Limit
                                    </p>
                                    <p className="font-medium inter text-[16px]">
                                        3,000
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#A4A7C0] inter font-600 text-[18px]">
                                        Usage
                                    </p>
                                    <p className="font-medium inter text-[16px]">
                                        0
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Automation */}
                        <div>
                            <h3 className="font-bold inter text-[18px] py-4">
                                Automation
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[#A4A7C0] inter font-600 text-[18px]">
                                        Limit
                                    </p>
                                    <p className="font-medium inter text-[16px]">
                                        4 published flows
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#A4A7C0] inter font-600 text-[18px]">
                                        Usage
                                    </p>
                                    <p className="font-medium inter text-[16px]">
                                        12
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Webhooks */}
                        <div>
                            <h3 className="font-bold inter text-[18px] py-4">
                                Webhooks
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[#A4A7C0] inter font-600 text-[18px]">
                                        Limit
                                    </p>
                                    <p className="font-medium inter text-[16px]">
                                        10 webhooks
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#A4A7C0] inter font-600 text-[18px]">
                                        Usage
                                    </p>
                                    <p className="font-medium inter text-[16px]">
                                        4
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Forms */}
                        <div>
                            <h3 className="font-bold inter text-[18px] py-4">
                                Forms
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[#A4A7C0] inter font-600 text-[18px]">
                                        Limit
                                    </p>
                                    <p className="font-medium inter text-[16px]">
                                        5 published forms
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#A4A7C0] inter font-600 text-[18px]">
                                        Usage
                                    </p>
                                    <p className="font-medium inter text-[16px]">
                                        7
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default UsageReport
