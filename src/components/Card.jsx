import rightArrow from "../assets/icons/right_arrow.png";
import Button from "../components/Button";
import cardTop from "../assets/icons/cardTop.svg";

const Card = ({plantImage, plantType, plantName}) => {
  return (
    <div className="flex flex-col w-[285px] lg:w-[512px] lg:h-[644px] relative bg-contain bg-no-repeat">
      <img
        className="absolute lg:w-[512px] lg:h-[644px]"
        src={cardTop}
        alt="cardtop"
      />
      <div className="absolute top-[-20px] w-full flex justify-center">
        <img
          className="w-[285px] lg:w-[459px] lg:h-[459px] absolute lg:top-[-100px] top-[-50px] drop-shadow-[0_-2.71px_2.71px_rgba(0,0,0,0.0478),
            0_-6.52px_5.32px_rgba(0,0,0,0.0687)]"
          src={plantImage}
          alt="Aglaonema_Plant"
        />
      </div>
      <div className="flex flex-col px-10 lg:px-20 mb-12 lg:pt-[350px] relative pt-[220px]">
        <span className="font-normal text-[15px] lg:text-[23px] opacity-75">
          {/* Indoor Plant */}
          {plantType}
        </span>
        <span className="font-normal text-[20px] lg:text-[38px] opacity-75">
          {/* Aglaonema plant */}
          {plantName}
        </span>
        <div className="lg:mt-4 mt-2">
          <Button title="Buy Now" />
        </div>
        <div className="lg:mt-10 mt-4">
          <div className="flex justify-center">
            <div className="w-[20px] h-[8px] bg-white rounded-2xl mx-2"></div>
            <div className="w-[8px] h-[8px] bg-white rounded-2xl mx-2"></div>
            <div className="w-[8px] h-[8px] bg-white rounded-2xl mx-2"></div>
          </div>
        </div>
        <div className="absolute w-5 h-5 right-5 lg:bottom-36 bottom-15 ">
          <img src={rightArrow} alt="Right_Arrow" />
        </div>
      </div>
    </div>
  );
};

export default Card;
