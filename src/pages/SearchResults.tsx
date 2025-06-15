import React from "react";
import Navbar from "@/components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

// Unified mock blog post data (copied from Blogs.tsx)
const allPosts = [
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

function useQuery() {
  const { search } = useLocation();
  return useMemo(
    () =>
      Object.fromEntries(new URLSearchParams(search)),
    [search]
  );
}

const SearchResults = () => {
  const query = useQuery();
  const term = (query.q || "").toLowerCase();

  const results = React.useMemo(() => {
    if (!term) return [];
    return allPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(term)) ||
        (p.author?.name && p.author.name.toLowerCase().includes(term))
    );
  }, [term]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-gray-100 to-gray-300 flex flex-col">
      <Navbar />
      <div className="max-w-2xl w-full mx-auto px-4 pb-16 pt-12 flex-1">
        <h1 className="text-3xl font-playfair font-bold mb-6 text-center">
          Search Results for '{query.q}'
        </h1>
        {term === "" ? (
          <p className="text-center text-gray-500">Please enter a search term.</p>
        ) : results.length === 0 ? (
          <p className="text-center text-gray-500">No posts found for "{query.q}".</p>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {results.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blogs/${post.slug}`}
                className="group bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover-scale card-hover transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="text-xs uppercase text-gray-500 mb-1">
                    {post.date}
                  </div>
                  <h3 className="text-lg font-playfair font-bold group-hover:text-primary transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-inter">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
