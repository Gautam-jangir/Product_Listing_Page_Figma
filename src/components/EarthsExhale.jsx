import Card from "./Card";
import aglaonemaPlant from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_1.png";
import PlayButton from "./PlayButton";
import CustomerReview from "./CustomerReview";

function EarthsExhale() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 lg:gap-0 px-6 lg:px-0">
  <div className="w-full max-w-[802px] lg:pl-[39px] mt-[80px] lg:mt-[147px] flex flex-col items-center lg:items-start text-center  lg:text-left">
    <span className="font-semibold text-[clamp(42px,8vw,118px)] leading-none opacity-75" >
      Earth's Exhale
    </span>

    <p className=" font-medium text-[16px] sm:text-[18px] lg:text-[23px] opacity-75 mt-4">
      "Earth Exhale" symbolizes the purity and vitality of the Earth's
      natural environment and its essential role in sustaining life.
    </p>

    <div className=" flex flex-row items-center gap-6 mt-8">
      <button className="font-normal text-[12px] lg:text-[28px] border py-2 px-8 lg:px-10 rounded-2xl">
        Buy Now
      </button>

      <div className="flex items-center">
        <PlayButton />

        <button className="font-(family-name:--font-indie) font-normal text-[20px] lg:text-[25px] ml-4">
          LiveDemo
        </button>
      </div>
    </div>

    <div className="mt-[60px] lg:mt-[173px] w-full flex justify-center lg:justify-start">
      <CustomerReview />
    </div>
  </div>

  <div className="w-full max-w-[512px] flex justify-center items-center mt-6 lg:mt-[95px] lg:mr-[52px]">
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
