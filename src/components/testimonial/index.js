import React, { useEffect } from "react";
import Swiper from "swiper";
import TESTIMG1 from "../../assets/img/test-img1.png";
import "swiper/css/swiper.css";
import "swiper/css/swiper.min.css";
import "./style.scss";

function TestimonialItem() {
  return (
    <div className="testimonialitem">
      <div className="testimonialitem-img">
        <div className="testimonialitem-img-container">
          <img src={TESTIMG1} alt="testimg"></img>
        </div>
        <div className="testimonialitem-img-mobile">
          <p>Liza Avon</p>
        </div>
      </div>
      <div className="testimonialitem-desc">
        <div className="testimonialitem-desc-content">
          Fashion is a thing that we have to keep up with, whether you like it
          or not. Anyway it’s important to look attractive. But it doesn’t mean
          that you should be a fashion-conscious. It may turn to a waste of
          money. If a person doesn’t have good taste he is not able to put
          things together. Trendy people want to stand out in a crowd, but
          sometimes they don’t look stylish.
        </div>
        <div className="testimonialitem-desc-author">Liza Avon</div>
      </div>
    </div>
  );
}

function Testimonial() {
  useEffect(() => {
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
    });
  });

  return (
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <TestimonialItem></TestimonialItem>
        </div>
        <div class="swiper-slide">
          <TestimonialItem></TestimonialItem>
        </div>
        <div class="swiper-slide">
          <TestimonialItem></TestimonialItem>
        </div>
        <div class="swiper-slide">
          <TestimonialItem></TestimonialItem>
        </div>
      </div>
      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  );
}

export default Testimonial;
