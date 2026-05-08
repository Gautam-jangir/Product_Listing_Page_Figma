import star from "../assets/icons/star.png";
import starHalf from "../assets/icons/star_half.png";
import customer_1 from "../assets/customer_img/customer_1.png";

function CustomerReview() {
  return (
    <div className="bg-[url(./assets/icons/customerReviewTopCard.svg)] flex items-start w-[409px] h-[237px] flex-col justify-center p-8 rounded-4xl">
      <div className="flex items-center">
        <div className="w-[64px] h-[64px] flex justify-center items-center overflow-hidden rounded-full">
          <img className="object-cover" src={customer_1} alt="customer_1" />
        </div>
        <div className="ml-4">
          <span className="text-[22px]">Ronnie Hamill</span>
          <div className="flex">
            <img className="w-[15px] h-[15px] mr-2" src={star} alt="star" />
            <img className="w-[15px] h-[15px] mr-2" src={star} alt="star" />
            <img className="w-[15px] h-[15px] mr-2" src={star} alt="star" />
            <img className="w-[15px] h-[15px] mr-2" src={star} alt="star" />
            <img className=" h-[15px] mr-2" src={starHalf} alt="star_half" />
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        I can't express how thrilled I am with my new natural plants! They bring
        such a fresh and vibrant energy to my home.
      </div>
    </div>
  );
}

export default CustomerReview;
