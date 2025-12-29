import {
  HiOutlineTemplate,
  HiOutlinePencilAlt,
  HiOutlineUsers,
  HiOutlineCalendar
} from "react-icons/hi";

const steps = [
  { label: "Template", icon: HiOutlineTemplate },
  { label: "Compose", icon: HiOutlinePencilAlt },
  { label: "Recipients", icon: HiOutlineUsers },
  { label: "Schedule", icon: HiOutlineCalendar },
];

const EmailStepper = ({ currentStep = 0 }) => {
  return (
    <div className="flex items-center justify-between w-full px-10 py-6 bg-white">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className="flex items-center flex-1 last:flex-none">

            {/* STEP */}
            <div className="relative flex flex-col items-center z-10">

              {/* Tooltip */}
              {isActive && (
                <div className="absolute -top-10 mt-3 bg-[#9ED0FF] text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
                  Step: {index + 1} Message {step.label}
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

            {/* CONNECTING LINE */}
            {index !== steps.length - 1 && (
              <div className="flex-1 h-[2px] mx-2 bg-[#E5E7EB]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default EmailStepper;
