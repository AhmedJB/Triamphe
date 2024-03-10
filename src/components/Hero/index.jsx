import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Balocco, Barilla, Ferrero, Lavazza, Mulino } from "../../assets/img";
import { motion } from "framer-motion";

function Hero() {
  const slides = [Mulino, Balocco, Barilla, Ferrero, Lavazza];

  return (
    <>
      <section className={`w-full`}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Autoplay]}
          className="w-full aspect-video"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {slides.map((e, i) => (
            <>
              <SwiperSlide key={`slide-${i} w-full h-full`}>
                {({ isActive }) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: isActive ? 1 : 1,
                      scale: isActive ? 1 : 0.9,
                      transition: {
                        opacity: {
                          duration: 1,
                          scale: 1.5,
                        },
                      },
                    }}
                    style={{
                      backgroundImage: `url(${e})`,
                    }}
                    className={`w-full h-full  custom-bg bg-center bg-no-repeat`}
                  ></motion.div>
                  /* <img
                    src={e}
                    className={`w-full h-full select-none`}
                    data-active={isActive ? "active" : "Not active"}
                  /> */
                )}
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Hero;
