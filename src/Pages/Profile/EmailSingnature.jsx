import React from 'react'
import Topnav from '../../Component/Topnav'
import emailsign from '../../assets/Images/emailsignature.png'

const EmailSingnature = () => {
    return (
        <>
            <Topnav title="My Email  Signature" subtitle="Update your HTML and text email signature" icon={emailsign} />
            <section className='px-10 py-8 bg-white rounded-bl-2xl rounded-br-2xl'>
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <div className="w-full border border-[#EDEEF4] rounded-[6px] p-3">
                            <p className='inter text-[16px] text-gray-600 '>
                                Upload your HTML and text signature below
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-4">
                    <div className="col-span-1">
                        <div className="w-full border border-[#EDEEF4] rounded-[6px] py-5 px-10">
                            <div>
                                <label htmlFor="htmlSignature" className="text-[18px] font-medium text-gray-700 mb-1 block roboto">
                                    HTML  Signature
                                </label>
                                <input
                                    type="text"
                                    id="htmlSignature"
                                    name="htmlSignature"
                                    className="w-full  border-2 border-[#EDEEF4] rounded-md p-2 focus:outline-none focus:border-blue-500"

                                />
                            </div>

                            <div className='mt-4'>
                                <label htmlFor="currentPassword" className="text-[18px] font-medium text-gray-700 mb-1 block roboto">
                                    Text Signature
                                </label>
                                <textarea
                                    type="text"
                                    rows="4"
                                    id="ConfirmNewPassword"
                                    name="ConfirmNewPassword"
                                    className="w-full border-2 border-[#EDEEF4] rounded-md p-2 focus:outline-none focus:border-blue-500"

                                />
                            </div>
                            <div className='justify-end flex mt-4'>
                                <button className="nunito  text-20px bg-white border-2  border-[#5464F2] text-[#5464F2] font-semibold rounded-md px-4 py-2 flex items-center gap-2">
                                    
                                  SAVE
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default EmailSingnature
