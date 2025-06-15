import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import AdSpace from "@/components/AdSpace";

// Unified mock blog post data (copied from Index for demo)
const blogPosts = [
  {
    slug: "journey-through-the-misty-mountains",
    title: "Journey Through the Misty Mountains",
    excerpt: "Discover breathtaking landscapes and hidden gems in the world's most remote places.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    date: "June 10, 2025",
    author: {
      name: "Alice Smith",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    minuteRead: 2,
    views: 250,
    comments: 4,
    likes: 21,
  },
  {
    slug: "urban-escapes-top-5-city-retreats",
    title: "Urban Escapes: Top 5 City Retreats",
    excerpt: "Even city lovers need an escape. These destinations offer the best of both worlds—urban life and tranquil scenery.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
    date: "May 22, 2025",
    author: {
      name: "John Lee",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    minuteRead: 1,
    views: 180,
    comments: 2,
    likes: 10,
  },
  {
    slug: "the-art-of-automotive-engineering",
    title: "The Art of Automotive Engineering",
    excerpt: "Delve into electric cars, classic engines, and automotive innovations.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    date: "June 7, 2025",
    author: {
      name: "Maria Garcia",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    },
    minuteRead: 2,
    views: 95,
    comments: 0,
    likes: 5,
  },
  {
    slug: "5-legendary-cars-that-shaped-history",
    title: "5 Legendary Cars That Shaped History",
    excerpt: "A celebration of innovation, style, and the most influential automobiles ever built.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
    date: "May 30, 2025",
    author: {
      name: "Luke Jensen",
      avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    minuteRead: 3,
    views: 330,
    comments: 7,
    likes: 32,
  },
  {
    slug: "above-the-clouds-the-aviation-era",
    title: "Above the Clouds: The Aviation Era",
    excerpt: "From propellers to jets, discover the magic of human flight.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
    date: "June 13, 2025",
    author: {
      name: "Olivia Stern",
      avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    minuteRead: 1,
    views: 120,
    comments: 1,
    likes: 7,
  },
  {
    slug: "innovations-in-flight-the-next-generation",
    title: "Innovations in Flight: The Next Generation",
    excerpt: "Visionaries and the aircraft setting new standards for tomorrow's skies.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    date: "May 15, 2025",
    author: {
      name: "Evan Brown",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    minuteRead: 2,
    views: 77,
    comments: 0,
    likes: 2,
  },
  {
    slug: "adventure-in-the-wild-west",
    title: "Adventure in the Wild West",
    excerpt: "Ride with pioneers and explore the legendary lands of cowboys and outlaws.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    date: "June 14, 2025",
    author: {
      name: "Sam Carter",
      avatar: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    minuteRead: 2,
    views: 210,
    comments: 3,
    likes: 11,
  },
  {
    slug: "music-through-the-decades",
    title: "Music Through the Decades",
    excerpt: "A nostalgic journey from jazz age swing to modern pop icons.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    date: "June 2, 2025",
    author: {
      name: "Nina Patel",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    minuteRead: 4,
    views: 156,
    comments: 1,
    likes: 13,
  },
  {
    slug: "culinary-wonders-around-the-world",
    title: "Culinary Wonders Around the World",
    excerpt: "A global tasting menu—delve into flavors from every corner.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    date: "May 27, 2025",
    author: {
      name: "Pierre Dubois",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    minuteRead: 3,
    views: 123,
    comments: 0,
    likes: 8,
  },
  {
    slug: "portrait-of-an-artist",
    title: "Portrait of an Artist",
    excerpt: "Inside the creative mind—perspectives from the world’s boldest artists.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    date: "June 1, 2025",
    author: {
      name: "Evelyn Moore",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    minuteRead: 2,
    views: 89,
    comments: 1,
    likes: 6,
  },
  {
    slug: "the-rise-of-smart-homes",
    title: "The Rise of Smart Homes",
    excerpt: "How technology is transforming our living spaces and daily routines.",
    image: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=800&q=80",
    date: "May 19, 2025",
    author: {
      name: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    minuteRead: 2,
    views: 140,
    comments: 4,
    likes: 17,
  },
  {
    slug: "nature-photography-masterclass",
    title: "Nature Photography Masterclass",
    excerpt: "Tips, tricks, and inspirational stories from world-class outdoor photographers.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a770b?auto=format&fit=crop&w=800&q=80",
    date: "June 9, 2025",
    author: {
      name: "Laura Becker",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    minuteRead: 3,
    views: 214,
    comments: 5,
    likes: 24,
  },
];

const BLOGS_PER_PAGE = 6;

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + BLOGS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AdSpace />
      <header className="py-8 px-4 text-center bg-white mb-6">
        <h1 className="text-3xl font-playfair font-bold text-black">The Talk</h1>
        <p className="text-lg text-gray-700 mt-2">
          Discover captivating blogs, fascinating ideas, and stories from all walks of life.
        </p>
      </header>
      <main className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {blogPosts.slice(0, visibleCount).map((post, idx) =>
          idx === 2 ? (
            <React.Fragment key="ad-main-list">
              <AdSpace />
              <BlogCard post={post} />
            </React.Fragment>
          ) : (
            <BlogCard key={post.slug} post={post} />
          )
        )}
      </main>
      {visibleCount < blogPosts.length && (
        <div className="flex justify-center pb-16">
          <button
            className="bg-primary text-white rounded px-4 py-2 hover:bg-primary/90 transition-colors"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
      <AdSpace />
      <footer className="text-center text-sm text-black/70 py-8 border-t bg-white">
        &copy; {new Date().getFullYear()} The Talk.
      </footer>
    </div>
  );
};

export default Blogs;
