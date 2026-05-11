import plantImage1 from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_1.png";
import plantImage2 from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_2.png";
import plantImage3 from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_4.png";
import plantImage4 from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_5.png";
import plantImage5 from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_6.png";
import plantImage6 from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_7.png";

import GalleryCard from "./GalleryCard";

function ResponsiveGallery() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center ">
        <GalleryCard
          cardImage={plantImage1}
          cardTitle={"Aglaonema plant"}
          cardDescription={
            "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care"
          }
          cardPrice={"Rs. 300/-"}
        />
        <GalleryCard
          cardImage={plantImage2}
          cardTitle={"Plantain Lilies"}
          cardDescription={
            "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,"
          }
          cardPrice={"Rs. 380/-"}
        />
        <GalleryCard
          cardImage={plantImage3}
          cardTitle={"Cactus"}
          cardDescription={
            "It is known for their ability to thrive in arid environments"
          }
          cardPrice={"Rs. 259/-"}
        />
        <GalleryCard
          cardImage={plantImage4}
          cardTitle={"Swiss cheese Plant"}
          cardDescription={
            "It is a popular tropical houseplant known for its distinctive, perforated leaves"
          }
          cardPrice={"Rs. 400/-"}
        />
        <GalleryCard
          cardImage={plantImage5}
          cardTitle={"Sansevieria plant"}
          cardDescription={
            "It is a popular indoor plant admired for its striking appearance and low-maintenance nature."
          }
          cardPrice={"Rs. 405/-"}
        />
        <GalleryCard
          cardImage={plantImage6}
          cardTitle={"Agave plant"}
          cardDescription={
            "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms."
          }
          cardPrice={"Rs. 359/-"}
        />
      </div>
    </div>
  );
}

export default ResponsiveGallery;
