import Place from "@/components/Place";
import React from "react";

const PlacesOfInterest = (): JSX.Element => {
  return (
    <>
      <div className="bg-opacity-25 py-20  md:p-5">
        <h5 className="text-center">BEST LOCATION</h5>
        <br />
        <h2 className="mx-auto text-center md:w-1/2">Places of Interest</h2>
        <br />

        <div className=" my-10">
          <Place
            name="Diveagar Beach"
            desc="The specialty of the Diveagar is the 5 km long coast, On the right side of which is the Velasachi Khadi (Name of rural Creek) and the Kale river on the left."
            image="/images/places/diveagar.jpg"
            reverse={false}
          />
          <Place
            name="Suvarn ganesh mandir"
            desc="Suvarna Ganesh is a complete idol of Lord Ganesha, but a sculpture of pure 24 caret gold. "
            image="/images/places/suvarn-ganesh-mandir.jpg"
            reverse={true}
          />
          <Place
            name="Harihareshwar mandir"
            desc=" Reckoned as one of the ‘Kashi of the South’ Harihareshwar Temple is an ancient temple, sacred to Lord Shiva."
            image="/images/places/harihareshwar-temple.jpg"
            reverse={false}
          />
          <Place
            name="Shrivardhan Beach"
            desc="The beach is one of the prominent attractions of Shrivardhan town and also one of the popular beaches in Maharashtra."
            image="/images/places/shrivardhan.webp"
            reverse={true}
          />
          <Place
            name="Murud Janjira Fort"
            desc="Murud-Janjira is the local name of a famous fort and tourist spot situated on an island just off the coastal town/city of Murud, in the Raigad district of Maharashtra, India. "
            image="/images/places/murud-janjira-fort.jpg"
            reverse={false}
          />
          <Place
            name="Peshva Wada"
            desc="Statue of Balaji Vishwanath Peshwa at Shrivardhan in Raigad. This area is considered to be the seat of the Peshwas (legendary warriors of Maratha empire) and the statue has been established as a mark of respect."
            image="/images/places/peshwa-wada.jpg"
            reverse={true}
          />
        </div>
      </div>
    </>
  );
};

export default PlacesOfInterest;
