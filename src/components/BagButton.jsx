import bag from "../assets/icons/bag.png";

function BagButton() {
  return (
      <div className="border-2 w-[32px] h-[32px] lg:w-[64px] lg:h-[64px] rounded-[6px] lg:rounded-[12px] border-white flex items-center justify-center lg:p-[14px]">
        <img
          className={`w-[17px] h-17px lg:w-[34px] lg:h-[34px]`}
          src={bag}
          alt="play_icon"
        />
      </div>
  );
}

export default BagButton;
