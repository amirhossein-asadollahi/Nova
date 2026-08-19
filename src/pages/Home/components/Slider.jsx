import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../../../components/common/Button";
import { MoveLeft } from "lucide-react";
import Badge from "../../../components/ui/Badge";

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        dir="rtl"
        className="mt-8 w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl"
      >
        <SwiperSlide className="relative">
          <Badge
            value={"فروش ویژه"}
            bgColor={"bg-primary"}
            position={"absolute top-8 right-20"}
          />
          <img
            className="w-full h-full object-cover"
            src="/images/Slider1.png"
            alt="Slider"
          />
          <Button
            value={"مشاهده محصولات"}
            bgColor={"bg-primary"}
            icon={<MoveLeft />}
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Badge
            value={"تخفیف ویژه"}
            bgColor={"bg-primary"}
            position={"absolute top-8 right-20"}
          />
          <img
            className="w-full h-full object-cover"
            src="/images/Slider2.png"
            alt="Slider"
          />
          <Button
            value={"مشاهده محصولات"}
            bgColor={"bg-primary"}
            icon={<MoveLeft />}
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Badge
            value={"پر طرفدار"}
            bgColor={"bg-primary"}
            position={"absolute top-8 right-20"}
          />
          <img
            className="w-full h-full object-cover"
            src="/images/Slider3.png"
            alt="Slider"
          />
          <Button
            value={"مشاهده محصولات"}
            bgColor={"bg-primary"}
            icon={<MoveLeft />}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
