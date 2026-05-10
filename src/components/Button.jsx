function Button({ title }) {
  return (
    <>
      <button className="font-normal text-[12px] lg:text-[25px] border lg:py-2 lg:px-10 rounded-[6px] lg:rounded-[12px] w-[108px] lg:w-[217px] h-[32px] lg:h-[64px]">
        <span className="w-[14px] lg:w-[28px]">{title}</span>
      </button>
    </>
  );
}

function BentCard() {
  return (
    <>
      {/* <div
        className=" w-[320px] h-[220px] bg-[#84b168] rounded-3xl [clip-path:polygon(0_0,35%_0,50%_18px,65%_0,100%_0,100%_100%,0_100">{bentCardInfo}</div> */}
      <div className="relative w-[320px] h-[220px] bg-amber-200">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 320 220"
          preserveAspectRatio="none"
        >
          <path
            d="
        M0 0
        H110
        Q160 35 210 0
        H320
        V220
        H0
        Z
      "
            fill="#1B2316"
          />
        </svg>
      </div>
    </>
  );
}

export default Button;
export { BentCard }
