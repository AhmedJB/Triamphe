import React from "react";

function ProductCard({ title, url }) {
  return (
    <>
      <div
        className={`w-[300px] h-[300px] max-w-full bg-white flex flex-col shadow-1`}
      >
        <div
          style={{
            backgroundImage: `url(${url})`,
          }}
          className={`w-full h-[80%] bg-center  bg-no-repeat bg-contain border-b-2 border-lightGray `}
        />
        <h1
          className={`text-black text-center font-medium text-[1.3rem] tracking-[.1rem] flex-1 grid place-items-center`}
        >
          {title}
        </h1>
      </div>
    </>
  );
}

export default ProductCard;
