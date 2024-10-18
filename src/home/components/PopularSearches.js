import React, { useRef } from "react";
import { Box, Typography, Paper, Container, IconButton } from "@mui/material";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"; // Import left icon
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Import right icon
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.png";
import img6 from "../../assets/image6.png";
import img7 from "../../assets/image7.png";
import img8 from "../../assets/image8.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const caseStudies = [
  {
    name: "TREMELY DESIGNS",
    description:
      "This site applies a smart SEO strategy to acquire online clients via long-tail search…",
    image: img1,
  },
  {
    name: "PLAINST TECH",
    description:
      "Currently, 65% of the total traffic on the site and most of the online…",
    image: img2,
  },
  {
    name: "MAINDEX SOLUTIONS",
    description:
      "55% of sales come from organic search. Search traffic is the biggest revenue source…",
    image: img3,
  },
  {
    name: "FOURTH CASE",
    description:
      "Driving traffic and improving conversions through targeted SEO strategies…",
    image: img4,
  },
  {
    name: "TREMELY DESIGNS",
    description:
      "This site applies a smart SEO strategy to acquire online clients via long-tail search…",
    image: img5,
  },
  {
    name: "PLAINST TECH",
    description:
      "Currently, 65% of the total traffic on the site and most of the online…",
    image: img6,
  },
  {
    name: "MAINDEX SOLUTIONS",
    description:
      "55% of sales come from organic search. Search traffic is the biggest revenue source…",
    image: img7,
  },
  {
    name: "FOURTH CASE",
    description:
      "Driving traffic and improving conversions through targeted SEO strategies…",
    image: img8,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false, // Disable default arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PopularSearchesCard = ({ study }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        textAlign: "center",
        height: "350px",
        margin: "0 2rem",
        boxShadow: `0px 4px 20px rgba(0, 0, 0, 0.1)`,
        display: "flex",
        flexDirection: "column",
        cursor: 'pointer',
        // '&:hover': {
        //   transform: 'scale(0.1)',
        // },
      }}
    >
      <Box
        sx={{
          height: "70%",
          overflow: "hidden",
          borderRadius: "12px 12px 0 0",
        }}
      >
        <img
          src={study.image}
          alt={study.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          height: "0%",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
          {study.name}
        </Typography> */}
        <Typography variant="body2" sx={{ mt: 6, color: "#555" }}>
          {study.description}
        </Typography>
      </Box>
    </Paper>
  );
};

const PopularSearches = () => {
  const sliderRef = useRef(null); // Reference to the slider

  const next = () => {
    sliderRef.current.slickNext(); // Move to the next slide
  };

  const previous = () => {
    sliderRef.current.slickPrev(); // Move to the previous slide
  };

  return (
    <Box id="case-studies" sx={{ py: 5, backgroundColor: "#eef2f7" }}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", sm: "30px" },
            color: "#333",
          }}
        >
          Our Case Studies
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "400",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            lineHeight: { xs: "25px", sm: "30px", md: "30px" },
            color: "#95959B",
            textAlign: "center",
          }}
        >
          See all projects
        </Typography>
        <IconButton
          onClick={previous}
          sx={{
            position: "absolute",
            left: "10px",
            top: "60%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Slider ref={sliderRef} {...settings}>
          {caseStudies.map((study, index) => (
            <Box key={index} >
              <PopularSearchesCard study={study} />
            </Box>
          ))}
        </Slider>
        <IconButton
          onClick={next}
          sx={{
            position: "absolute",
            right: "10px",
            top: "60%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Container>
    </Box>
  );
};

export default PopularSearches;
