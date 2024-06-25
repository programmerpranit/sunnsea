import Image from "next/image";
import React from "react";

const AboutSection = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto my-20 flex max-w-7xl flex-col items-center md:flex-row">
        <div data-aos="fade-right" className="p-5 md:w-1/2 ">
          <h2>About Us</h2>
          <p className="mb-10 mt-5 ">
            We are delighted to inform our beloved guests, that we at Diveagar
            have come up with the biggest resort in vicinity, with 45 well
            appointed rooms we also have a beautiful coffee shop to make you
            overcome your Monday blues. With beautiful palm trees, pristine blue
            ocean and the pitch white sand, we are pretty sure that the
            surroundings along with our warm hospitality will make this a once
            in a lifetime experience for you.
          </p>
          <button>Read More</button>
        </div>
        <div data-aos="fade-left" className="flex justify-end p-5 md:w-1/2 ">
          <Image
            width={700}
            height={700}
            src={"/images/sns1.jpeg"}
            className="rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
