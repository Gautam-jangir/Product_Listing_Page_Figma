import Card from "./Card";
import aglaonemaPlant from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_1.png";
import PlayButton from "./PlayButton";
import CustomerReview from "./CustomerReview";

function EarthsExhale() {
  return (
    <div className="flex lg:flex-row justify-between">
      <div className="w-[802px] lg:max-w-[802px] ml-[39px]">
        <span className="font-semibold text-[118px] text-center lg:text-left  opacity-75">
          Earth's Exhale
        </span>
        <p className="font-medium text-[23px] text-center lg:text-left opacity-75">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's
          natural environment and its essential role in sustaining life.
        </p>
        <div className="flex mt-4 justify-center lg:justify-start">
          <button className="font-normal text-[28px] border py-2 px-10 rounded-2xl">
            Buy Now
          </button>
          <div className="flex ml-8">
            <PlayButton />
            <button className="font-(family-name:--font-indie) font-normal text-[25px] ml-4">
              LiveDemo
            </button>
          </div>
        </div>
        <div className="mt-[173px]">
          <CustomerReview />
        </div>
      </div>
      <div className="hidden mr-[52px] w-[512px] h-[719px] lg:flex lg:justify-center lg:items-end">
        <Card
          plantImage={aglaonemaPlant}
          plantType="Indoor Plant"
          plantName="Aglaonema plant"
        />
      </div>
    </div>
  );
}

export default EarthsExhale;
