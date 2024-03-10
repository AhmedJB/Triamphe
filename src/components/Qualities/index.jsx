import React from "react";
import { Dollar, Milk, Truck } from "../../assets/icons";

function Qualities() {
  return (
    <>
      <div className={`w-full py-6 bg-lightGray`}>
        <div
          className={`container mx-auto flex lg:flex-row flex-col items-center justify-center flex-wrap`}
        >
          <div
            className={`flex items-center md:w-[330px] w-[290px] lg:justify-center justify-left  md:px-6 py-2 px-0 lg:border-r-2 border-r-0 border-black`}
          >
            <img src={Milk} className={`w-[32px] aspect-square `} />
            <p
              className={`text-black font-normal tracking-[.05rem] opacity-85 text-[1.2rem] px-2`}
            >
              Variété de produits
            </p>
          </div>
          <div
            className={`flex items-center md:w-[330px] w-[290px] lg:justify-center justify-left  md:px-6 py-2 px-0 lg:border-r-2 border-r-0 border-black `}
          >
            <img src={Truck} className={`w-[32px] aspect-square`} />
            <p
              className={`text-black font-normal tracking-[.05rem] opacity-85 text-[1.2rem] px-2`}
            >
              Livraison 100% sécurisée
            </p>
          </div>
          <div
            className={`flex items-center md:w-[330px] w-[290px] lg:justify-center justify-left  md:pl-6 py-2 px-0`}
          >
            <img src={Dollar} className={`w-[32px] aspect-square`} />
            <p
              className={`text-black font-normal tracking-[.05rem] opacity-85 text-[1.2rem] px-2`}
            >
              Meilleur prix sur le marché
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Qualities;
