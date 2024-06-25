import React from "react";

const Footer = (): JSX.Element => {
  return (
    <div className="mt-10 border-t">
      <div className="mx-auto flex max-w-7xl flex-col justify-center p-5 md:flex-row md:p-20">
        <div className="md:w-1/2">
          <h3>Diveagar Resort</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="md:w-1/2">
          <h3>Contact Us</h3>
          <p className="my-2">sunnseaholidaysllp@gmail.com</p>

          <p>+91 9175632559</p>
          <p>+91 9356186599</p>
          <p>+91 9819600981</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
