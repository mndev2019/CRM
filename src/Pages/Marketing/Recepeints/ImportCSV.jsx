import React, { useRef } from "react";

const ImportCSV = () => {
  const fileRef = useRef(null);

  return (
    <div className="border border-[#CBCBCB] rounded-[3px] h-full">
      {/* Header */}
      <h2 className="inter font-medium text-[16px] bg-[#E8F6FF] py-2 px-4">
        Import CSV
      </h2>

      {/* Body */}
      <div className="p-8 flex flex-col items-center text-center space-y-6">
        {/* Select CSV Button */}
        <button
          onClick={() => fileRef.current.click()}
          className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm"
        >
          Select CSV File
        </button>

        <input
          ref={fileRef}
          type="file"
          accept=".csv"
          className="hidden"
        />

        {/* Drag & Drop Box */}
        <div className="w-[140px] h-[140px] bg-[#F5F8FF] rounded-md flex flex-col items-center justify-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
            ⬇️
          </div>
          <p className="text-[12px] text-gray-400 mt-3">
            Drag and drop CSV <br /> file here
          </p>
        </div>

        {/* Import Progress */}
        <div className="mt-6">
          <p className="text-sm font-medium mb-3">Import Progress</p>

          <div className="relative w-32 h-16 overflow-hidden">
            {/* <div className="absolute inset-0 rounded-full border-[6px] border-[#E5E7EB]"></div>
            <div className="absolute inset-0 rounded-full border-[6px] border-blue-600 border-t-transparent border-l-transparent rotate-45"></div> */}
            <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
              %
            </div>
          </div>
        </div>

        {/* Total Leads */}
        <div className="text-center">
          <p className="text-sm text-gray-500">Total Leads</p>
          <p className="text-lg font-semibold">125</p>
        </div>

        {/* Download CSV */}
        <button className="flex items-center gap-2 text-blue-600 text-sm mt-4">
          ⬇️ Download Sample CSV Template
        </button>
      </div>
    </div>
  );
};

export default ImportCSV;
