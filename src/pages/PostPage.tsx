import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BlogReactions from "@/components/BlogReactions";
import BlogCard from "@/components/BlogCard";
import AdSpace from "@/components/AdSpace";

// Unified post data (no category structure)
const blogPosts = [
  {
    slug: "journey-through-the-misty-mountains",
    title: "Journey Through the Misty Mountains",
    date: "June 10, 2025",
    author: { name: "Alice Smith", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    content: "Explore untouched peaks and discover the thrill of adventure amidst clouds and sunrises.",
  },
  {
    slug: "urban-escapes-top-5-city-retreats",
    title: "Urban Escapes: Top 5 City Retreats",
    date: "May 22, 2025",
    author: { name: "John Lee", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
    content: "Even city lovers need an escape. These destinations offer the best of both worlds—urban life and tranquil scenery.",
  },
  {
    slug: "the-art-of-automotive-engineering",
    title: "The Art of Automotive Engineering",
    date: "June 7, 2025",
    author: { name: "Maria Garcia", avatar: "https://randomuser.me/api/portraits/women/42.jpg" },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    content: "Dive into performance upgrades, classic designs, and the bright future of electric cars.",
  },
  {
    slug: "5-legendary-cars-that-shaped-history",
    title: "5 Legendary Cars That Shaped History",
    date: "May 30, 2025",
    author: { name: "Luke Jensen", avatar: "https://randomuser.me/api/portraits/men/40.jpg" },
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
    content: "A celebration of innovation, style, and the most influential automobiles ever built.",
  },
  {
    slug: "above-the-clouds-the-aviation-era",
    title: "Above the Clouds: The Aviation Era",
    date: "June 13, 2025",
    author: { name: "Olivia Stern", avatar: "https://randomuser.me/api/portraits/women/20.jpg" },
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
    content: "From propellers to jet engines, discover the tech, passion, and magic of human flight.",
  },
  {
    slug: "innovations-in-flight-the-next-generation",
    title: "Innovations in Flight: The Next Generation",
    date: "May 15, 2025",
    author: { name: "Evan Brown", avatar: "https://randomuser.me/api/portraits/men/10.jpg" },
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    content: "Meet the visionaries and the aircraft setting new standards for tomorrow's skies.",
  },
];

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div>
        <Navbar />
        <main className="max-w-2xl mx-auto pt-12 px-4">
          <h1 className="text-2xl font-bold mb-6">Post not found.</h1>
          <button className="underline text-primary" onClick={() => navigate(-1)}>
            Go back
          </button>
        </main>
      </div>
    );
  }

  // Related posts (exclude the current slug)
  const related = blogPosts.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-gray-100 to-gray-300">
      <Navbar />
      {/* AD SPACE under navbar */}
      <AdSpace />
      <div className="max-w-3xl mx-auto border rounded-2xl shadow-lg bg-white my-10 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-72 sm:h-96 object-cover object-center"
        />
        <section className="px-8 py-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-xs text-primary font-semibold uppercase">{post.date}</span>
          </div>
          <h1 className="text-3xl font-playfair font-bold mb-2">{post.title}</h1>
          {/* Author info */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-10 w-10 rounded-full border object-cover"
            />
            <span className="font-medium text-gray-900">{post.author.name}</span>
          </div>
          <div className="text-base font-inter text-gray-700 mb-5">{post.content}</div>
          {/* Social+like+comments */}
          <BlogReactions
            postId={slug}
            postTitle={post.title}
          />
        </section>
        {/* AD SPACE inside post */}
        <AdSpace vertical className="mx-auto my-6" />
      </div>
      {/* Related Posts */}
      {related.length > 0 && (
        <aside className="max-w-3xl mx-auto px-4 mb-10">
          {/* AD SPACE in sidebar/aside */}
          <AdSpace vertical className="mb-6 mx-auto" />
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((rel) => (
              <BlogCard key={rel.slug} post={rel} />
            ))}
          </div>
        </aside>
      )}
      {/* AD SPACE above footer */}
      <AdSpace />
      <footer className="text-center text-sm text-black/70 py-8 border-t bg-white">
        &copy; {new Date().getFullYear()} The Torque.
      </footer>
    </div>
  );
};

export default PostPage;
