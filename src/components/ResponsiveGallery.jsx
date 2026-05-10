import aglaonemaPlant from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_1.png";
import GalleryCard from "./GalleryCard";

function ResponsiveGallery() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <GalleryCard
          cardImage={aglaonemaPlant}
          cardTitle={"Swiss cheese Plant"}
          cardDescription={
            "It is a popular tropical houseplant known for its distinctive, perforated leaves"
          }
          cardPrice={"Rs. 400/-"}
        />
        <GalleryCard
          cardImage={aglaonemaPlant}
          cardTitle={"Swiss cheese Plant"}
          cardDescription={
            "It is a popular tropical houseplant known for its distinctive, perforated leaves"
          }
          cardPrice={"Rs. 400/-"}
        />
        <GalleryCard
          cardImage={aglaonemaPlant}
          cardTitle={"Swiss cheese Plant"}
          cardDescription={
            "It is a popular tropical houseplant known for its distinctive, perforated leaves"
          }
          cardPrice={"Rs. 400/-"}
        />
      </div>
    </div>
  );
}

export default ResponsiveGallery;
