import BagButton from "./BagButton";
import card from "../assets/icons/card.svg";

function GalleryCard({ cardImage, cardTitle, cardDescription, cardPrice }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:w-[512px] lg:h-[644px] relative backdrop-blur-[15px] bg-contain bg-no-repeat">
        <img
          className="absolute inset-0 rotate-90 lg:rotate-0 scale-y-200 lg:scale-100 left-1/2 top-1/2 w-[512px] h-[644px] -translate-x-1/2 -translate-y-1/2"
          src={card}
          alt="card"
        />
        <div className="absolute top-[-20px] w-full flex justify-center">
          <img
            className="width-[459px] h-[459px] absolute top-[-100px] drop-shadow-[0_-2.71px_2.71px_rgba(0,0,0,0.0478),
            0_-6.52px_5.32px_rgba(0,0,0,0.0687)]"
            src={cardImage}
            alt="Aglaonema_Plant"
          />
        </div>
        <div className="flex flex-col pr-[75px] pl-[66px] mb-12 pt-[175px] lg:pt-[350px] relative">
          <span className="font-normal text-[19px] lg:text-[38px] opacity-75">
            {/* Indoor Plant */}
            {cardTitle}
          </span>
          <span className="font-normal w-[350px] h-[87px] text-[24px] opacity-75">
            {/* Aglaonema plant */}
            {cardDescription}
          </span>
          <div className="mt-4 flex justify-between">
            <span className="font-normal text-[19px] lg:text-[38px] opacity-75">
              {/* Aglaonema plant */}
              {cardPrice}
            </span>
            <BagButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
