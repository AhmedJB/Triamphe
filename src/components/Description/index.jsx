import React from "react";
import { Juice, Transport } from "../../assets/img";

function Description() {
  return (
    <section className={`w-full my-14`}>
      <div className={`container mx-auto`}>
        <div
          className={`w-full flex items-center flex-wrap-reverse justify-center gap-0`}
        >
          <div
            className={`flex flex-col items-center max-w-full w-[500px] lg:pr-4 lg:p-0 p-3`}
          >
            <h1 className={`text-[2rem] text-golden font-semibold text-center`}>
              Votre succès, notre engagement
            </h1>
            <p
              className={`text-black font-medium sm:text-[1.4rem] text-[1.1rem] text-justify mt-4 `}
            >
              Nous nous assurons de répondre aux demandes du marché marocain en
              ajustant notre offre aux habitudes de consommation des clients.
              Notre large gamme de produits nous démarque à travers tout le
              pays, notamment avec notre assortiment varié.
            </p>
          </div>
          <img src={Juice} className={`w-[500px] aspect-square`} />
        </div>

        <div
          className={`w-full flex items-center flex-wrap justify-center gap-0`}
        >
          <img src={Transport} className={`w-[500px] aspect-square`} />
          <div
            className={`flex flex-col items-center max-w-full w-[500px]  lg:pl-4 lg:p-0 p-3`}
          >
            <h1 className={`text-[2rem] text-golden font-semibold text-center`}>
              Ensemble, cultivons la confiance
            </h1>
            <p
              className={`text-black font-medium sm:text-[1.4rem] text-[1.1rem] text-justify mt-4`}
            >
              Nous assurons une distribution des produits au niveau national
              pour couvrir la demande des clients, en toute sécurité et
              prospérité!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
