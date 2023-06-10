import React, { useRef, useState } from "react";
import "./MainCarousel.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

const CategoryCarousel = (props) => {
  // const [selectedCategory, setSelectedCategory] = useState(null);

  // const handleCardSwipe = () => {
  //   Simulated card swipe event
  //   const randomCategory =
  //     categories[Math.floor(Math.random() * categories.length)];
  //   setSelectedCategory(randomCategory);
  // };

  const error = "";
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={8}
        navigation={true}
        allowTouchMove={true}
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          375: {
            width: 375,
            slidesPerView: 4,
          },
          // when window width is >= 768px
          414: {
            width: 414,
            slidesPerView: 5,
          },
          // when window width is >= 768px
          660: {
            width: 660,
            slidesPerView: 4,
          },

          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 6,
          },

          // when window width is >= 768px
          991: {
            width: 991,
            slidesPerView: 8,
          },

          // when window width is >= 768px
          1140: {
            width: 1140,
            slidesPerView: 9,
          },
          1680: {
            width: 1680,
            slidesPerView: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper category-slider"
      >
        {error ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              color: "red",
            }}
          >
            <span> {error}</span>
          </p>
        ) : (
          <div>
            {props.products?.map((items, i) => (
              <SwiperSlide key={i + 1} className="group">
                <div
                  className="category-body shadow-sm"
                >
                  <div className="circle-bg shadow-sm">
                    <img className="w-75  " src={items.logo} alt="im" />
                  </div>
                  <p className="pt-2" style={{ fontSize: ".7rem" }}>
                    {items.name}
                  </p>
                </div>
                {/* <div
                style={{ width: "100px", height: "100px",textAlign:"center",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center" }}

                className="text-center cursor-pointer p-3 bg-white rounded-lg flex flex-col justify-center"
              >

              </div> */}
              </SwiperSlide>
            ))}
          </div>
        )}
        <button ref={prevRef} className="prev">
          <IoChevronBackOutline />
        </button>
        <button ref={nextRef} className="next">
          <IoChevronForward />
        </button>
      </Swiper>
    </>

    //////////////////////////////////////////
    // <>
    //   <div className="prev-btn"></div>
    // {props.item.map((items, idx) => {
    //   return (
    // <div className="category-body shadow-sm ms-2 me-2" xs={4} md={1} sm={3} xl={1}>
    //   <div className="circle-bg shadow-sm">
    //     <img className="w-75  " src={items.logo} alt="im" />
    //   </div>
    //   <p className="pt-2" style={{ fontSize: ".7rem" }}>
    //     {items.name}
    //   </p>
    // </div>
    //   );
    // })}
    // </>
  );
};

export default CategoryCarousel;
