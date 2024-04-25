{
  /* <video
      autoPlay
      loop
      muted
      poster="https://assets.codepen.io/6093409/river.jpg"
    >
      <source
        src="https://res.cloudinary.com/dt6z3lqko/video/upload/v1714010739/Review_dktoaz.mp4"
        type="video/mp4"
      />
    </video> */
}

// "https://res.cloudinary.com/dt6z3lqko/video/upload/v1714010739/Review_dktoaz.mp4"
// "https://res.cloudinary.com/dt6z3lqko/video/upload/v1714010738/Language_strosf.mp4"
// "https://res.cloudinary.com/dt6z3lqko/video/upload/v1714010735/About_uogoak.mp4"
// "https://res.cloudinary.com/dt6z3lqko/video/upload/v1714010736/Dashboard_i8ysj3.mp4"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "@mui/material";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
        <Button variant="contained"  key={e}>{e}</Button>
      ))}
    </Slider>
  );
}
