import React, { useEffect, useState } from 'react'
import Topnav from '../../../Component/Topnav'
import lead from '../../../assets/Images/newlead.png'
import axios from 'axios'
import { BASE_URL } from '../../../Api/Base_Url'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'


const CreateLead = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state;
  const [active, setActive] = useState("Lead Details")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [sourceMedium, setSourceMedium] = useState("");
  const [sourceContent, setSourceContent] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [qualityScore, setQualityScore] = useState("");
  const [owner, setOwner] = useState("");

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const [leadOrigin, setLeadOrigin] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [leadStage, setLeadStage] = useState("");

  const [doNotSMS, setDoNotSMS] = useState(false);
  const [doNotTrack, setDoNotTrack] = useState(false);
  const [doNotEmail, setDoNotEmail] = useState(false);
  const [doNotCall, setDoNotCall] = useState(false);

  const [notes, setNotes] = useState("");
  const [mailingPreferences, setMailingPreferences] = useState("");
  const [editid, seteditid] = useState();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const requestdata = {
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      website,
      sourceMedium,
      sourceContent,
      jobTitle,
      qualityScore,
      owner,

      address1,
      address2,
      city,
      state,
      country,
      zip,

      leadOrigin,
      leadSource,
      leadStage,

      doNotSMS,
      doNotTrack,
      doNotEmail,
      doNotCall,

      notes,
      mailingPreferences,
    }
    try {
      if (editid) {
        const resp = await axios.put(`${BASE_URL}api/leads/${editid}`, requestdata,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log(resp)
        if (resp.data.success === true) {
          toast.success("Lead updated successfully ✅");
          navigate('/view-new-lead')
        } else {
          toast.error(resp.data.message || "Lead not update ❌")
        }
      } else {
        const resp = await axios.post(`${BASE_URL}api/leads`, requestdata,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(resp)
        if (resp.data.success === true) {
          toast.success("Lead created successfully ✅");
          navigate('/view-new-lead')
        } else {
          toast.error(resp.data.message || "Lead not created ❌")
        }
      }

    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong ❌");
    }

  }
  useEffect(() => {
    if (editData) {
      setFirstName(editData.firstName || "");
      setLastName(editData.lastName || "");
      setEmail(editData.email || "");
      setPhoneNumber(editData.phoneNumber || "");
      setCompany(editData.company || "");
      setWebsite(editData.website || "");
      setSourceMedium(editData.sourceMedium || "");
      setSourceContent(editData.sourceContent || "");
      setJobTitle(editData.jobTitle || "");
      setQualityScore(editData.qualityScore || "");
      setOwner(editData.owner || "");

      setAddress1(editData.address1 || "");
      setAddress2(editData.address2 || "");
      setCity(editData.city || "");
      setState(editData.state || "");
      setCountry(editData.country || "");
      setZip(editData.zip || "");

      setLeadOrigin(editData.leadOrigin || "");
      setLeadSource(editData.leadSource || "");
      setLeadStage(editData.leadStage || "");

      setDoNotSMS(editData.doNotSMS || false);
      setDoNotTrack(editData.doNotTrack || false);
      setDoNotEmail(editData.doNotEmail || false);
      setDoNotCall(editData.doNotCall || false);

      setNotes(editData.notes || "");
      setMailingPreferences(editData.mailingPreferences || "");

      seteditid(editData._id);
    }
  }, [editData]);

  // useEffect(() => {
  //   if (state) {
  //     handleEdit()
  //   }
  // }, [state])

  return (
    <>
      <Topnav
        title={editid ? "Edit Lead" : "Create Lead"}
        subtitle="View and organize every new lead added to your pipeline."
        icon={lead}
      />

      <form onSubmit={handlesubmit} className="p-4 sm:p-6 bg-white rounded-bl-2xl rounded-br-2xl">

        {/* Tabs */}
        <div className="flex gap-5 overflow-x-auto whitespace-nowrap">
          {["Lead Details", "Additional Details"].map((itm, index) => (
            <button
              type='button'
              key={index}
              onClick={() => setActive(itm)}
              className={`inter font-medium text-[18px] pb-1 ${active === itm ? "border-b-3 border-[#2A75FF]" : ""
                }`}
            >
              {itm}
            </button>
          ))}
        </div>

        {/* ================= LEAD DETAILS ================= */}
        {active === "Lead Details" && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                First Name
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Phone Number
              </label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Company
              </label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Website
              </label>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Source Medium
              </label>
              <input
                value={sourceMedium}
                onChange={(e) => setSourceMedium(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Source Content
              </label>
              <input
                value={sourceContent}
                onChange={(e) => setSourceContent(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Job Title
              </label>
              <input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Quality Score
              </label>
              <input
                value={qualityScore}
                onChange={(e) => setQualityScore(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Owner
              </label>
              <input
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Address 1
              </label>
              <input
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Address 2
              </label>
              <input
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                City
              </label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                State
              </label>
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Country
              </label>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Zip
              </label>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Lead Origin
              </label>
              <input
                value={leadOrigin}
                onChange={(e) => setLeadOrigin(e.target.value)}
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>

            {/* Lead Source */}
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Lead Source
              </label>
              <select
                value={leadSource}
                onChange={(e) => setLeadSource(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              >
                <option value="">Select Lead Source</option>
                <option value="Facebook">Facebook</option>
                <option value="Google Ads">Google Ads</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral</option>
              </select>
            </div>

            {/* Lead Stage */}
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Lead Stage
              </label>
              <select
                value={leadStage}
                onChange={(e) => setLeadStage(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              >
                <option value="">Select Stage</option>
                <option value="processing">processing</option>
                <option value="completed">completed</option>
                <option value="failed">failed</option>
                <option value="pending">pending</option>
              </select>
            </div>


            {/* Checkboxes */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={doNotSMS}
                  onChange={(e) => setDoNotSMS(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-[16px] text-gray-700 font-bold">Do Not SMS</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={doNotTrack}
                  onChange={(e) => setDoNotTrack(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-[16px] text-gray-700 font-bold">Do Not Track</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={doNotEmail}
                  onChange={(e) => setDoNotEmail(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-[16px] text-gray-700 font-bold">Do Not Email</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={doNotCall}
                  onChange={(e) => setDoNotCall(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-[16px] text-gray-700 font-bold">Do Not Call</span>
              </label>

            </div>


            {/* Notes */}
            <div className="flex flex-col col-span-1 sm:col-span-2 lg:col-span-3">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="3"
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              />
            </div>

          </div>
        )}

        {/* ================= ADDITIONAL DETAILS ================= */}
        {active === "Additional Details" && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="text-[16px] text-gray-700 mb-1 font-bold">
                Mailing Preferences
              </label>
              <select
                value={mailingPreferences}
                onChange={(e) => setMailingPreferences(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-md focus:border-[#2A75FF] outline-none"
              >
                <option value="">Select Mailing Preferences</option>
                <option value="email_only">Email Only</option>
                <option value="sms_only">SMS Only</option>
                <option value="email_sms">Email & SMS</option>
              </select>
            </div>

          </div>
        )}

        {/* Save Button */}
        <div className="mt-6">
          <button type='submit' className="
            bg-[#2A75FF] text-white 
            w-full sm:w-auto 
            px-6 py-2 
            rounded-md 
            text-[15px] font-medium 
            hover:bg-blue-700
          ">
            {editid ? "Update" : "Save"}
          </button>
        </div>

      </form>


    </>
  )
}

export default CreateLead
