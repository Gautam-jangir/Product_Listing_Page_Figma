import Button from "../components/Button";
import aglaonemaPlant from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_1.png";
import rightArrow from '../assets/icons/right_arrow.png'

function OurBesto2Section({ flexDirection = "row" }) {
  return (
    <div className="flex justify-center">
      <div
        className={`flex justify-center flex-col lg:flex-${flexDirection}  sm:w-[512px] sm:h-[644px] lg:w-[1600px] lg:h-[755px] bg-[url(./assets/icons/ourBesto2Card.svg)] bg-contain bg-no-repeat backdrop-blur-[15px]`}
      >
        <div className="flex justify-center w-full lg:w-1/2 relative">
          {/* <div className="w-[459px] h-[459px] bg-amber-300 absolute top-[-40px] lg:static"></div> */}
          <img
            className="w-[601px] h-[732px] absolute top-[-510px] lg:top-[-250px]"
            src={aglaonemaPlant}
            alt="AglaonemaPlant"
          />
        </div>
        <div className="flex justify-center items-center p-20 lg:px-2 lg:justify-start w-full lg:w-1/2">
          <div className="pt-[320px] lg:pt-0 flex flex-col pl-20">
            <span className="font-semibold text-[38px]">
              We Have Small And Best O2 Plants Collection’s
            </span>
            <span className="font-semibold text-[28px] my-6">
              Oxygen-producing plants, often referred to as "O2 plants," are
              those that release oxygen into the atmosphere through the process
              of photosynthesis.
            </span>
            <span className="font-semibold text-[20px] my-6">
              Many plants can help filter out pollutants and toxins from the
              air, such as formaldehyde, benzene, and trichloroethylene. This
              makes the air cleaner and healthier to breathe.
            </span>
            <div className="mt-4 flex gap-6 justify-between items-center mr-[91px]">
              <div>
                <Button title="Explore" />
              </div>
              <div className="flex">
                <img
                  className="rotate-180 opacity-35 w-[24px] h-[24px]"
                  src={rightArrow}
                  alt="right_arrow"
                />
                <div>
                  <span className="font-bold text-[20px]">01</span>
                  <span className="font-bold text-[20px]">/</span>
                  <span className="font-bold text-[15px]">04</span>
                </div>
                <img
                  className="w-[24px] h-[24px]"
                  src={rightArrow}
                  alt="right_arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBesto2Section;
