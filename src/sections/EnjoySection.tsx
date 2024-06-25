import Image from "next/image";
import React from "react";

const EnjoySection = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto my-20 flex max-w-7xl flex-col  items-center md:flex-row">
        <div data-aos="fade-right" className="p-5 md:w-1/2">
          <Image
            width={700}
            height={700}
            className="rounded-2xl"
            src={"/images/sns1.jpeg"}
            alt=""
          />
        </div>
        <div data-aos="fade-left" className="p-5 md:w-1/2">
          <h2>Enjoy Vacations at SunNSea</h2>
          <p className="mb-10 mt-5 ">
            A Suvarna temple dedicated to Lord Ganesha is another prime
            attraction of the region With very close proximity from pune and
            Mumbai, we are easily accessible and definitely worth the travel.
            With beautiful rooms we also have a pleasant swimming pool for all
            the after parties along with rain dance, a Business Conclave,
            Conference and also a E- golf cart service for sightseeing. Perfect
            Destination for Birthday Party Weddings Events & Corportate Events.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
};

export default EnjoySection;
