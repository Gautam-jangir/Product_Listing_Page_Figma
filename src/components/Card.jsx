import rightArrow from "../assets/icons/right_arrow.png";
import Button from "../components/Button";
const Card = ({plantImage, plantType, plantName}) => {
  return (
      <div className="flex flex-col w-[512px] h-[644px] relative backdrop-blur-[15px] bg-[url(./assets/icons/cardTop.svg)] bg-contain bg-no-repeat">
        <div className="absolute top-[-20px] w-full flex justify-center">
          <img
            className="width-[459px] h-[459px] absolute top-[-100px] drop-shadow-[0_-2.71px_2.71px_rgba(0,0,0,0.0478),
            0_-6.52px_5.32px_rgba(0,0,0,0.0687)]"
            src={plantImage}
            alt="Aglaonema_Plant"
          />
        </div>
        <div className="flex flex-col px-20 mb-12 pt-[350px] relative">
          <span className="font-normal text-[23px] opacity-75">
            {/* Indoor Plant */}{plantType}
          </span>
          <span className="font-normal text-[38px] opacity-75">
            {/* Aglaonema plant */}{plantName}
          </span>
          <div className="mt-4">
            <Button title="Buy Now" />
          </div>
          <div className="mt-10">
            <div className="flex justify-center">
              <div className="w-[20px] h-[8px] bg-white rounded-2xl mx-2"></div>
              <div className="w-[8px] h-[8px] bg-white rounded-2xl mx-2"></div>
              <div className="w-[8px] h-[8px] bg-white rounded-2xl mx-2"></div>
            </div>
          </div>
          <div className="absolute w-5 h-5 right-5 bottom-36  ">
            <img src={rightArrow} alt="Right_Arrow" />
          </div>
        </div>
      </div>
  );
};

export default Card;
