import React from "react";
import "./MainCarousel.css";
import { Carousel, CarouselItem } from "react-bootstrap";

const MainCarousel = () => {
  const data = [
    {
      image: "image/slider-1.jpg",
    },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFusOMV7-vhjacakU8DNMJZMy1ZPEbtdId5w&usqp=CAU",
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFusOMV7-vhjacakU8DNMJZMy1ZPEbtdId5w&usqp=CAU",
    // },
  ];
  return (
    <>
      <Carousel variant="dark" style={{ height: "250px" }}>
        {data?.map((items, idx) => {
          return (
            <CarouselItem key={idx} interval={1000}>
              <img
                style={{ height: "250px" }}
                className="d-block w-100"
                src={items?.image}
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
};

export default MainCarousel;
