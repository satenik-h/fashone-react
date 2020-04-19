import React, { useEffect } from "react";
import Swiper from "swiper";
import TESTIMG1 from "../../assets/img/Anna.jpg";
import TESTIMG2 from "../../assets/img/Olivia.jpg";
import TESTIMG3 from "../../assets/img/Sandra.jpg";
import TESTIMG4 from "../../assets/img/Luisa.png";
import "swiper/css/swiper.css";
import "swiper/css/swiper.min.css";
import "./style.scss";

const testimonialdata = [
  {
    author: "Anna - Instagrammer",
    content:
      "Instagram is really competitive these days , You need to look good every single day. Fashone is an amazing idea to consult an expert even while you are not in town and you can also earn parallel by giving fashion,styling and beauty tips to thousands of your followers.",
    img: TESTIMG1,
  },
  {
    author: "Olivia - Model",
    content:
      "Modeling industry is about to be transformed by Fashone. Every time we have fashion shoots , we always have to dependent on existing stylist or even Internet. Most models are constantly searching for style and clothing consulting . This idea can be boon to Modeling and Fashionista industry.",
    img: TESTIMG2,
  },
  {
    author: "Sandra - Salon Owner",
    content:
      "I am running Salon industry from last 10 years  in London. Never thought I can help my clients online via video consult for some small fashion things. It will also often help me to engage with my current clients hassle free anytime anywhere.Fashone will help me grow by business exponentially.",
    img: TESTIMG3,
  },
  {
    author: "Luisa - Fashion Student",
    content:
      "Fashion Students like me are always looking to work part-time in fashion & salon industry .I think its a revolutionary idea for changing the whole fashion world. Love the use of technology in fashion & styling area. I can simply open online boutique in Fashone with no cost and fashion consult hundreds of fashion seekers.",
    img: TESTIMG4,
  },
];

function TestimonialItem({ author, content, img }) {
  return (
    <div className="testimonialitem">
      <div className="testimonialitem-img">
        <div className="testimonialitem-img-container">
          <img src={img} alt="testimg"></img>
        </div>
        <div className="testimonialitem-img-mobile">
          <p>{author}</p>
        </div>
      </div>
      <div className="testimonialitem-desc">
        <div className="testimonialitem-desc-content">{content}</div>
        <div className="testimonialitem-desc-author">{author}</div>
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
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {testimonialdata.map((item, index) => {
          return (
            <div key={index} className="swiper-slide">
              <TestimonialItem {...item}></TestimonialItem>
            </div>
          );
        })}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}

export default Testimonial;
