import BagButton from "./BagButton";
import card from "../assets/icons/card.svg";

function GalleryCard({ cardImage, cardTitle, cardDescription, cardPrice }) {
  return (
    <div className="flex justify-center mb-[100px]">
      <div className="flex flex-col w-[256px] h-[344px]  lg:w-[512px] lg:h-[644px] relative ] bg-contain bg-no-repeat">
        <img
          className="absolute inset-0 lg:rotate-0 left-1/2 top-1/2 w-full h-full lg:w-[512px] lg:h-[644px] -translate-x-1/2 -translate-y-1/2 scale-[107%]"
          src={card}
          alt="card"
        />
        <div className="absolute top-[-20px] w-full flex justify-center">
          <img
            className="w-[228px] h-[228] lg:w-[459px] lg:h-[459px] absolute lg:top-[-100px] drop-shadow-[0_-2.71px_2.71px_rgba(0,0,0,0.0478),
            0_-6.52px_5.32px_rgba(0,0,0,0.0687)]"
            src={cardImage}
            alt="Aglaonema_Plant"
          />
        </div>
        <div className="flex flex-col justify-end px-[35px] lg:pr-[75px] lg:pl-[66px] mb-12 pt-[195px] lg:pt-[330px] relative">
          <span className="font-normal text-[18px] lg:text-[38px] opacity-75">
            {/* Indoor Plant */}
            {cardTitle}
          </span>
          <span className="font-normal lg:w-[393px] text-[12px] lg:text-[24px] opacity-75">
            {/* Aglaonema plant */}
            {cardDescription}
          </span>
          <div className="lg:mt-4 flex justify-between">
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
