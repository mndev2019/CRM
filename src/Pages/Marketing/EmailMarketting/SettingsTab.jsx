import { useState } from "react";

const SettingsTab = () => {
  const [contentWidth, setContentWidth] = useState(600);
  const [bgColor, setBgColor] = useState("#D7B243");
  const [contentBgColor, setContentBgColor] = useState("#7F661B");
  const [font, setFont] = useState("Arial");

  const fonts = [
    "Arial",
    "Calibri",
    "Cambria",
    "Comic Sans MS",
    "Courier New",
    "Georgia",
    "Helvetica",
    "Impact",
    "Lucida Console",
    "Lucida Sans",
    "Segoe UI",
    "Tahoma",
    "Times New Roman",
    "Trebuchet MS",
    "Verdana",
  ];

  return (
    <div className="space-y-5 text-sm">

      {/* Content width */}
      <div>
        <label className="block mb-1 inter font-medium">
          Content area width
        </label>

        <input
          type="range"
          min="400"
          max="800"
          value={contentWidth}
          onChange={(e) => setContentWidth(e.target.value)}
          className="w-full accent-[#006BAE]"
        />

        <div className="text-center text-[#FF8C00] font-medium">
          {contentWidth}px
        </div>
      </div>

      <hr />

      {/* Alignment */}
      <div>
        <label className="block mb-2 inter font-medium">
          Content area alignment
        </label>

        <div className="flex border border-[#CBCBCB] rounded w-fit overflow-hidden">
          {["Left", "Center", "Right"].map((item, i) => (
            <button
              key={item}
              className={`px-4 py-1 text-xs inter font-medium ${
                i === 0
                  ? "bg-[#006BAE] text-white"
                  : "bg-white text-[#4C4646]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <hr />

      {/* Background color */}
      <div>
        <label className="block mb-2 inter font-medium">
          Background Color
        </label>

        <div className="flex items-center gap-2 border border-[#CBCBCB] p-2 bg-white w-fit">
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-6 h-6 cursor-pointer border"
          />
          <span className="text-xs font-medium">{bgColor}</span>
        </div>
      </div>

      {/* Content background color */}
      <div>
        <label className="block mb-2 inter font-medium">
          Content area background color
        </label>

        <div className="flex items-center gap-2 border border-[#CBCBCB] p-2 bg-white w-fit">
          <input
            type="color"
            value={contentBgColor}
            onChange={(e) => setContentBgColor(e.target.value)}
            className="w-6 h-6 cursor-pointer border"
          />
          <span className="text-xs font-medium">{contentBgColor}</span>
        </div>
      </div>

      <hr />

      {/* Background image toggle */}
      <div className="flex items-center justify-between">
        <label className="inter font-medium">
          Background image
        </label>

        <div className="w-10 h-5 bg-[#CBCBCB] rounded-full relative">
          <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5" />
        </div>
      </div>

      <hr />

      {/* Default font */}
      <div>
        <label className="block mb-2 inter font-medium">
          Default font
        </label>

        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="w-full border border-[#CBCBCB] px-2 py-1 bg-white"
          style={{ fontFamily: font }}
        >
          {fonts.map((f) => (
            <option key={f} value={f} style={{ fontFamily: f }}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <hr />

      {/* Link color */}
      <div>
        <label className="block inter font-medium">
          Link color
        </label>
      </div>

    </div>
  );
};
export default SettingsTab;