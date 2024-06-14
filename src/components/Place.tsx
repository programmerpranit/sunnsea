import Image from "next/image";
import React from "react";

interface PlaceProps {
  image: string;
  name: string;
  desc: string;
  reverse: boolean;
}

const Place = ({ image, name, desc, reverse }: PlaceProps): JSX.Element => {
  return (
    <>
      <div
        className={`bg-accent mx-auto flex max-w-7xl flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="h-72 overflow-hidden md:h-96  md:w-1/2">
          <Image
            src={image}
            className="h-full w-full object-cover duration-300 hover:scale-110"
            width={700}
            height={400}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:w-1/2">
          <h3>{name}</h3>
          <br />
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Place;
