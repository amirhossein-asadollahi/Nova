import React from "react";
import ProductCard from "../../../components/common/ProductCard";
import NavigateHeader from "./NavigateHeader";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

const ProductCards = ({title}) => {
  return (
    <>
      <div className="mt-8">
        <NavigateHeader value={title} />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.3}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 2.5, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 20 },
            1536: { slidesPerView: 6, spaceBetween: 24 },
          }}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          navigation
          dir="rtl"
          className="mt-4 grid"
        >
          <SwiperSlide className="mt-4">
            <ProductCard
              title={"لپ تاپ ایسوس 2024"}
              rate={"4.5"}
              price={"23000000"}
              off={30}
              image={"images/product1.png"}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-4">
            <ProductCard
              title={"ایرپاد پرو سفید شرکت اپل"}
              rate={"4.5"}
              price={"36000000"}
              image={"images/product2.png"}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-4">
            <ProductCard
              title={"لپ تاپ ایسوس 2024"}
              rate={"4.5"}
              price={"23000000"}
              off={30}
              image={"images/product1.png"}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-4">
            <ProductCard
              title={"ایرپاد پرو سفید شرکت اپل"}
              rate={"4.5"}
              price={"36000000"}
              image={"images/product2.png"}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-4">
            <ProductCard
              title={"لپ تاپ ایسوس 2024"}
              rate={"4.5"}
              price={"23000000"}
              off={30}
              image={"images/product1.png"}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-4">
            <ProductCard
              title={"ایرپاد پرو سفید شرکت اپل"}
              rate={"4.5"}
              price={"36000000"}
              image={"images/product2.png"}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-4">
            <ProductCard
              title={"ایرپاد پرو سفید شرکت اپل"}
              rate={"4.5"}
              price={"36000000"}
              image={"images/product2.png"}
            />
          </SwiperSlide>
          <SwiperSlide className="mt-4">
            <ProductCard
              title={"لپ تاپ ایسوس 2024"}
              rate={"4.5"}
              price={"23000000"}
              off={30}
              image={"images/product1.png"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

{
  /* <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <ProductCard
            title={"لپ تاپ ایسوس 2024"}
            rate={"4.5"}
            price={"23000000"}
            off={30}
            image={"images/product1.png"}
          />
          <ProductCard
            title={"لپ تاپ ایسوس 2024"}
            rate={"4.5"}
            price={"23000000"}
            image={"images/product2.png"}
          />
          <ProductCard
            title={"لپ تاپ ایسوس 2024"}
            rate={"4.5"}
            price={"23000000"}
            image={"images/product1.png"}
          />
          <ProductCard
            title={"لپ تاپ ایسوس 2024"}
            rate={"4.5"}
            price={"23000000"}
            image={"images/product2.png"}
          />
          <ProductCard
            title={"لپ تاپ ایسوس 2024"}
            rate={"4.5"}
            price={"23000000"}
            image={"images/product1.png"}
          />
          <ProductCard
            title={"لپ تاپ ایسوس 2024"}
            rate={"4.5"}
            price={"23000000"}
            image={"images/product2.png"}
          />
        </div> */
}

export default ProductCards;
