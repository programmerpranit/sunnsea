"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosAnimation = (): JSX.Element => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};

export default AosAnimation;
