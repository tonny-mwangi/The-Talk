
import React, { useState } from "react";
import {
  ThumbsUp,
  MessageSquare,
  Facebook,
  Twitter,
  // Linkedin, // Removed
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const socialLinks = [
  {
    name: "Facebook",
    Icon: Facebook,
    getUrl: (title: string, url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "Twitter",
    Icon: Twitter,
    getUrl: (title: string, url: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    name: "WhatsApp",
    Icon: MessageSquare,
    getUrl: (title: string, url: string) =>
      `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
  },
  // Removed LinkedIn share link
];

type Comment = {
  author: string;
  text: string;
};

interface BlogReactionsProps {
  postId: string | number;
  postTitle: string;
}

const getCurrentUrl = () =>
  typeof window !== "undefined" ? window.location.href : "";

const BlogReactions: React.FC<BlogReactionsProps> = ({ postId, postTitle }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  const handleLike = () => {
    setLikeCount((c) => c + 1);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorInput.trim() || !commentInput.trim()) return;
    setComments([...comments, { author: authorInput, text: commentInput }]);
    setAuthorInput("");
    setCommentInput("");
  };

  const shareUrl = getCurrentUrl();

  return (
    <section className="mt-4 p-4 border rounded-lg bg-gray-50">
      {/* Reactions Row */}
      <div className="flex items-center gap-6 mb-3">
        <Button
          variant="ghost"
          className="flex items-center gap-1 text-gray-700"
          onClick={handleLike}
          aria-label="Like"
        >
          <ThumbsUp className="w-5 h-5" />
          <span className="ml-1">{likeCount}</span>
        </Button>
        <div className="flex gap-2 items-center">
          {socialLinks.map(({ name, Icon, getUrl }) => (
            <a
              key={name}
              href={getUrl(postTitle, shareUrl)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${name}`}
              className="text-gray-500 hover:text-primary transition"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div>
        <h4 className="font-semibold text-sm mb-2 text-gray-700">Comments</h4>
        {comments.length === 0 && (
          <div className="text-xs text-gray-400 mb-2">No comments yet.</div>
        )}
        <ul className="mb-3 space-y-2">
          {comments.map((comment, idx) => (
            <li key={idx} className="flex flex-col bg-white rounded px-3 py-2 border text-sm">
              <span className="font-medium">{comment.author}</span>
              <span className="text-gray-600">{comment.text}</span>
            </li>
          ))}
        </ul>
        <form onSubmit={handleCommentSubmit} className="flex flex-col gap-2 md:flex-row md:items-center">
          <Input
            type="text"
            placeholder="Your name"
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
            className="md:w-1/4"
            name="author"
            required
            maxLength={32}
          />
          <Textarea
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            rows={1}
            required
            maxLength={200}
            className="resize-none md:w-1/2"
            name="comment"
          />
          <Button type="submit" size="sm" className="mt-2 md:mt-0">
            Post
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BlogReactions;

