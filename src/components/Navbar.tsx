"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = (): JSX.Element => {
  const [pathname, setPathname] = useState("/");
  const [toggle, setToggle] = useState(false);

  const path = usePathname();

  useEffect(() => {
    setPathname(path);
  }, [path]);

  return (
    <>
      <nav className="flex w-screen flex-col justify-evenly overflow-hidden md:flex-row">
        <div className="logo flex h-32 items-center justify-between p-5  max-md:border-b">
          <Link href={"/"}>
            <Image
              className="object-contain"
              src={"/images/sns-logo.jpg"}
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="flex h-8 w-8 flex-col justify-evenly md:hidden"
          >
            <div className="line h-0.5 w-full bg-primary"></div>
            <div className="line h-0.5 w-full bg-primary"></div>
            <div className="line h-0.5 w-full bg-primary"></div>
          </div>
        </div>
        <div
          className={`links  ${toggle ? "translate-x-0" : "max-md:translate-x-[100vw]"} absolute right-0 z-50 flex flex-col items-center gap-10 bg-white
        p-5 transition-all duration-500 ease-in-out max-md:top-32 max-md:h-[90vh] max-md:w-2/3 max-md:border-l md:relative md:flex-row`}
        >
          <Link href="/about">
            <p
              className={`font-medium ${
                pathname === "/about" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              About
            </p>
          </Link>
          <Link href="/rooms">
            <p
              className={`font-medium ${
                pathname === "/services" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              Rooms
            </p>
          </Link>
          <Link href="/gallary">
            <p
              className={`font-medium ${
                pathname === "/blogs" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              Gallary
            </p>
          </Link>
          <Link href="/contact">
            <p
              className={`font-medium ${
                pathname === "/contact" ? "text-primary" : "text-heading"
              } hover:text-primary`}
            >
              Contact
            </p>
          </Link>
          <Link href="/contact">
            <button>Book Now</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
