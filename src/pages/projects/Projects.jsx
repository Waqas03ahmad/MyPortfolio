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
// Card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalContent, viewOpen } from "../../store/toggling";

export default function SimpleSlider() {
  const [data, setdata] = useState([
    {
      watch: false,
      id: 1,
      name: "Admin Dashboard",
      discription:
        "Admin Dashboard is for administration but this is based on my basic information. Click view to know more",
      photo:
        "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713681274/Dashboard_xy1ina.jpg",
      video:
        "https://res.cloudinary.com/dt6z3lqko/video/upload/v1714010736/Dashboard_i8ysj3.mp4",
    },
    {
      watch: false,
      id: 2,
      name: "Services",
      discription:
        "We develope user interfaces UI for your projects professoinally and creatively with React and other libraries...",
      photo:
        "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713681275/services_apohhb.jpg",
      video:
        "https://res.cloudinary.com/dt6z3lqko/video/upload/v1714105408/Service_ennowa.mp4",
    },
    {
      watch: false,
      id: 3,
      name: "Languages/Technology",
      discription:
        "Jawascript, Python, Django, CSS, Html, Reactjs, Material UI, Bootstrap, and other more AI tools like ChatGPT, coplit etc..",
      photo:
        "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669251/languages_yuzewr.jpg",
      video:
        "https://res.cloudinary.com/dt6z3lqko/video/upload/v1714010738/Language_strosf.mp4",
    },
    {
      watch: false,
      id: 4,
      name: "Reviews",
      discription:
        "The Reviews have shown in the website is for the demo purpose of including reviews functionality in app..",
      photo:
        "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669240/reviews_iyogew.jpg",
      video:
        "https://res.cloudinary.com/dt6z3lqko/video/upload/v1714010739/Review_dktoaz.mp4",
    },

    {
      watch: false,
      id: 5,
      name: "About",
      discription:
        "About page contained basic information about me. Here is what and how we solve your poblems professionally...",
      photo:
        "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669236/about_d16u5w.jpg",
      video:
        "https://res.cloudinary.com/dt6z3lqko/video/upload/v1714010735/About_uogoak.mp4",
    },
    {
      watch: false,
      id: 6,
      name: "Projects",
      discription:
        "Projects are already listed about all worked I have done, you can check anything just click on view button..",
      photo:
        "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669240/project_a8prin.jpg",
      video:
        "https://res.cloudinary.com/dt6z3lqko/video/upload/v1714010735/About_uogoak.mp4",
    },
  ]);
  const watched = useSelector((e) => e.counter.open);
  const dispatch = useDispatch();
  const handlChanged = (a) => {
    const updated = data.map((val) => {
      if (a == val.id) {
        return { ...val, watch: !watched };
      }
      return val;
    });

    setdata(updated);
  };
  var settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.map((e) => (
        <div key={e}>
          <Card sx={{ maxWidth: "95%" }} elevation={4}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image={e.photo}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {e.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {e.discription}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  dispatch(viewOpen());
                  handlChanged(e.id);
                  dispatch(modalContent(e.video));
                }}
              >
                Watch Video
              </Button>
              <Button size="small">Code</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </Slider>
  );
}
