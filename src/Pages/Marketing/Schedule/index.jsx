import React from "react";
import Topnav from "../../../Component/Topnav";
import emailCampaign from "../../../assets/Images/emailcampaign.png";
import EmailStepper from "../EmailMarketting/EmailStepper";
import ScheduleBox from "./ScheduleBox";

const Schedule = () => {
    return (
        <>
            <Topnav
                title="Email Campaigns"
                subtitle="Contacts here receive targeted emails to warm them up and move them closer to conversion."
                icon={emailCampaign}
            />

            <section className="p-4 bg-white rounded-bl-2xl rounded-br-2xl">
                <EmailStepper currentStep={3} />

                <div className="mt-6 border border-[#EDEEF4] rounded-md">
                    <ScheduleBox/>
                </div>
                 <div className="flex justify-end items-center mt-6">

                    <button

                        className="bg-blue-600 text-white px-6 py-2 rounded"
                    >
                        Save
                    </button>
                     
                </div>
            </section>
        </>
    );
};

export default Schedule;
