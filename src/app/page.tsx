import AboutSection from "@/sections/AboutSection";
import EnjoySection from "@/sections/EnjoySection";
import PlacesOfInterest from "@/sections/PlacesOfInterest";
import RoomsSection from "@/sections/RoomsSection";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <h3 className="mx-auto my-40 max-w-xl text-center italic leading-tight">
        “A place that celebrates life rather than sucks life out of it.”
      </h3>

      <EnjoySection />
      <AboutSection />
      <RoomsSection />
      <div className="py-10"></div>
      <PlacesOfInterest />
    </>
  );
}
