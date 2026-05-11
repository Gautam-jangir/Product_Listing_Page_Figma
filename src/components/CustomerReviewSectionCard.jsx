import star from "../assets/icons/star.png";
import starHalf from "../assets/icons/star_half.png";
import customer_1 from "../assets/customer_img/customer_1.png";
import bgCard from "../assets/icons/customerReviewSectionCard.svg"

function CustomerReviewSectionCard() {
  return (
    <div className="flex justify-center items-center w-[252px] lg:w-[512px] lg:h-[480px] flex-col bg-contain bg-no-repeat pl-[58px] pr-[51px] mb-[100px] lg:mb-[0] relative">
      <img className="absolute" src={bgCard} />
      <div className="flex lg:mt-[px]">
        <div className="w-[44px] h-[44px] lg:w-[88px] lg:h-[88px] flex justify-center items-center overflow-hidden rounded-full">
          <img className="object-cover" src={customer_1} alt="customer_1" />
        </div>
        <div className="lg:ml-[38px]">
          <span className="font-semibold lg:text-[38px]">Ronnie Hamill</span>
          <div className="flex">
            <img className="w-[15px] h-[15px] mr-2" src={star} alt="star" />
            <img className="w-[15px] h-[15px] mr-2" src={star} alt="star" />
            <img className="w-[15px] h-[15px] mr-2" src={star} alt="star" />
            <img className="w-[15px] h-[15px] mr-2" src={star} alt="star" />
            <img className=" h-[15px] mr-2" src={starHalf} alt="star_half" />
          </div>
        </div>
      </div>
      <div className="flex mt-[20px] lg:mt-[61px]">
        <span className="font-normal text-[12px] lg:text-[24px] opacity-75">
          such a fresh and vibrant energy to my home. I can't express how
          thrilled I am with my new natural plants! They bring
        </span>
      </div>
    </div>
  );
}

export default CustomerReviewSectionCard;
