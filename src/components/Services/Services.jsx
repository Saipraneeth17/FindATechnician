import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Services.css";
import { sliderSettings } from "../../utils/common";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const handleBook = (card) => {
    navigate('/user/booking', { state: { card } });
  };

  return (
    <div id="services" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Our Services</span>
          <span className="primaryText">Popular Services</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>

                {/* <span className="secondaryText r-price">
                  
                  Basic Price:<span style={{ color: "orange" }}>$</span>
                  <span>{card.price} 
                  <button className="button r-bookButton">
                  <a href="##">Book</a>
                  </button></span>
                  </span> */}
                <span className="secondaryText r-price">
                  <span className="basicPriceLabel">Basic Price:</span>
                  <span className="priceText">
                    <span style={{ color: "orange" }}>₹</span>
                    {card.price}
                    {/* <button className="button r-bookButton"></button> */}

                    <button onClick={() => handleBook(card)} className="button r-bookButton">
                      Book
                    </button>
                  </span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
