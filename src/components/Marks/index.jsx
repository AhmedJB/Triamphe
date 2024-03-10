import React from "react";
import {
  BaloccoImage,
  BarillaImage,
  BertolliImage,
  Dellos,
  FerreroImage,
  Kimbo,
  MM,
  Manzotin,
  Melegatti,
  Nescafe,
  Nesquik,
  Rio,
} from "../../assets/marques";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Marks() {
  const marks = [
    BarillaImage,
    BaloccoImage,
    BertolliImage,
    Dellos,
    FerreroImage,
    Kimbo,
    Manzotin,
    Melegatti,
    MM,
    Nescafe,
    Nesquik,
    Rio,
  ];

  return (
    <section className={`w-full my-[4rem]`}>
      <div className={`container mx-auto py-10 `}>
        <h1
          className={`sm:text-[3rem] text-[2rem] text-black tracking-[.3rem] font-semibold text-center`}
        >
          NOS MARQUES
        </h1>
        <p
          className={`mb-8 text-black font-normal text-center sm:text-[1.8rem] text-[1.3rem]`}
        >
          Nous proposons un large choix qui satisfera vos besoins!
        </p>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            1000: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className={`h-[160px] max-w-full w-[800px]`}
        >
          {marks.map((e, i) => {
            return (
              <SwiperSlide className={`cursor-pointer select-none`}>
                <div key={`mark-${i}`} className={`p-4 rounded-lg shadow-1`}>
                  <img src={e} className={`w-full aspect-video`} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div className={`flex items-center gap-3 flex-wrap justify-center`}>
          {marks.map((e, i) => {
            return (
              <div key={`mark-${i}`} className={`p-4 rounded-lg shadow-1`}>
                <img src={e} className={`w-[100px] aspect-video`} />
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}

export default Marks;
