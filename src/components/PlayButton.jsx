import play from "../assets/icons/play.png";

function PlayButton() {
  return (
    <div>
      <div className="border-2 rounded-full border-white w-[50px] h-[50px] lg:w-16 lg:h-16 flex items-center justify-center">
        <img className="w-[20px]" src={play} alt="play_icon" />
      </div>
    </div>
  );
}

export default PlayButton;
