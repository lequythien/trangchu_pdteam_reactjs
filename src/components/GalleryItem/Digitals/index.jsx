import { GalleryItem } from "..";

export function Digitals({ images }) {
  if (images.length < 8) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <GalleryItem img={images[0]} />
      <div className="grid grid-rows-2 gap-6">
        <GalleryItem img={images[1]} />
        <GalleryItem img={images[2]} />
      </div>
      <GalleryItem img={images[3]} />

      <div className="grid grid-rows-2 gap-6">
        <GalleryItem img={images[4]} />
        <GalleryItem img={images[5]} />
      </div>
      <GalleryItem img={images[6]} />
      <GalleryItem img={images[7]} />
    </div>
  );
}