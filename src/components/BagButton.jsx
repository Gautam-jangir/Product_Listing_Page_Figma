import bag from "../assets/icons/bag.png";

function BagButton({ bagSize = "27px" }) {
  return (
      <div className="border-2 w-[55px] h-[55px] rounded-[12px] border-white flex items-center justify-center p-[14px]">
        <img
          className={`w-[${bagSize}] h-[${bagSize}]`}
          src={bag}
          alt="play_icon"
        />
      </div>
  );
}

export default BagButton;
