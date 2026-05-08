import rightArrow from "../assets/icons/right_arrow.png";
import aglaonemaPlant from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_1.png";

import { Button } from "./EarthsExhale";

function ResponsiveCard() {
  return (
    <div className="flex justify-center bg-[#1B2316] px-4 py-10">
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-[15px] overflow-hidden p-6 sm:p-10 gap-10">
        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            className="
          w-[240px]
          sm:w-[320px]
          md:w-[400px]
          h-auto
          object-contain
          drop-shadow-[0_-2.71px_2.71px_rgba(0,0,0,0.0478),
          0_-6.52px_5.32px_rgba(0,0,0,0.0687)]
        "
            src={aglaonemaPlant}
            alt="Aglaonema_Plant"
          />
        </div>

        {/* Content Section */}
        <div
          className="
        flex flex-col
        justify-center
        w-full md:w-1/2
        text-center md:text-left
      "
        >
          <span className="text-base sm:text-lg opacity-75">Indoor Plant</span>

          <h2
            className="
          text-3xl sm:text-4xl lg:text-5xl
          leading-tight
          mt-2
        "
          >
            Aglaonema plant
          </h2>

          <p className="mt-4 text-sm sm:text-base opacity-70">
            Beautiful decorative indoor plant with vibrant leaves perfect for
            home and office spaces.
          </p>

          <div className="mt-6">
            <Button title="Buy Now" />
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex items-center">
              <div className="w-[20px] h-[8px] bg-white rounded-2xl mx-1"></div>
              <div className="w-[8px] h-[8px] bg-white rounded-2xl mx-1"></div>
              <div className="w-[8px] h-[8px] bg-white rounded-2xl mx-1"></div>
            </div>

            {/* Arrow */}
            <div className="w-5 h-5">
              <img
                className="w-full h-full object-contain"
                src={rightArrow}
                alt="Right_Arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveCard;
