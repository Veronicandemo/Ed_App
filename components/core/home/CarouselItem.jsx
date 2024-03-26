import Image from "next/image";
import React from "react";
import { useSwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";

function Tag({ text }) {
  return <p className="text-[#CBB26A]">{`${text}:`}</p>;
}

function CarouselItem({ item, isActive }) {
  const swiperSlide = useSwiperSlide();
  return (
    <div
      className={`flex  overflow-hidden rounded-3xl p-8 ${
        styles.swiper_slide
      } ${
        swiperSlide.isActive
          ? styles.swiperSlideActive
          : styles.swiperSlideInactive
      }`}
    >
      <div className="flex flex-col gap-3">
        <Image
          width={100}
          height={100}
          alt="country flag"
          src={item.country_flag}
          className="flex items-start -ml-1"
        />
        <div
          className={`${styles.name} carousel-item-text text-white flex  items-center  gap-6`}
        >
          {/* {swiperSlide.isActive?"Active":"No"} */}
          <Tag text="Name" />
          {item.name}
        </div>
        <div
          className={`${styles.country} carousel-item-text text-white flex items-center   gap-3`}
        >
          <Tag text="Country" />

          {item.country}
        </div>
        <div
          className={`${styles.skill_set} carousel-item-text text-white flex items-center  gap-4`}
        >
          <Tag text="SkillSet" />
          {item.skill_set}
        </div>
        <div
          className={`${styles.level} carousel-item-text text-white flex items-center flex-row   gap-[29px]`}
        >
          <Tag text="Level" />
          {item.level}
        </div>
        <div
          className={`${styles.gender} carousel-item-text text-white flex items-center gap-[13px]`}
        >
          <Tag text="Gender" />

          {item.gender}
        </div>
        <div
          className={`${styles.profile} carousel-item-text text-white flex items-center   gap-5`}
        >
          <Tag text="Portfolio" />
          {item.profile}
        </div>
      </div>

      <div className="flex gap-3 h-[20%] ml-10  items-center flex-col">
        <Image
          src={item.photo}
          width={150}
          height={150}
          alt={`profile photo for ${item.name}`}
        />
        <p className="carousel-item-text text-brightYellow flex  gap-5">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default CarouselItem;
