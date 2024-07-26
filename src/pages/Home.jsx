import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Navigation, Pagination } from "swiper/modules";


import Welcome from "../components/Welcome";






const swiperOptions = {
  modules:[Navigation,EffectFade,Mousewheel,Pagination],
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
      {({ isActive }) => (
      <Welcome isActive={isActive}/>
    )}


      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default Home;
