import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import StyledSlider from "./StyledProductSlider";

const img =
  "https://www.universityflowerstopekaks.com/system/images/cache/5f647204fd116539a693df1cc5c3c6dc.570x570.jpg";

const images = [
  {
    original: img,

    thumbnail: img,
  },
  {
    original: img,
    thumbnail: img,
  },
  {
    original: img,
    thumbnail: img,
  },
  {
    original: img,
    thumbnail: img,
  },
];

const Slider = () => {
  return (
    <StyledSlider>
      <ImageGallery autoPlay={true} items={images} />
    </StyledSlider>
  );
};
export default Slider;
