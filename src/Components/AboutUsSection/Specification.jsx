import React from "react";
import Slider from "react-slick";

// Specification component
export const Specification = () => {
  return (
    <div>
      <h2>Specification</h2>
      <p>Details about the specifications will go here.</p>
    </div>
  );
};

// SimpleSlider component
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Default to 1 slide for mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 3, // Show 3 slides on larger screens
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Specification /> {/* Display the Specification component */}
      
      <Slider {...settings}> {/* Render the slider */}
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
