import star from "../assets/icons/star.png";
import starHalf from "../assets/icons/star_half.png";
import customer_1 from "../assets/customer_img/customer_1.png";

function CustomerReview() {
  return (
    <div className="bg-[url(./assets/icons/customerReviewTopCard.svg)] flex items-start lg:w-[409px] lg:h-[237px] flex-col justify-center p-8 rounded-4xl bg-no-repeat w-[300px] h-[200px]">
      <div className="flex items-center">
        <div className="lg:w-[64px] lg:h-[64px] w-[34px] h-[34px] flex justify-center items-center overflow-hidden rounded-full">
          <img className="object-cover" src={customer_1} alt="customer_1" />
        </div>
        <div className="ml-4">
          <span className="lg:text-[22px]">Ronnie Hamill</span>
          <div className="flex">
            <img
              className="lg:w-[15px] lg:h-[15px] mr-2"
              src={star}
              alt="star"
            />
            <img
              className="lg:w-[15px] lg:h-[15px] mr-2"
              src={star}
              alt="star"
            />
            <img
              className="lg:w-[15px] lg:h-[15px] mr-2"
              src={star}
              alt="star"
            />
            <img
              className="lg:w-[15px] lg:h-[15px] mr-2"
              src={star}
              alt="star"
            />
            <img
              className=" lg:h-[15px] lg:mr-2"
              src={starHalf}
              alt="star_half"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <span className="text-[13px] lg:text-[17px]">
          I can't express how thrilled I am with my new natural plants! They
          bring such a fresh and vibrant energy to my home.
        </span>
      </div>
    </div>
  );
}

export default CustomerReview;
