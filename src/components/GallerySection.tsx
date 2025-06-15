
import React from "react";
import { GalleryHorizontal } from "lucide-react";
import AdSpace from "./AdSpace";

// Accept images as props for flexibility
const GallerySection = ({
  galleryImages,
}: {
  galleryImages: { src: string; caption: string }[];
}) => (
  <>
    {/* Decorative Divider */}
    <div className="my-16 flex items-center">
      <span className="flex-1 h-1 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 rounded-full" />
      <GalleryHorizontal className="mx-4 text-primary/70 h-8 w-8" />
      <span className="flex-1 h-1 bg-gradient-to-l from-primary/10 via-primary/50 to-primary/10 rounded-full" />
    </div>
    {/* Gallery Section */}
    <section className="mb-20">
      <h2 className="text-2xl md:text-3xl font-playfair text-center font-bold text-black mb-2 tracking-tight">
        Featured Gallery
      </h2>
      <p className="text-gray-500 text-md mb-8 text-center">
        Dive into moments of creativity, inspiration, and life. Explore the stories that spark curiosity across all topics.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mx-auto max-w-4xl">
        {/* AD SPACE inside gallery */}
        <AdSpace className="col-span-1 md:col-span-2" />
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-[0_2px_20px_0_rgba(30,30,60,0.06)] border border-gray-200 overflow-hidden hover-scale relative group transition-all"
          >
            <img
              src={img.src}
              alt={img.caption}
              className="h-52 sm:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center p-2 text-sm font-semibold font-playfair opacity-90">
              {img.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default GallerySection;
