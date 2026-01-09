import React from 'react'
import Topnav from '../../Component/Topnav'
import report from '../../assets/Images/report.png'

const ReportSubscription = () => {
    return (
        <>
            <Topnav
                title="My Report Subscriptions"
                subtitle="Manage your report subscriptions"
                icon={report}
            />

            <section className="lg:px-10 md:px-5 px-2 lg:py-8 py-2 bg-white rounded-bl-2xl rounded-br-2xl space-y-6">
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <div className="w-full md:border border-[#EDEEF4] rounded-[6px] py-5 lg:px-10 px-5 space-y-5">
                            <div className="flex items-start gap-3 border-b border-[#EDEEF4] pb-4">
                                <input type="checkbox" className="mt-1 w-4 h-4 accent-blue-600" defaultChecked />
                                <div>
                                    <h3 className="font-medium text-gray-900">Daily User Task Reports</h3>
                                    <p className="text-sm text-gray-500">
                                        User Tasks Reports summarizing the pending tasks for today.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 border-b border-[#EDEEF4] pb-4">
                                <input type="checkbox" className="mt-1 w-4 h-4 accent-blue-600" defaultChecked />
                                <div>
                                    <h3 className="font-medium text-gray-900">Daily Report</h3>
                                    <p className="text-sm text-gray-500">
                                        Lead Activity Report summarizing the new leads and most active leads in the past day.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 border-b border-[#EDEEF4] pb-4">
                                <input type="checkbox" className="mt-1 w-4 h-4 accent-blue-600" defaultChecked />
                                <div>
                                    <h3 className="font-medium text-gray-900">Daily Reports For Owner</h3>
                                    <p className="text-sm text-gray-500">
                                        Lead Activity Report summarizing the new leads and most active leads in the past day. Where the user
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 border-b border-[#EDEEF4] pb-4">
                                <input type="checkbox" className="mt-1 w-4 h-4 accent-blue-600" />
                                <div>
                                    <h3 className="font-medium text-gray-900">Smart Views Summary</h3>
                                    <p className="text-sm text-gray-500">
                                        Daily Report summarizing the latest leads activities and added to your subscribed views
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

export default ReportSubscription
