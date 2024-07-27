import React from "react";
import HomeSection from "./HomeSection";
import bg2 from "../assets/images/bg-2.jpg";
import ChampionCard from "./ChampionCard";
import {championsData} from "../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";

function Champion(props) {
  return (
    <HomeSection
      className={`champion ${props.isActive ? "active" : ""}`}
      contentClassName="overlay"
      bgImage={bg2}
    >
      <div className="container relative">
        <div className="champion-list">
          <Swiper
          slidesPerView={'auto'}
          spaceBetween={0}
          grabCursor={true}
          nested={true}

          
          >
            {championsData.map((item, index) => (
              <SwiperSlide key={index}>
                <ChampionCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </HomeSection>
  );
}

export default Champion;
