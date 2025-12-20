import {
  HiOutlineTemplate,
  HiOutlinePencilAlt,
  HiOutlineUsers,
  HiOutlineClipboardCheck,
  HiOutlineCalendar
} from "react-icons/hi";

const steps = [
  { label: "Template", icon: HiOutlineTemplate },
  { label: "Compose", icon: HiOutlinePencilAlt },
  { label: "Recipients", icon: HiOutlineUsers },
  { label: "Review", icon: HiOutlineClipboardCheck },
  { label: "Schedule", icon: HiOutlineCalendar },
];

const EmailStepper = ({ currentStep = 0 }) => {
  return (
    <div className="relative flex items-center justify-between w-full px-10 py-6 bg-white">
      
      {/* Horizontal line */}
      <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-[#E5E7EB] -z-10" />

      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index === currentStep;

        return (
          <div key={index} className="relative flex flex-col items-center">
            
            {/* Tooltip - SAME LINE */}
            {isActive && (
              <div className="absolute -top-10 flex items-center gap-1 bg-[#9ED0FF] text-white text-xs px-3 py-1 rounded-md whitespace-nowrap mt-2">
                <span className="font-medium">Step:</span>
                <span>{index + 1}</span>
                <span>Message</span>
                <span>{step.label}</span>
              </div>
            )}

            {/* Circle */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full border-2 bg-white
                ${
                  isActive
                    ? "border-[#2A75FF] text-[#2A75FF]"
                    : "border-[#16A34A] text-[#16A34A]"
                }`}
            >
              <Icon size={22} />
            </div>

            {/* Label */}
            <span
              className={`mt-2 text-sm font-medium
                ${isActive ? "text-[#2A75FF]" : "text-[#16A34A]"}`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default EmailStepper;
