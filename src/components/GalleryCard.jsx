import BagButton from "./BagButton";

function GalleryCard({ cardImage, cardTitle, cardDescription, cardPrice }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[512px] h-[644px] relative backdrop-blur-[15px] bg-[url(./assets/icons/card.svg)] bg-contain bg-no-repeat">
        <div className="absolute top-[-20px] w-full flex justify-center">
          <img
            className="width-[459px] h-[459px] absolute top-[-100px] drop-shadow-[0_-2.71px_2.71px_rgba(0,0,0,0.0478),
            0_-6.52px_5.32px_rgba(0,0,0,0.0687)]"
            src={cardImage}
            alt="Aglaonema_Plant"
          />
        </div>
        <div className="flex flex-col px-20 mb-12 pt-[350px] relative">
          <span className="font-normal text-[38px] opacity-75">
            {/* Indoor Plant */}
            {cardTitle}
          </span>
          <span className="font-normal text-[24px] opacity-75">
            {/* Aglaonema plant */}
            {cardDescription}
          </span>
          <div className="mt-4 flex justify-between">
            <span className="font-normal text-[38px] opacity-75">
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
