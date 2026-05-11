import headingLeft from "../assets/icons/headingLeftBorder.svg";
import headingRight from "../assets/icons/headingRightBorder.svg";
import o2left from "../assets/icons/o2HeadingLeft.svg";
import o2Right from "../assets/icons/o2HeadingRight.svg";

function SectionHeading({ headingTitle }) {
  return (
    <div className="flex lg:p-20 justify-center items-center border-bs-indigo-400 h-20">
      <div className="relative flex justify-center items-center px-[50px] py-[20px] rounded-[20px] overflow-hidden">
        <img className="absolute left-[30px]  lg:left-[30px] lg:top-[40px]" src={headingLeft} />
        <img className="absolute right-[30px] lg:right-[30px] lg:top-[30px]" src={headingRight} />
        <span className="text-[clamp(22px,5vw,55px)] font-semibold">
          {headingTitle}
        </span>
      </div>
    </div>
  );
}

function O2Heading({headingTitle}) {
  return (
    <div className="flex lg:p-20 justify-center items-center border-bs-indigo-400 h-20 pb-[120px]">
      <div className="relative flex justify-center items-center px-[50px] py-[35px] rounded-[20px] overflow-hidden">
        <img className="absolute left-[10px] top-[20px] lg:left-[10px] lg:top-[50px]" src={o2left} />
        <img className="absolute right-[10px] top-[0px] lg:right-[10px] lg:top-[10px]" src={o2Right} />
        <span className="text-[clamp(22px,5vw,55px)] font-semibold">
          {headingTitle}
        </span>
      </div>
    </div>
  );
}

export default SectionHeading;
export { O2Heading };
