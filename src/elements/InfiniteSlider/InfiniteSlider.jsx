import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const InfiniteSlider = (props) => {
  const { items, name } = props;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: name === "logoSlider" ? 6 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <div >
      <Slider {...settings} className={name === "logoSlider" ? 'logoSlider' : 'cartSlider'}>
        {items.map((ele) => (
          <div key={ele.id}>{ele.item}</div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteSlider;
