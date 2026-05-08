function Footer() {
  return (
    <div className="flex flex-row justify-between ml-[85px]">
      <div className="flex flex-col w-[580px] mb-[141px]">
        <div className="flex items-center gap-[13px]">
          <img className="w-[94px] h-[94px]" src="/logo.png" alt="logo" />
          <span className="font-black text-[45px] ml-[13px]">FloraVision</span>
        </div>
        <div className="font-medium text-[28px] ml-[14px] mt-[43px]">
          "From lush indoor greens to vibrant outdoor blooms, our plants are
          crafted to thrive and elevate your living environment."
        </div>
        <div className="ml-[14px] mt-[119px]">
          <span className="font-extrabold text-[28px]">FB</span>
          <span className="font-extrabold text-[28px] ml-[61px]">TW</span>
          <span className="font-extrabold text-[28px] ml-[61px]">LI</span>
        </div>
      </div>
      <div className="w-[187px]">
        <h2 className="font-extrabold text-[28px]">Quick Link's</h2>
        <ul className="font-medium text-[24px] underline mt-[46px]">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="mt-[26px]">
            <a href="#">Types Of plant's</a>
          </li>
          <li className="mt-[26px]">
            <a href="#">Contact</a>
          </li>
          <li className="mt-[26px]">
            <a href="#">Privacy</a>
          </li>
        </ul>
      </div>
      <div className="w-[562px] mr-[11px]">
        <h2 className="font-extrabold text-[28px]">For Every Update.</h2>
        <form className="mt-[50px]" action="submit">
          <div className="flex justify-between rounded-[8px] border-[2px] w-[562px]">
            <input
              className="pl-7 text-[24px] font-medium"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <button className="px-[20px] py-[18px] bg-white text-black font-bold text-[22px] m-1 rounded-[8px]">
              SUBSCRIBE
            </button>
          </div>
        </form>
        <div className="mt-[205px]">
          <span className="font-medium text-[24px]">
            FloraVision &copy; all right reserve
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
