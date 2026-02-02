import React from "react";
import DiscoverMoreButton from "../Button";
import HeroImage from "../../assets/images/banner.png";

export default function Header() {
  return (
    <section className="bg-white">
      <div className="relative max-w-7xl mx-auto bg-[#f8f9fc] py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="z-10 pl-4">
            <span className="inline-block mb-6 rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-700">
              DESIGNING FOR THE FUTURE
            </span>
            <h1 className="text-[40px] lg:text-[60px] font-bold leading-[50px] lg:leading-[74px] text-gray-900">
              Innovative Solutions <br />
              For A <span className="text-blue-600">Digital</span> World
            </h1>

            <div className="mt-10">
              <DiscoverMoreButton href="/about">
                Discover More +
              </DiscoverMoreButton>
            </div>
          </div>

          <div className="relative w-full h-[580px] lg:h-[670px] overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#f8f9fc] to-transparent z-10" />

            <img
              src={HeroImage}
              alt="Hero Image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}