import React from "react";
import Wave from "../../assets/wave.svg";

function About() {
  return (
    <>
      <section className="w-full bg-goldenLight py-8">
        <div
          className={`container mx-auto flex flex-col items-center justify-center gap-2`}
        >
          <h1
            className={`main-font text-black font-semibold sm:text-[3rem] text-[1.1rem] tracking-[.3rem] text-center`}
          >
            TRIAMPHE DISTRIBUTION
          </h1>
          <p className="main-font text-mainGray font-medium sm:text-[1.5rem] text-[.8rem] tracking-[.1rem] text-center">
            Spécialisée dans la distribution des produits de première nécessité
            au Maroc
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
