import Image from "next/image";
import React from "react";

const EnjoySection = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto my-20 flex max-w-7xl  flex-col md:flex-row">
        <div className="p-5 md:w-2/3">
          <Image
            width={700}
            height={700}
            className="rounded-2xl"
            src={"/images/sns1.jpeg"}
            alt=""
          />
        </div>
        <div className="p-5 md:w-1/3">
          <h2>Enjoy Vacations at SunNSea</h2>
          <p className="mb-10 mt-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            enim tenetur doloribus voluptatibus quia minus saepe, doloremque
            fuga aspernatur rem atque? Reiciendis natus corporis asperiores
            nesciunt consequatur laborum nobis
          </p>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
};

export default EnjoySection;
