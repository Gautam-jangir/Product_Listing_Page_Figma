import Button from "../components/Button";
import aglaonemaPlant from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_1.png";
import plantImage3 from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_3.png";
import BagButton from "./BagButton";
import treandyPlantsCard from "../assets/icons/treandyPlantsCard.svg";

function ResponsiveSection() {
  return (
    <div className="flex justify-center">
      <div
        className={`flex justify-between lg:justify-center flex-col lg:flex-row h-[575px] w-full lg:w-[1619px] lg:h-[526px] bg-contain bg-no-repeat relative bg-treandycard`}
      >
        {/* <img
          className="absolute inset-0 rotate-90 lg:rotate-0 scale-y-200 lg:scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src={treandyPlantsCard}
          alt="TreandyPlant"
        /> */}
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <img
            className="w-[300px] h-[366px] lg:w-[601px] lg:h-[732px] absolute top-[-100px] lg:op-[-510px] lg:top-[-206px]"
            src={aglaonemaPlant}
            alt="AglaonemaPlant"
          />
        </div>
        <div className="flex justify-center items-center px-[140px] py-[80px] lg:p-20 lg:px-2 lg:justify-start w-full lg:w-1/2">
          <div className="pt-[0px] lg:pt-0 flex flex-col lg:pl-20">
            <span className="font-semibold text-[19px] lg:text-[38px]">
              For Your Desks Decorations
            </span>
            <span className="font-semibold text-[10px] lg:text-[20px] my-6">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </span>
            <span className="font-semibold text-[19px] lg:text-[38px]">
              Rs.599/-
            </span>
            <div className="mt-4 flex gap-6">
              <Button title="Buy Now" />
              <BagButton bagSize="27px" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex justify-center px-4 overflow-hidden">
    //   <div
    //     className={`
    //   relative

    //   flex
    //   flex-col
    //   lg:flex-row

    //   justify-between
    //   lg:justify-center

    //   w-full
    //   max-w-[1619px]

    //   min-h-[700px]
    //   lg:min-h-[526px]

      
    // `}
    //   >
    //     {/* Background SVG */}
    //     <img
    //       className="
    //     absolute

    // left-1/2
    // top-1/2

    // -translate-x-1/2
    // -translate-y-1/2

    // h-full
    // w-auto

    // lg:w-full
    // lg:h-full

    // object-contain

    // rotate-90
    // lg:rotate-0

    //     pointer-events-none
    //   "
    //       src={treandyPlantsCard}
    //       alt="TreandyPlant"
    //     />

    //     {/* Plant Image Section */}
    //     <div
    //       className="
    //     relative

    //     flex
    //     justify-center

    //     w-full
    //     lg:w-1/2

    //     min-h-[280px]
    //     lg:min-h-full
    //   "
    //     >
    //       <img
    //         className="
    //       absolute

    //       w-[220px]
    //       sm:w-[280px]
    //       lg:w-[601px]

    //       h-auto

    //       top-[-40px]
    //       sm:top-[-70px]
    //       lg:top-[-250px]

    //       object-contain
    //     "
    //         src={aglaonemaPlant}
    //         alt="AglaonemaPlant"
    //       />
    //     </div>

    //     {/* Content */}
    //     <div
    //       className="
    //     relative
    //     z-10

    //     flex
    //     justify-center
    //     items-center

    //     w-full
    //     lg:w-1/2

    //     px-6
    //     sm:px-10
    //     lg:px-2

    //     py-10
    //     lg:py-20
    //   "
    //     >
    //       <div
    //         className="
    //       flex
    //       flex-col

    //       w-full
    //       max-w-[600px]

    //       lg:pl-20
    //     "
    //       >
    //         <span
    //           className="
    //         font-semibold

    //         text-[22px]
    //         sm:text-[28px]
    //         lg:text-[38px]

    //         leading-tight
    //       "
    //         >
    //           For Your Desks Decorations
    //         </span>

    //         <span
    //           className="
    //         font-semibold

    //         text-[13px]
    //         sm:text-[16px]
    //         lg:text-[20px]

    //         my-4
    //         lg:my-6

    //         leading-relaxed
    //       "
    //         >
    //           I recently added a beautiful desk decoration plant to my
    //           workspace, and it has made such a positive difference!
    //         </span>

    //         <span
    //           className="
    //         font-semibold

    //         text-[22px]
    //         sm:text-[28px]
    //         lg:text-[38px]
    //       "
    //         >
    //           Rs.599/-
    //         </span>

    //         <div
    //           className="
    //         mt-6

    //         flex
    //         flex-wrap

    //         gap-4
    //         lg:gap-6
    //       "
    //         >
    //           <Button title="Buy Now" />
    //           <BagButton bagSize="27px" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}


function ResponsiveSectionReverse() {
  return (
    <div className="flex justify-center">
      <div
        className={`flex justify-between lg:justify-center flex-col-reverse lg:flex-row-reverse h-[575px] w-full lg:w-[1619px] lg:h-[526px] bg-contain bg-no-repeat relative`}
      >
        <img
          className="absolute inset-0 rotate-90 lg:rotate-0 scale-y-200 lg:scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src={treandyPlantsCard}
          alt="TreandyPlant"
        />
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <img
            className="w-[732px] h-[732px] absolute lg:top-[-150px]"
            src={plantImage3}
            alt="AglaonemaPlant"
          />
        </div>
        <div className="flex justify-center items-center px-[140px] py-[80px] lg:p-20 lg:px-2 lg:justify-start w-full lg:w-1/2">
          <div className="pt-[0px] lg:pt-0 flex flex-col lg:pl-20">
            <span className="font-semibold text-[19px] lg:text-[38px]">
              For Your Desks Decorations
            </span>
            <span className="font-semibold text-[10px] lg:text-[20px] my-6">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </span>
            <span className="font-semibold text-[19px] lg:text-[38px]">
              Rs.599/-
            </span>
            <div className="mt-4 flex gap-6">
              <Button title="Buy Now" />
              <BagButton bagSize="27px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveSection;
export {ResponsiveSectionReverse};
