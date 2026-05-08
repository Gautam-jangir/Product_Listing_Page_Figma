import play from "../assets/icons/play.png";

function PlayButton() {
  return (
    <div>
      <div className="border-2 rounded-full border-white w-16 h-16 flex items-center justify-center">
        {/* <div
          className="ml-1 w-0 h-0
               border-t-10 border-t-transparent
               border-b-10 border-b-transparent 
               border-l-18 border-l-white rounded-[5px]"
        ></div> */}
        <img src={play} alt="play_icon" />
      </div>
    </div>
  );
}

export default PlayButton;
