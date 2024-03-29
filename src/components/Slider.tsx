/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Cosmo from "../image/Cosmo.svg";
import Fly from "../image/Fly.svg";
import Stalker from "../image/Stalker.svg";
import War from "../image/War.svg";
import Up from "../image/Uppd.svg";

export type SlaiderImageType = {};

const imageSlaider = [Stalker, War, Fly, Cosmo];

export const Slaider: React.FC<SlaiderImageType> = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {imageSlaider.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt="Image" className="image" />
          <div className="conteiner_slider">
            <div className="title">
              <h3>Сервис облачного гейминга</h3>
              <h1>Преврати свое устройство в игровое</h1>
            </div>
            <div className="link_upp">
              <a href="#upgr">
                <img src={Up} alt="Upgrade" />
                <p>UPGRADE</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
