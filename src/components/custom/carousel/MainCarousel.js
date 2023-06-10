import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./MainCarousel.css"

//internal import
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchcarouselList } from 'src/store/slice/Carousel/carouselListSlice';
// import { useEffect } from 'react';

const MainCarousel = () => {
  // const dipatch = useDispatch()

  // useEffect(() => {
  //   dipatch(fetchcarouselList())
  // }, [])
  
  // const {carouselList} = useSelector((state)=>state.carouselListSlice)

    const data = [
    {
      image: "image/slider-1.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFusOMV7-vhjacakU8DNMJZMy1ZPEbtdId5w&usqp=CAU",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFusOMV7-vhjacakU8DNMJZMy1ZPEbtdId5w&usqp=CAU",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide
          style={{overflow:"hidden",borderRadius:"15px"}}
            className="h-100 w-100 relative rounded-lg overflow-hidden"
            key={i + 1}
          >
            <div className='hero-img'>
              <img
                layout="responsive"
                // width={950}
                // height={400}
                src={item.image}
                alt="not found"
                style={{objectFit:"cover"}}
                className='w-100'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainCarousel
