import SquarePattern from "@/src/components/SquarePattern/SquarePattern";
import GalleryHeader from "./components/GalleryHeader";
import GallerySlider from "./components/GallerySlider";

function Gallery() {
  return (
    <div className="bg-muted relative pt-8 pb-13">
      <SquarePattern
        color="bg-[#051F6F]"
        className="top-13 left-10 md:left-1/5"
        size={24}
      />
      <SquarePattern
        color="bg-[#051F6F]"
        className="top-13 right-10 rotate-180 md:right-1/5"
        size={24}
      />

      <GalleryHeader />
      <GallerySlider />
    </div>
  );
}

export default Gallery;
