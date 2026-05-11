import logo from "../assets/icons/logo.png";

function Footer() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between lg:ml-[85px]">
        <div className="flex flex-col px-[40px] w-full mb-[70px] lg:w-[580px] lg:mb-[141px]">
          <div className="flex items-center lg:gap-[13px]">
            <img className="w-[94px] h-[94px]" src={logo} alt="logo" />
            <span className="font-black text-[45px] lg:ml-[13px]">
              FloraVision
            </span>
          </div>
          <div className="font-medium text-[28px] mt-[26px] lg:ml-[14px] lg:mt-[43px]">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </div>
        </div>
        <div className="w-full px-[40px] lg:px-[0] lg:w-[187px]">
          <h2 className="font-extrabold mx text-[28px]">Quick Link's</h2>
          <ul className="flex flex-row justify-between items-center lg:items-start lg:flex-col font-medium text-[20px] lg:text-[24px] underline mt-[23px] lg:mt-[46px]">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="lg:mt-[26px]">
              <a href="#">Types Of plant's</a>
            </li>
            <li className="lg:mt-[26px]">
              <a href="#">Contact</a>
            </li>
            <li className="lg:mt-[26px]">
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[562px] px-[40px] mt-[40px] lg:-mt-0 lg:w-[562px] lg:mr-[11px]">
          <h2 className="font-extrabold text-[28px]">For Every Update.</h2>
          <form className="mt-[50px]" action="submit">
            <div className="flex justify-between lg:justify-center rounded-[8px] border-[2px]">
              <input
                className="pl-[20px] lg:pl-7 text-[24px] font-medium"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
              <button className="p-[20px] bg-white text-black font-bold text-[22px] m-1 rounded-[8px]">
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between ml-[99px] lg:mt-[119px] mb-[141px]">
        <div className="mt-[58px] lg:ml-[14px]">
          <span className="font-extrabold text-[28px]">FB</span>
          <span className="font-extrabold text-[28px] ml-[61px]">TW</span>
          <span className="font-extrabold text-[28px] ml-[61px]">LI</span>
        </div>
        <div className="lg:mr-[210px] mt-10">
          <span className="font-medium text-[24px]">
            FloraVision &copy; all right reserve
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
