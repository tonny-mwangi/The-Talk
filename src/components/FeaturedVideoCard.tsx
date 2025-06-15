
import React from "react";

const FeaturedVideoCard = () => (
  <section className="mb-16 flex justify-center">
    <div className="w-full md:max-w-3xl rounded-2xl overflow-hidden shadow-lg relative group hover-scale bg-white border border-gray-200">
      <div className="aspect-video bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="https://images.pexels.com/videos/2169880/free-video-2169880.jpg?auto=compress&w=800"
          className="w-full h-full object-cover"
          src="https://player.pexels.com/video-files/2169880/2169880-hd_1920_1080_25fps.mp4"
        >
          Sorry, your browser does not support embedded videos.
        </video>
      </div>
      {/* Overlay Title & Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent px-6 py-4">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 font-playfair drop-shadow">
          Aerial Escape: Dream Resort Vistas
        </h3>
        <p className="text-gray-200 text-sm sm:text-base">
          Take a moment to drift above paradise. Immerse yourself in the view, recharge your mind.
        </p>
      </div>
    </div>
  </section>
);

export default FeaturedVideoCard;
