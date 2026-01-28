import React, { useRef, useState, useEffect, useCallback } from "react";
import Client1 from "../../../assets/images/client-slider-1.svg";
import Client2 from "../../../assets/images/client-slider-2.svg";
import Client3 from "../../../assets/images/client-slider-3.svg";
import Client4 from "../../../assets/images/client-slider-4.svg";

const clients = [Client1, Client2, Client3, Client4];

export default function ClientSlider() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    if (!sliderRef.current) return;

    const updateWidth = () => {
      const firstChild = sliderRef.current?.children[0];
      if (firstChild) {
        const w = firstChild.offsetWidth + 80;
        setSlideWidth(w * clients.length);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (slideWidth === 0) return;

    let newTranslate = translateX;

    // Infinite loop logic
    if (newTranslate > 0) {
      newTranslate -= slideWidth;
    } else if (newTranslate <= -slideWidth) {
      newTranslate += slideWidth;
    }

    if (newTranslate !== translateX) {
      setTranslateX(newTranslate);
    }
  }, [translateX, slideWidth]);

  const onStart = useCallback((clientX) => {
    setIsDragging(true);
    setStartX(clientX);
  }, []);

  const onMove = useCallback(
    (clientX) => {
      if (!isDragging) return;
      const diff = clientX - startX;
      setStartX(clientX);
      setTranslateX((prev) => prev + diff);
    },
    [isDragging, startX]
  );

  const onEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const visibleSets = 3;
  const allLogos = Array(visibleSets).fill(clients).flat();

  return (
    <div className="bg-[#f8f9fc] py-8 sm:py-10 lg:py-12 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4">
        <div className="relative w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex w-max gap-10 sm:gap-14 md:gap-20 cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              transition: isDragging ? "none" : "transform 0.12s ease-out",
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              onStart(e.clientX);
            }}
            onMouseMove={(e) => onMove(e.clientX)}
            onMouseUp={onEnd}
            onMouseLeave={onEnd}
            onTouchStart={(e) => {
              e.preventDefault();
              onStart(e.touches[0].clientX);
            }}
            onTouchMove={(e) => onMove(e.touches[0].clientX)}
            onTouchEnd={onEnd}
          >
            {allLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="Client Logo"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain pointer-events-none"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}