import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";

type BlogPost = {
  id: string;
  title: string;
  content: string;
  category: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
};

const initialForm = {
  title: "",
  content: "",
  category: "",
  image: null as File | null,
};

const BlogsAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [success, setSuccess] = useState<string | null>(null);

  const fileRef = useRef<HTMLInputElement>(null);

  // Placeholder fetch (replace with your MongoDB/Express API logic)
  // Fix: use useEffect instead of useState for side effects
  useEffect(() => {
    async function fetchPosts() {
      // For now, load no posts. Plug your own fetch code here.
      setPosts([]);
    }
    fetchPosts();
  }, [refreshFlag]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as any;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Placeholder submit (replace with your Mongo/Express upload logic)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    // TODO: Upload logic to your Express/Mongo backend goes here
    setTimeout(() => {
      setSuccess("Feature coming soon (connect to your backend)!");
      setLoading(false);
      setForm(initialForm);
      if (fileRef.current) fileRef.current.value = "";
      setRefreshFlag((f) => f + 1);
    }, 1000);
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    setError(null);
    // TODO: Delete logic for your Express/Mongo backend goes here
    setTimeout(() => {
      setLoading(false);
      setRefreshFlag((f) => f + 1);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-gray-100 to-gray-300">
      <Navbar />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-5">Blog Admin Panel</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-4 shadow mb-8 space-y-2"
        >
          <div className="flex flex-col">
            <label className="font-medium">Title</label>
            <input
              type="text"
              name="title"
              className="border px-2 py-1 rounded"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Category</label>
            <input
              type="text"
              name="category"
              className="border px-2 py-1 rounded"
              value={form.category}
              onChange={handleChange}
              placeholder="e.g. Travel, Cars, Aviation"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Content</label>
            <textarea
              name="content"
              rows={3}
              className="border px-2 py-1 rounded"
              value={form.content}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Image</label>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              name="image"
              className="rounded"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 transition text-white px-5 py-2 mt-2 rounded"
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Post"}
          </button>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && (
            <div className="text-green-600 text-sm">{success}</div>
          )}
        </form>
        <h2 className="text-xl font-bold mb-2">All Blog Posts</h2>
        {loading && <p>Loading...</p>}
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="bg-white rounded shadow p-4 flex flex-col md:flex-row md:items-center gap-3"
            >
              <div className="flex-1">
                <div className="font-bold">{post.title}</div>
                <div className="text-xs text-gray-500">
                  {post.category} • {new Date(post.created_at).toLocaleString()}
                </div>
                <div className="mt-2 text-gray-700 line-clamp-2">
                  {post.content}
                </div>
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt="Cover"
                    className="mt-2 w-full max-w-xs rounded"
                  />
                )}
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => handleDelete(post.id)}
                disabled={loading}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default BlogsAdmin;
