import React from "react";
import "./Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const slider = () => {
  return (
    <div>
      <div className="slider">
        <div className="arrow">
          {/* <div className="arrow1">
            <ArrowBackIosIcon></ArrowBackIosIcon>
          </div> */}
          <div className="img">
          <img src="https://img.ltwebstatic.com/images3_pi/2022/07/14/165778701133bf949376ee723f8f0fae40160aad58.webp"/>
            <img src="https://everstylish.com/pub/media/catalog/product/cache/689aad3dff30df62a7b33021fe130799/j/e/jew221129-3_1.jpg" />
            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15350616/2021/10/7/661b2eb3-0fc5-4b80-bb3c-48073c39e54a1633591795161JewelsGalaxySetof6Gold-TonedClassicStudsHoopEarrings1.jpg"/>
          </div>
          {/* <div className="arrow2">
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </div> */}
        </div>
      </div>
    <h1 className="heading">TOP PICKS</h1>
    </div>
  );
};

export default slider;
