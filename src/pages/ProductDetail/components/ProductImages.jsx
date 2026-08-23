import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProductImages = ({ images }) => {
  return (
    <div className="bg-primary-100 rounded-2xl mx-auto">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-100 flex items-center justify-center flex-col"
      >
        {images.map((image) => {
          return (
            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
              key={image}
            >
              <img src={image} alt="product Image" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductImages;
