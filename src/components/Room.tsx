import Image from "next/image";
import React from "react";

const Room = (): JSX.Element => {
  return (
    <>
      <div className="p-5 md:w-1/2">
        <div className="relative h-60 w-full overflow-hidden rounded-2xl md:h-96">
          <Image
            src={"/images/sns-room.jpg"}
            className="transition-all duration-300 hover:scale-110"
            alt=""
            fill
          />
        </div>
        <h3 className="mt-4">Double Deluxe Room</h3>
        <p className="pb-6 text-lg">
          This Room can occupy 2 people, we have all the modern amenities
          required in a modern hotel, with 24*7 WIFI, television, all major
          toiletries, and also an electric kettle.
        </p>
        <button>Book Now</button>
      </div>
    </>
  );
};

export default Room;
