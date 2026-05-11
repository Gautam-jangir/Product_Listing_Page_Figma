function Button({ title }) {
  return (
    <>
      <button className="font-normal text-[12px] lg:text-[25px] border lg:py-2 lg:px-10 rounded-[6px] lg:rounded-[12px] w-[80px] lg:w-[217px] h-[20px] lg:h-[64px]">
        <span className="w-[10px] lg:w-[28px]">{title}</span>
      </button>
    </>
  );
}

function BentCard() {
  return (
    <>
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
