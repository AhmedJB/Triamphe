import React from "react";
import { Contact, Logo2 } from "../../assets/img";
import { Globe, Local, Message, Phone } from "../../assets/icons";

function Footer() {
  return (
    <>
      <section className={`w-full bg-lightGray my-2`} id={`contact`}>
        <div
          className={`max-w-full w-[900px] mx-auto flex items-center flex-wrap-reverse justify-center`}
        >
          <div
            className={`sm:w-[500px] w-full flex lg:flex-col flex-col-reverse`}
          >
            <img
              src={Logo2}
              className={`lg:w-[300px] w-[200px] self-center lg:mb-12 mb-6`}
            />
            <ul className={`flex flex-col list-none gap-1 sm:p-0 p-4`}>
              <li className={`flex items-center gap-3`}>
                <img
                  src={Phone}
                  className={`sm:w-[32px] w-[20px] aspect-square`}
                />
                <p
                  className={`text-black font-semibold sm:text-[1.5rem] text-[1rem]`}
                >
                  +212 620-754236
                </p>
              </li>
              <li className={`flex items-center gap-3`}>
                <img
                  src={Globe}
                  className={`sm:w-[32px] w-[20px] aspect-square`}
                />
                <p
                  className={`text-black font-semibold sm:text-[1.5rem] text-[1rem]`}
                >
                  www.triamphe-distribution.ma
                </p>
              </li>
              <li className={`flex items-center gap-3`}>
                <img
                  src={Message}
                  className={`sm:w-[32px] w-[20px] aspect-square`}
                />
                <p
                  className={`text-black font-semibold sm:text-[1.5rem] text-[1rem]`}
                >
                  contact@triamphe-distribution.ma
                </p>
              </li>
              <li className={`flex items-center gap-3`}>
                <img
                  src={Local}
                  className={`sm:w-[32px] w-[20px] aspect-square`}
                />
                <p
                  className={`text-black font-semibold sm:text-[1.5rem] text-[1rem]`}
                >
                  J2HJ+8XG Houara, 46000 Tanger Maroc
                </p>
              </li>
            </ul>
          </div>
          <img src={Contact} className={`w-[400px] aspect-square max-w-full`} />
        </div>
      </section>
    </>
  );
}

export default Footer;
