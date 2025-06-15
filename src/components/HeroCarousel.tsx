
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// IMAGES & VIDEO
const slides = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1659653156777-ada9aa338a79?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // updated aircraft image
    alt: "Aircraft taking off from an airport",
    label: "Aircraft Taking Off",
  },
  {
    type: "video",
    src: "https://player.pexels.com/video-files/2169880/2169880-hd_1920_1080_25fps.mp4",
    poster: "https://images.pexels.com/videos/2169880/free-video-2169880.jpg?auto=compress&w=800",
    alt: "Aerial Escape: Dream Resort Vistas",
    label: "Aerial Escape: Dream Resort Vistas",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1579566346927-c68383817a25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // UPDATED CAR IMAGE HERE
    alt: "Car",
    label: "A Car",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // kenyan beach
    alt: "Kenyan Beach",
    label: "Kenyan Beach",
  },
  // NEW IMAGES START HERE
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1749627893495-4b9554bbf3d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Premium Photo 1",
    label: "Premium Photo 1",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1748912844531-a7c6b6abdac6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Urban Sundown",
    label: "Urban Sundown",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Person at Ocean",
    label: "Person at Ocean",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Winter Lake",
    label: "Winter Lake",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1562082089-ae7d7acbd18d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Desert Car",
    label: "Desert Car",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1669035653144-5bd9bc1a0517?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Colorful Streets",
    label: "Colorful Streets",
  },
];

const HeroCarousel = () => {
  // 3 seconds per slide, loop with pause on hover
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="relative w-full min-h-[380px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden flex items-center justify-center mb-12">
      <div className="w-full max-w-6xl mx-auto px-4">
        <Carousel
          className="w-full h-full"
          opts={{
            loop: true,
          }}
          plugins={[autoplay.current]}
        >
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={idx}>
                <div className="relative w-full h-[380px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                  {slide.type === "video" ? (
                    <video
                      src={slide.src}
                      poster={slide.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
                    />
                  ) : (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
                      draggable={false}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />
                  {/* No heading or intro notes */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroCarousel;
