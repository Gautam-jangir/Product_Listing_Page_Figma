function SectionHeading({headingTitle}) {
  return (
    <div className="flex p-20 justify-center items-center border-bs-indigo-400 h-20">
      <div className="relative flex justify-center items-center px-4 rounded-[20px] overflow-hidden">
        <div className="absolute inset-0 border-[5px] border-[#FBD300]/50 rounded-[20px]  [clip-path:polygon(0_100%,0_20%,15%_100%)]"></div>
        <div className="absolute inset-0 border-[5px] border-[#FBD300]/50  rounded-[20px] [clip-path:polygon(80%_0,100%_0,100%_80%)]"></div>
        <span className="text-[55px] font-semibold">{headingTitle}</span>
      </div>
    </div>
  );
}

function BorderUse() {
  return (
    <div>
      <div className="relative w-[300px] h-[200px] rounded-3xl bg-[#1B2316]">
        {/* Left Border */}
        <div
          className="
      absolute
      left-0
      bottom-0
      h-24
      w-[2px]
      bg-white/40
      rounded-full
    "
        ></div>

        {/* Bottom Left Small Border */}
        <div
          className="
      absolute
      left-0
      bottom-0
      w-10
      h-[2px]
      bg-white/40
      rounded-full
    "
        ></div>

        {/* Right Border */}
        <div
          className="
      absolute
      right-0
      top-0
      h-24
      w-[2px]
      bg-white/40
      rounded-full
    "
        ></div>

        {/* Top Right Small Border */}
        <div
          className="
      absolute
      right-0
      top-0
      w-10
      h-[2px]
      bg-white/40
      rounded-full
    "
        ></div>
      </div>
      <div className="relative w-[320px] h-[220px] overflow-hidden rounded-3xl">
        {/* Rotating Border Layer */}
        <div
          className="
      absolute
      inset-[-50%]
      bg-gradient-to-r
      from-transparent
      via-white
      to-transparent
      rotate-45
    "
        ></div>

        {/* Inner Content */}
        <div
          className="
      absolute
      inset-[2px]
      rounded-3xl
      bg-[#1B2316]
      z-10
      flex items-center justify-center
      text-white
    "
        >
          Content
        </div>
      </div>
      <div className="relative w-[320px] h-[220px] overflow-hidden rounded-3xl">
        {/* Rotating Border */}
        <div
          className="
      absolute
      inset-[-50%]
      bg-gradient-to-r
      from-transparent
      via-white
      to-transparent
    "
        ></div>

        {/* Mask Layer */}
        <div
          className="
      absolute
      inset-[2px]
      rounded-3xl
      bg-[#1B2316]
      z-10
    "
        ></div>

        {/* Bottom Left Corner Reveal */}
        <div
          className="
      absolute
      left-0
      bottom-0
      w-24
      h-24
      bg-transparent
      z-20
      border-l border-b border-white/40
      rounded-bl-3xl
    "
        ></div>

        {/* Top Right Corner Reveal */}
        <div
          className="
      absolute
      right-0
      top-0
      w-24
      h-24
      bg-transparent
      z-20
      border-r border-t border-white/40
      rounded-tr-3xl
    "
        ></div>

        {/* Content */}
        <div
          className="
      absolute
      inset-0
      z-30
      flex items-center justify-center
      text-white
    "
        >
          Content
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
export { BorderUse };
