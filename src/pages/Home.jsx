import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Navigation, Pagination } from "swiper/modules";

import Welcome from "../components/Welcome";

import Champion from "../components/Champion";

const swiperOptions = {
  modules: [Navigation, EffectFade, Mousewheel, Pagination],
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 1000,
};

function Home() {
  return (
    <Swiper {...swiperOptions}>
      <SwiperSlide>
        {({ isActive }) => {
          return <Champion isActive={isActive} />;
        }}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => <Welcome isActive={isActive} />}
      </SwiperSlide>
    </Swiper>
  );
}

export default Home;
