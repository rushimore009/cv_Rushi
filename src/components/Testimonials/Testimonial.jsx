import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.png";
import profilePic3 from "../../img/profile3.png";
import profilePic4 from "../../img/profile4.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Exceptional interior design! The attention to detail and seamless blend of style and comfort truly transformed our space into a haven. Every corner tells a story, reflecting our personality brilliantly." },
    {
      img: profilePic2,
      review:
      
      "The exterior design surpassed all expectations, elevating our curb appeal to new heights. The harmonious fusion of architecture and landscaping has redefined the way we perceive our home's surroundings."   },
    {
      img: profilePic3,
      review:
      "The furniture design is a masterpiece of both form and function. Every piece not only complements the space but also adds a unique touch of elegance, making our living environment truly exceptional."
   },
    {
      img: profilePic4,
      review:
      
"The construction was executed flawlessly, reflecting a remarkable level of craftsmanship and attention to detail. The end result is a testament to their expertise, creating a structure that's both robust and visually stunning." },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients Review... </span>
        
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
