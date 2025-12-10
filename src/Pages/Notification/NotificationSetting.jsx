import React from "react";
import Topnav from "../../Component/Topnav";
import { IoChevronDownSharp } from "react-icons/io5";

const NotificationSetting = () => {
    return (
        <>
            <Topnav
                title="Notification Settings"
                subtitle="Select the kinds of notifications you get about your activities and recommendations."
            />

            <section className="p-6 bg-white rounded-bl-2xl rounded-br-2xl">

                {/* EMAIL NOTIFICATIONS */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Left Side Heading */}
                    <div className="md:col-span-5 col-span-1">
                        <h2 className="text-lg font-bold nunito">Email notifications</h2>
                        <p className="text-sm text-gray-500 mt-1 inter">
                            Get emails to find out what's going on when you're not online.
                            You can turn these off.
                        </p>
                    </div>

                    {/* Middle Toggle List */}
                    <div className="space-y-6 md:col-span-5 col-span-1">
                        {[
                            {
                                title: "News and updates",
                                desc: "News about product and features update",
                            },
                            {
                                title: "Tips and tutorials",
                                desc: "Tips on getting more out of Untitled.",
                            },
                            {
                                title: "User research",
                                desc: "Get involved in our beta testing program or participate in paid product user research.",
                            },
                            {
                                title: "Reminders",
                                desc: "These are notifications to remind you of updates you might have missed.",
                            },
                            {
                                title: "More activity about you",
                                desc: "These are notifications for posts on your profile, likes, and other reactions to your posts, and more.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3 ">
                                {/* Toggle */}
                                <label className="relative inline-flex items-center mt-1 cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>
                                    <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                                </label>

                                <div>
                                    <h3 className="font-bold nunito ">{item.title}</h3>
                                    <p className="text-sm text-gray-500 inter">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column Dropdown Buttons */}
                    <div className="space-y-6 md:col-span-2 col-span-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <button
                                key={i}
                                className="bg-[#FFF8E6] gap-2 flex justify-between items-center border border-[#B6C0D4] px-3 py-2 rounded-md text-sm shadow font-semibold"
                            >
                                Suggested
                                <IoChevronDownSharp className="font-bold" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-300 border-1" />

                {/* PUSH NOTIFICATIONS */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Left Side Heading */}
                    <div className="md:col-span-5 col-span-1">
                        <h2 className="text-lg font-bold nunito">Push notifications</h2>
                        <p className="text-sm text-gray-500 mt-1 inter">
                            Get push notifications in app to find out what’s going on when you're online.
                        </p>
                    </div>

                    {/* Middle Toggle List */}
                    <div className="space-y-6 md:col-span-5 col-span-1">
                        {[
                            {
                                title: "Comments",
                                desc: "Comments on your posts and replies to comments.",
                                checked: true,
                            },
                            {
                                title: "Reminders",
                                desc: "Notifications you might have missed.",
                                checked: true,
                            },
                            {
                                title: "More activity about you",
                                desc: "Notifications for posts on your profile, likes and other reactions to your posts,and more.",
                                checked: false,
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                {/* Toggle */}
                                <label className="relative inline-flex items-center mt-1 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        defaultChecked={item.checked}
                                    />
                                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>
                                    <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                                </label>

                                <div>
                                    <h3 className="font-bold nunito">{item.title}</h3>
                                    <p className="text-sm text-gray-500 inter">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column Dropdown Buttons */}
                    <div className="space-y-6 md:col-span-2 col-span-1">
                        {[1, 2, 3].map((i) => (
                            <button
                                key={i}
                                className="bg-[#FFF8E6] gap-2 flex justify-between items-center border border-[#B6C0D4] px-3 py-2 rounded-md text-sm shadow font-semibold"
                            >
                                Suggested
                                <IoChevronDownSharp className="font-bold" />
                            </button>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default NotificationSetting;
