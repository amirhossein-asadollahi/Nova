import { CloudUpload } from "lucide-react";
import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";

const ProductUploadImageForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const uploadFileHandler = (e) => {
    const imageFiles = Array.from(e.target.files);
    setSelectedFiles((prev) => [...prev, ...imageFiles]);
  };
  return (
    <div className="bg-white px-4 py-2 border-2 flex flex-col items-start space-y-4 border-border rounded-lg">
      <div className="">
        <h2 className="text-xl font-bold">تصاویر محصول</h2>
        <p className="text-xs text-slate-600">
          اولین تصویر انتخابی در ابتدا نمایش داده خواهد شد
        </p>
      </div>
      <label
        htmlFor="product-images"
        className="w-full h-60 bg-slate-50 hover:bg-slate-100 flex flex-col items-center px-4 py-2 border-border rounded-lg cursor-pointer"
      >
        <CloudUpload className="text-primary mt-12 m-4" size={48} />
        <h3 className="text-lg font-bold">برای آپلود تصویر کلیک کنید</h3>
        <input
          id="product-images"
          type="file"
          onChange={uploadFileHandler}
          multiple
          accept="image/*"
          className="hidden group"
        />
      </label>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        loop={false}
        pagination={{ clickable: true }}
        dir="rtl"
        className="grid grid-cols-4 gap-4 w-84 h-42"
      >
        {selectedFiles.map((image, index) => {
          return (
            <SwiperSlide className="relative">
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Product ${index + 1}`}
                className="w-48 h-32 object-cover rounded-lg border-2 border-border cursor-pointer hover:border-primary"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductUploadImageForm;
