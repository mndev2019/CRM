import React from 'react'
import Topnav from '../../Component/Topnav'
import { CiFloppyDisk } from 'react-icons/ci'
import password from '../../assets/Images/password.png'

const Password = () => {
    return (
        <>
            <Topnav title="My Password" subtitle="Change your password" icon={password} />
            <section className="px-10 py-8 bg-white rounded-bl-2xl rounded-br-2xl">
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <div className="w-full border-3 border-[#EDEEF4] rounded-[6px] p-3">
                            <p className='inter text-[16px] text-gray-600 '>
                                Enter your current password and a new password below, then click ‘Update’ to change the password you use to login
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-4">
                    <div className="col-span-1">
                        <div className="w-full border-3 border-[#EDEEF4] rounded-[6px] py-5 px-10">
                            <div>
                                <label htmlFor="currentPassword" className="text-[18px] font-medium text-gray-700 mb-1 block roboto">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    name="currentPassword"
                                    className="w-full  border-2 border-[#EDEEF4] rounded-md p-2 focus:outline-none focus:border-blue-500"

                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="currentPassword" className="text-[18px] font-medium text-gray-700 mb-1 block roboto">
                                    New password
                                </label>
                                <input
                                    type="password"
                                    id="NewPassword"
                                    name="NewPassword"
                                    className="w-full border-2 border-[#EDEEF4] rounded-md p-2 focus:outline-none focus:border-blue-500"

                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="currentPassword" className="text-[20px] font-medium text-gray-700 mb-1 block roboto">
                                    Confirm new password
                                </label>
                                <input
                                    type="password"
                                    id="ConfirmNewPassword"
                                    name="ConfirmNewPassword"
                                    className="w-full border-2 border-[#EDEEF4] rounded-md p-2 focus:outline-none focus:border-blue-500"

                                />
                            </div>
                            <div className='justify-end flex mt-4'>
                                <button className="nunito  text-20px bg-[#5464F2] text-white rounded-md px-4 py-2 flex items-center gap-2">
                                    <CiFloppyDisk className="text-xl " />
                                    UPDATE
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Password
