import Room from "@/components/Room";
import React from "react";

const RoomsSection = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto mt-20 max-w-7xl">
        <h2 className="my-10 text-center">Stay With Us</h2>
        <div className="flex flex-wrap">
          <Room />
          <Room />
          <Room />
          <Room />
        </div>
      </div>
    </>
  );
};

export default RoomsSection;
