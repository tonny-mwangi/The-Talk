
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export type BlogAuthor = { name: string; avatar?: string } | null;
export type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  image: string;
  date: string;
  author?: BlogAuthor;
  minuteRead?: number;
  views?: number;
  comments?: number;
  likes?: number;
  // Optionally, allow passing /blogs or /blogs/category/ as base
  to?: string;
};

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link to={post.to ? `${post.to}/${post.slug}` : `/blogs/${post.slug}`} className="group flex flex-col h-full">
    <div className="bg-white border border-gray-200 shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200 h-full">
      {/* Image */}
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-52 object-cover"
          loading="lazy"
        />
      </div>
      {/* Author/meta */}
      <div className="flex items-center gap-3 px-5 pt-4 pb-2">
        <img
          src={
            post.author?.avatar ||
            "https://randomuser.me/api/portraits/men/5.jpg"
          }
          alt={post.author?.name || "Admin"}
          className="h-8 w-8 border object-cover"
        />
        <div className="flex flex-col text-xs text-gray-500 leading-tight">
          <span className="font-semibold">
            {post.author?.name || "Admin"}
          </span>
          <span>
            {post.date}
            {post.minuteRead !== undefined && (
              <>
                &nbsp; • &nbsp;{post.minuteRead} min read
              </>
            )}
          </span>
        </div>
        <div className="flex-1" />
        <span className="text-gray-400 text-lg">⋮</span>
      </div>
      {/* Title */}
      <div className="px-5">
        <h2 className="text-xl font-playfair font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
          {post.title}
        </h2>
      </div>
      {/* Excerpt */}
      <div className="px-5 pb-2">
        {post.excerpt && (
          <p className="text-gray-700 text-sm font-inter mb-2">
            {post.excerpt}
          </p>
        )}
      </div>
      {/* Footer */}
      <div className="border-t px-5 py-2 flex items-center text-xs text-gray-500 gap-5 font-medium mt-auto">
        <span>
          {post.views ?? 0} views
        </span>
        <span>
          {post.comments ?? 0} comments
        </span>
        <div className="flex-1" />
        <span className="flex items-center gap-1">
          <Heart size={16} className="text-red-400" fill="currentColor" />
          {post.likes ?? 0}
        </span>
      </div>
    </div>
  </Link>
);

export default BlogCard;

