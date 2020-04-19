import React from "react";
import FASHIONIMG1 from "../../assets/img/fashion-img1.png";
import FASHIONIMG2 from "../../assets/img/fashion-img2.png";
import FASHIONIMG3 from "../../assets/img/fashion-img3.png";
import FASHIONIMG4 from "../../assets/img/fashion-img4.png";
import FASHIONIMG5 from "../../assets/img/fashion-img5.png";
import FASHIONIMG6 from "../../assets/img/fashion-img6.png";
import FASHIONIMG7 from "../../assets/img/fashion-img7.png";
import FASHIONIMG8 from "../../assets/img/fashion-img8.png";
import "./style.scss";

const fashions = [
  { position: "left", title: "Parties", img: FASHIONIMG1 },
  { position: "left", title: "Events", img: FASHIONIMG2 },
  { position: "left", title: "Office", img: FASHIONIMG3 },
  { position: "center", title: "Wedding", img: FASHIONIMG4 },
  { position: "center", title: "Date", img: FASHIONIMG5 },
  { position: "right", title: "Instagram", img: FASHIONIMG6 },
  { position: "right", title: "Tiktok", img: FASHIONIMG7 },
  { position: "right", title: "Business", img: FASHIONIMG8 },
];

const FashionItem = ({ position, title, img }) => {
  return (
    <div className="fashionitem">
      <div
        className={`fashionitem-title ${
          position === "left"
            ? "fashionitem-left"
            : position === "right"
            ? "fashionitem-right"
            : "fashionitem-center"
        }`}
      >
        {title}
      </div>
      <div className="fashionitem-img">
        <img src={img} alt={title}></img>
      </div>
    </div>
  );
};

const ChooseFashion = () => {
  return (
    <div className="choosefashion">
      <div className="choosefashion-title">
        <div className="choosefashion-container app-container">
          <div className="choosefashion-title-container">
            <div className="choosefashion-title-tag"></div>
            <div className="choosefashion-title-content">
              Choose Fahionistas<br></br>
              <span>TO HELP YOU IN</span>
            </div>
          </div>
        </div>
      </div>
      <div className="choosefashion-container app-container">
        <div className="choosefashion-column-container">
          <div className="choosefashion-column1">
            <div className="choosefashion-column1-container">
              <FashionItem {...fashions[0]}></FashionItem>
              <FashionItem {...fashions[1]}></FashionItem>
              <FashionItem {...fashions[2]}></FashionItem>
            </div>
          </div>
          <div className="choosefashion-column2">
            <div className="choosefashion-column2-container">
              <FashionItem {...fashions[3]}></FashionItem>
              <FashionItem {...fashions[4]}></FashionItem>
              <div className="choosefashion-more">
                <p>more</p>
              </div>
            </div>
          </div>
          <div className="choosefashion-column3">
            <div className="choosefashion-column3-container">
              <FashionItem {...fashions[5]}></FashionItem>
              <FashionItem {...fashions[6]}></FashionItem>
              <FashionItem {...fashions[7]}></FashionItem>
              <div className="choosefashion-more choosefashion-mobile">
                <p>more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseFashion;
