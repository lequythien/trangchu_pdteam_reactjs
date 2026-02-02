import React from "react";
import { MdAdd } from "react-icons/md";

export function GalleryItem({ img }) {
  return (
    <div className="relative group overflow-hidden rounded-md">
      <img
        src={img}
        alt="Gallery Image"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl m-4">
        <div className="text-center text-blue-600 font-semibold">
          <MdAdd className="text-2xl mx-auto mb-2" />
          <a
            href="#"
            className="relative flex items-center gap-1 text-sm sm:text-base font-semibold
                       text-blue-600 transition-colors duration-300
                       after:content-[''] after:absolute after:left-0 after:-bottom-1
                       after:h-[1px] after:w-0 after:bg-blue-600
                       after:transition-all after:duration-300
                       hover:after:w-full"
          >
            MORE PROJECT
          </a>
        </div>
      </div>
    </div>
  );
}
